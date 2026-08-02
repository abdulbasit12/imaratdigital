import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import moment from "moment";
import { onRequest } from "firebase-functions/v2/https";

if (getApps()?.length === 0) initializeApp();
const db = getFirestore();

export const monthlySync = onSchedule(
    {
        schedule: "0 0 1 * *",       // 2 AM on the 1st of every month
        timeZone: "Asia/Karachi",
        region: "asia-south1",
        memory: "256MiB",
        timeoutSeconds: 540,
        retryCount: 3,
        maxInstances: 1,
    },
    async (event) => {
        logger.info("monthlySync started", { scheduledTime: event.scheduleTime });
        await runMonthlySyncForAllUsers();
        logger.info("monthlySync completed");
    }
);

async function runMonthlySyncForAllUsers() {
    // Running on Aug 1 closes July; opening balance comes from June's closing
    const closingMonthId = moment().subtract(1, "month").format("YYYY-MM"); // "2026-07"
    const openingMonthId = moment().subtract(2, "month").format("YYYY-MM"); // "2026-06"

    const PAGE_SIZE = 500;
    let lastDoc = null;
    let totalProcessed = 0;
    let totalSkipped = 0;

    while (true) {
        let query = db.collection("users").orderBy("__name__").limit(PAGE_SIZE);
        if (lastDoc) query = query.startAfter(lastDoc);

        const snapshot = await query.get();
        if (snapshot.empty) break;

        const batch = db.batch();
        let batchCount = 0;

        for (const userDoc of snapshot.docs) {
            const userId = userDoc.id;
            const userData = userDoc.data();

            // Idempotent per user, per month — nested under the user, not a shared collection
            const closingRef = userDoc.ref.collection("monthlyClosing").doc(closingMonthId);
            const existingClosing = await closingRef.get();
            if (existingClosing.exists) {
                totalSkipped++;
                continue;
            }

            // 1. Opening balance = previous month's closingBalance,
            //    or user doc's `openingBalance` field if this is their first month
            let openingBalance;
            const prevClosingSnap = await userDoc.ref.collection("monthlyClosing").doc(openingMonthId).get();
            if (prevClosingSnap.exists) {
                openingBalance = prevClosingSnap.data().closingBalance ?? 0;
            } else {
                openingBalance = userData.openingBalance ?? 0;
            }

            // 2. This user's expenses doc for the closing month
            const expensesSnap = await userDoc.ref.collection("expenses").doc(closingMonthId).get();
            const expensesData = expensesSnap.exists ? expensesSnap.data() : {};

            const totalCollection = expensesData.totalCollection ?? 0;

            // "expenses" assumed to be an array of entries, each with an `amount` field — adjust if different
            const expensesList = Array.isArray(expensesData.expenses) ? expensesData.expenses : [];
            const totalExpenses = expensesList.reduce((sum, e) => sum + (e.amount ?? 0), 0);

            // 3. Closing balance
            const closingBalance = openingBalance + totalCollection - totalExpenses;

            batch.set(closingRef, {
                uid: userId,
                month: closingMonthId,
                openingBalance,
                totalCollection,
                totalExpenses,
                closingBalance,
                status: "success",
                runAt: FieldValue.serverTimestamp(),
            });
            batchCount++;
        }

        if (batchCount > 0) {
            await batch.commit();
        }

        totalProcessed += snapshot.docs.length;
        lastDoc = snapshot.docs[snapshot.docs.length - 1];

        if (snapshot.docs.length < PAGE_SIZE) break;
    }

    logger.info("Monthly closing sync finished", { totalProcessed, totalSkipped, closingMonthId });
}
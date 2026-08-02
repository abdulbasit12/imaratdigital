import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";

export const nightlySync = onSchedule(
    {
        schedule: "0 2 * * *",       // cron syntax — 2 AM daily
        timeZone: "Asia/Karachi",
        region: "us-central1",
        memory: "256MiB",
        timeoutSeconds: 300,
        retryCount: 3,
        maxInstances: 1,             // prevents overlapping runs
    },
    async (event) => {
        logger.info("nightlySync started", { scheduledTime: event.scheduleTime });

        // your job logic here
        await runSync();

        logger.info("nightlySync completed");
    }
);

async function runSync() {
    // e.g. call your Next.js API route, or hit Firestore directly
}
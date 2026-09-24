import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { initializeApp, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'

if (!getApps().length) {
    initializeApp()
}

const firestore = getFirestore()
const auth = getAuth()

export const deleteSubUser = onCall(async (request) => {
    const { uid } = request.data
    const callerUid = request.auth?.uid

    if (!callerUid) {
        throw new HttpsError('unauthenticated', 'Must be signed in.')
    }
    if (!uid) {
        throw new HttpsError('invalid-argument', 'uid is required.')
    }

    // Verify the caller actually owns/manages the user being deleted
    const targetDoc = await firestore.collection('users').doc(uid).get()
    if (!targetDoc.exists) {
        throw new HttpsError('not-found', 'User not found.')
    }
    if (targetDoc.data().parent_uid !== callerUid) {
        throw new HttpsError('permission-denied', 'You do not manage this user.')
    }

    // Delete Auth record first, then Firestore doc
    await auth.deleteUser(uid)
    await firestore.collection('users').doc(uid).delete()

    return { success: true }
})
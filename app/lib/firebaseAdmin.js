import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json'

function formatPrivateKey(key) {
    return key.replace(/\\n/g, '\n');
}

export function initFirebaseAdmin() {
    const projectId = process.env.PROJECT_ID;
    const clientEmail = process.env.CLIENT_EMAIL;
    const privateKey = process.env.PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Missing Firebase Admin environment variables.');
    }

    if (admin.apps.length > 0) {
        return admin.app();
    }

    return admin.initializeApp({
        credential: admin.credential.cert({
            projectId,
            clientEmail,
            privateKey: formatPrivateKey(privateKey),
        }),
    });
}

export const firebaseMessageing = () => initFirebaseAdmin().messaging()

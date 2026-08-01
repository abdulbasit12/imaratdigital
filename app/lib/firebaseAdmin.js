import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

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
    console.warn(getApps()?.length)
    if (getApps()?.length > 0) {
        return getApp();
    }

    return initializeApp({
        credential: cert({
            projectId,
            clientEmail,
            privateKey: formatPrivateKey(privateKey),
        }),
    });
}

export const firebaseMessageing = () => getMessaging(initFirebaseAdmin())

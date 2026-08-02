import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
export { monthlySync } from './src/scheduled/monthlySync.js'

setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

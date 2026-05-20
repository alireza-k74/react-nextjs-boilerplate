import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { firebaseConfig, isFirebaseConfigured } from "./config";

let app: FirebaseApp | null = null;

export function getFirebaseApp(): FirebaseApp | null {
  if (!isFirebaseConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[firebase] Firebase is not configured. Set env variables in .env.local");
    }
    return null;
  }

  if (!app) {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  }

  return app;
}

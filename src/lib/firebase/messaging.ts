import { getMessaging, getToken, onMessage, type Messaging } from "firebase/messaging";
import { env } from "@/config/env";
import { getFirebaseApp } from "./app";

export function getFirebaseMessaging(): Messaging | null {
  if (typeof window === "undefined") return null;
  const app = getFirebaseApp();
  if (!app) return null;

  try {
    return getMessaging(app);
  } catch {
    return null;
  }
}

export async function requestFcmToken(): Promise<string | null> {
  const messaging = getFirebaseMessaging();
  if (!messaging || !env.firebase.vapidKey) return null;

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return null;

    return getToken(messaging, { vapidKey: env.firebase.vapidKey });
  } catch {
    return null;
  }
}

export function onForegroundMessage(
  callback: (payload: unknown) => void,
): (() => void) | undefined {
  const messaging = getFirebaseMessaging();
  if (!messaging) return undefined;

  return onMessage(messaging, callback);
}

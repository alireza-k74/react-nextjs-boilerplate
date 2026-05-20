const requiredPublic = [
  "NEXT_PUBLIC_APP_NAME",
  "NEXT_PUBLIC_APP_URL",
  "NEXT_PUBLIC_API_BASE_URL",
] as const;

function getEnv(key: string, fallback = ""): string {
  return process.env[key] ?? fallback;
}

function assertPublicEnv(): void {
  if (process.env.NODE_ENV === "production") {
    for (const key of requiredPublic) {
      if (!process.env[key]) {
        console.warn(`[env] Missing recommended public variable: ${key}`);
      }
    }
  }
}

assertPublicEnv();

export const env = {
  app: {
    name: getEnv("NEXT_PUBLIC_APP_NAME", "Boilerplate Web"),
    url: getEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),
    defaultLocale: getEnv("NEXT_PUBLIC_DEFAULT_LOCALE", "en"),
  },
  api: {
    baseUrl: getEnv("NEXT_PUBLIC_API_BASE_URL", "http://localhost:4000/api"),
    secretKey: getEnv("API_SECRET_KEY"),
  },
  auth: {
    cookieName: getEnv("NEXT_PUBLIC_AUTH_COOKIE_NAME", "auth_token"),
    cookieSecret: getEnv("AUTH_COOKIE_SECRET"),
  },
  firebase: {
    apiKey: getEnv("NEXT_PUBLIC_FIREBASE_API_KEY"),
    authDomain: getEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: getEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: getEnv("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getEnv("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    appId: getEnv("NEXT_PUBLIC_FIREBASE_APP_ID"),
    measurementId: getEnv("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"),
    vapidKey: getEnv("NEXT_PUBLIC_FIREBASE_VAPID_KEY"),
  },
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
} as const;

export type Env = typeof env;

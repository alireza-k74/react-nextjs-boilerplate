# Firebase Setup

This project uses Firebase modular SDK wrappers in `src/lib/firebase`.

## 1) Create Firebase Project

1. Open [Firebase Console](https://console.firebase.google.com/).
2. Create a project.
3. Add a Web app and copy the config values.

## 2) Configure Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (optional)
- `NEXT_PUBLIC_FIREBASE_VAPID_KEY` (for messaging)

## 3) Enable Services

- **Authentication**: enable providers needed by your app.
- **Firestore**: create database and set secure rules.
- **Storage**: configure buckets and access rules.
- **Cloud Messaging**: enable web push and set VAPID key.

## 4) Verify Integration

- Start app with `yarn dev` (or `npm run dev`).
- Call wrappers from `src/lib/firebase` in a test page.
- Confirm no runtime warnings for missing Firebase config.

## 5) Production Notes

- Never commit private service credentials.
- Restrict domains and API keys in Firebase Console.
- Keep Firestore/Storage rules least-privilege.

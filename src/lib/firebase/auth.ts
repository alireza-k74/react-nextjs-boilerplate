import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type Auth,
  type User,
  type UserCredential,
} from "firebase/auth";
import { getFirebaseApp } from "./app";

export function getFirebaseAuth(): Auth | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getAuth(app);
}

export async function firebaseSignIn(
  email: string,
  password: string,
): Promise<UserCredential | null> {
  const auth = getFirebaseAuth();
  if (!auth) return null;
  return signInWithEmailAndPassword(auth, email, password);
}

export async function firebaseSignUp(
  email: string,
  password: string,
): Promise<UserCredential | null> {
  const auth = getFirebaseAuth();
  if (!auth) return null;
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function firebaseSignOut(): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) return;
  await signOut(auth);
}

export function subscribeToAuthState(callback: (user: User | null) => void): () => void {
  const auth = getFirebaseAuth();
  if (!auth) {
    callback(null);
    return () => undefined;
  }
  return onAuthStateChanged(auth, callback);
}

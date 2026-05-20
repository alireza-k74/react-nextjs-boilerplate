import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  type FirebaseStorage,
} from "firebase/storage";
import { getFirebaseApp } from "./app";

export function getFirebaseStorage(): FirebaseStorage | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getStorage(app);
}

export async function uploadFile(path: string, file: File): Promise<string | null> {
  const storage = getFirebaseStorage();
  if (!storage) return null;

  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
}

export async function deleteFile(path: string): Promise<void> {
  const storage = getFirebaseStorage();
  if (!storage) return;
  await deleteObject(ref(storage, path));
}

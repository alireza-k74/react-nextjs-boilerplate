import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  type DocumentData,
  type Firestore,
  type QueryConstraint,
} from "firebase/firestore";
import { getFirebaseApp } from "./app";

export function getFirebaseFirestore(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

export async function getDocument<T extends DocumentData>(
  collectionName: string,
  documentId: string,
): Promise<T | null> {
  const db = getFirebaseFirestore();
  if (!db) return null;

  const snapshot = await getDoc(doc(db, collectionName, documentId));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as unknown as T;
}

export async function queryCollection<T extends DocumentData>(
  collectionName: string,
  constraints: QueryConstraint[] = [],
): Promise<T[]> {
  const db = getFirebaseFirestore();
  if (!db) return [];

  const q = query(collection(db, collectionName), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as unknown as T);
}

export async function createDocument<T extends DocumentData>(
  collectionName: string,
  data: Omit<T, "id">,
): Promise<string | null> {
  const db = getFirebaseFirestore();
  if (!db) return null;

  const ref = await addDoc(collection(db, collectionName), data);
  return ref.id;
}

export async function updateDocument(
  collectionName: string,
  documentId: string,
  data: Partial<DocumentData>,
): Promise<void> {
  const db = getFirebaseFirestore();
  if (!db) return;
  await updateDoc(doc(db, collectionName, documentId), data);
}

export { where };

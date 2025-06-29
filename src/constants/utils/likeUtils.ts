import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  getCountFromServer,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const likeItem = async (
  type: "posts" | "reels",
  id: string,
  email: string
) => {
  const username = email.split("@")[0];
  const likeRef = collection(db, type, id, "likes");

  const q = query(likeRef, where("email", "==", email));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    await addDoc(likeRef, {
      email,
      username,
      timestamp: serverTimestamp(),
    });
  }
};

export const unlikeItem = async (
  type: "posts" | "reels",
  id: string,
  email: string
) => {
  const likeRef = collection(db, type, id, "likes");
  const q = query(likeRef, where("email", "==", email));
  const snapshot = await getDocs(q);

  for (const doc of snapshot.docs) {
    await deleteDoc(doc.ref);
  }
};

export const hasUserLiked = async (
  type: "posts" | "reels",
  id: string,
  email: string
) => {
  const likeRef = collection(db, type, id, "likes");
  const q = query(likeRef, where("email", "==", email));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
};

export const getLastLiker = async (type: "posts" | "reels", id: string) => {
  const likeRef = collection(db, type, id, "likes");
  const q = query(likeRef, orderBy("timestamp", "desc"), limit(1));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    return snapshot.docs[0].data().username;
  }
  return null;
};

export const getLikesCount = async (type: "posts" | "reels", id: string) => {
  const likeRef = collection(db, type, id, "likes");
  const snapshot = await getCountFromServer(likeRef);
  return snapshot.data().count;
};

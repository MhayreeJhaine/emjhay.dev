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

// localStorage
const getStorageKey = (type: "posts" | "reels") => `liked_${type}`;

const getLocalLikes = (type: "posts" | "reels") => {
  const raw = localStorage.getItem(getStorageKey(type));
  return raw ? JSON.parse(raw) : [];
};

const setLocalLikes = (type: "posts" | "reels", likes: string[]) => {
  localStorage.setItem(getStorageKey(type), JSON.stringify(likes));
};

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

    // Save in localStorage
    const likes = getLocalLikes(type);
    if (!likes.includes(id)) {
      likes.push(id);
      setLocalLikes(type, likes);
    }
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

  // Remove from localStorage
  const likes = getLocalLikes(type);
  const updated = likes.filter((itemId: string) => itemId !== id);
  setLocalLikes(type, updated);
};

// check liked status
export const hasUserLiked = async (
  type: "posts" | "reels",
  id: string,
  email: string
) => {
  // first check localStorage
  const likes = getLocalLikes(type);
  if (likes.includes(id)) return true;

  // fallback to checking Firestore
  const likeRef = collection(db, type, id, "likes");
  const q = query(likeRef, where("email", "==", email));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
};

// get recent liker
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

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebaseConfig";

export type MediaItem = {
  id: string;
  type: "image" | "video";
  media: string[];
  description?: string;
  numOfComments?: number;
  githubLink?: string;
  liveLink?: string;
  pinned?: boolean;
  hashtags?: string;
  createdAt?: string;
  category: "posts" | "reels" | "tagged";
};

export const useMedia = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      const querySnapshot = await getDocs(collection(db, "media"));
      const data: MediaItem[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as MediaItem);
      });
      setMedia(data);
      setLoading(false);
    };
    fetchMedia();
  }, []);
  return { media, loading };
};

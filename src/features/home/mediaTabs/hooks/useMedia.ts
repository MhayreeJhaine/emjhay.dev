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

// Local media fallback
export const ReelMediaSource: Record<string, string[]> = {
  r1: ["./videos/3Dee.mp4"],
};

export const useMedia = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      const querySnapshot = await getDocs(collection(db, "media"));
      const data: MediaItem[] = [];

      querySnapshot.forEach((doc) => {
        const docData = doc.data() as Omit<MediaItem, "id">;
        const id = doc.id;

        const patchedMedia =
          docData.type === "video" && ReelMediaSource[id]
            ? ReelMediaSource[id]
            : docData.media;

        data.push({ id, ...docData, media: patchedMedia });
      });

      setMedia(data);
      setLoading(false);
    };

    fetchMedia();
  }, []);

  return { media, loading };
};

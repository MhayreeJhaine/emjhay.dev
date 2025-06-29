import { HiMusicNote } from "react-icons/hi";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { MdOutlineModeComment } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { LuEllipsisVertical } from "react-icons/lu";
import {
  getLastLiker,
  getLikesCount,
  hasUserLiked,
  likeItem,
  unlikeItem,
} from "../../../../constants/utils/likeUtils";
import { useVisitorStore } from "../../../../store/visitorStore";
import { useEffect, useState, useCallback } from "react";
import { getGuestEmail } from "../../../../constants/utils/guestUtils";
import { MediaItem } from "../../../../constants/data/mediaData";

type Props = {
  item: MediaItem;
  likesCount: number;
  setLastLiker: (value: string | null) => void;
  setLikesCount: (value: number) => void;
};

const ReelActions = ({
  item,
  likesCount,
  setLastLiker,
  setLikesCount,
}: Props) => {
  const visitorMode = useVisitorStore((state) => state.visitorMode);
  const [hasLiked, setHasLiked] = useState(false);
  const guestEmail = getGuestEmail();

  const fetchLikeData = useCallback(async () => {
    const [liked, liker, count] = await Promise.all([
      hasUserLiked("reels", item.id, guestEmail),
      getLastLiker("reels", item.id),
      getLikesCount("reels", item.id),
    ]);

    setHasLiked(liked);
    setLastLiker(liker);
    setLikesCount(count);
  }, [item.id, guestEmail, setLastLiker, setLikesCount]);

  const handleLikeToggle = async () => {
    if (hasLiked) {
      await unlikeItem("reels", item.id, guestEmail);
    } else {
      await likeItem("reels", item.id, guestEmail);
    }

    fetchLikeData();
  };

  useEffect(() => {
    fetchLikeData();
  }, [fetchLikeData]);

  return (
    <div className="flex flex-col items-center gap-5 md:gap-7 lg:gap-3 cursor-pointer">
      <div className="flex flex-col gap-0 items-center">
        <div onClick={handleLikeToggle}>
          {hasLiked ? (
            <FaHeart size={25} color="red" />
          ) : (
            <FaRegHeart size={25} color="white" />
          )}
        </div>
        <p className="text-sm text-white">{likesCount}</p>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineModeComment size={22} color="white" />
        <p className="text-sm text-white">{item.numOfComments}</p>
      </div>
      <TbLocation size={22} color="white" />
      <LuEllipsisVertical size={22} color="white" />

      {!visitorMode && (
        <div className="relative h-6 w-6 rounded-sm border-2 border-white overflow-hidden">
          <img src="./images/EmJhay.jpg" className="w-full h-full" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-hoverBioBtns flex items-center justify-center">
            <HiMusicNote size={10} color="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelActions;

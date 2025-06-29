import { LuEllipsisVertical } from "react-icons/lu";
import { useEffect, useState } from "react";
import {
  getLastLiker,
  getLikesCount,
  hasUserLiked,
  likeItem,
  unlikeItem,
} from "../../../../constants/utils/likeUtils";
import PostCarousel from "./postCarousel";
import PostInfo from "./postInfo";
import PostActions from "./postActions";
import { getGuestEmail } from "../../../../constants/utils/guestUtils";
import { MediaItem } from "../hooks/useMedia";

type PostCardProps = {
  item: MediaItem;
};

const PostCard = ({ item }: PostCardProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const content = item.description || "";

  const [lastLiker, setLastLiker] = useState<string | null>(null);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState(false);

  const guestEmail = getGuestEmail();

  const handleLikeToggle = async () => {
    if (hasLiked) {
      await unlikeItem("posts", item.id, guestEmail);
    } else {
      await likeItem("posts", item.id, guestEmail);
    }

    const [liked, liker, count] = await Promise.all([
      hasUserLiked("posts", item.id, guestEmail),
      getLastLiker("posts", item.id),
      getLikesCount("posts", item.id),
    ]);

    setHasLiked(liked);
    setLastLiker(liker);
    setLikesCount(count);
  };

  useEffect(() => {
    (async () => {
      const [liked, liker, count] = await Promise.all([
        hasUserLiked("posts", item.id, guestEmail),
        getLastLiker("posts", item.id),
        getLikesCount("posts", item.id),
      ]);
      setHasLiked(liked);
      setLastLiker(liker);
      setLikesCount(count);
    })();
  }, [item.id, guestEmail]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden mb-4">
      <div className="flex flex-col items-center justify-center relative ">
        {/* Header */}
        <section className="w-full flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="./images/EmJhay.jpg"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">mhayreejhaine</p>
          </div>
          <LuEllipsisVertical size={25} />
        </section>

        {/* Post Carousel */}
        <PostCarousel
          media={item.media}
          carouselIndex={carouselIndex}
          setCarouselIndex={setCarouselIndex}
        />

        {/* Post Actions */}
        <PostActions
          hasLiked={hasLiked}
          likesCount={likesCount}
          numOfComments={item.numOfComments ?? 0}
          onLikeToggle={handleLikeToggle}
          lastLiker={lastLiker}
        />

        {/* Post Info */}
        <PostInfo
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          content={content}
          githubLink={item.githubLink}
          liveLink={item.liveLink}
          date={item.createdAt}
          hashtags={item.hashtags}
        />
      </div>
    </div>
  );
};

export default PostCard;

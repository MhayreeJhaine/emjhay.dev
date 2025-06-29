import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { MdOutlineModeComment } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";

type Props = {
  hasLiked: boolean;
  likesCount: number;
  numOfComments: number;
  onLikeToggle: () => void;
  lastLiker: string | null;
};

const PostActions = ({
  hasLiked,
  likesCount,
  numOfComments,
  onLikeToggle,
  lastLiker,
}: Props) => (
  <div className="w-full px-4 pt-5">
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <div onClick={onLikeToggle}>
            {hasLiked ? (
              <FaHeart size={25} color="red" />
            ) : (
              <FaRegHeart size={25} />
            )}
          </div>
          <p className="text-sm">{likesCount}</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <MdOutlineModeComment size={25} />
          <p className="text-sm">{numOfComments}</p>
        </div>
        <TbLocation size={25} className="cursor-pointer" />
      </div>
      <IoBookmarkOutline size={25} className="cursor-pointer" />
    </div>

    <p className="text-sm text-gray-400 mt-1">
      {likesCount > 0 && (
        <>
          Liked by <span className="font-medium">{lastLiker}</span>
          {likesCount > 1 && ` and others`}
        </>
      )}
    </p>
  </div>
);

export default PostActions;

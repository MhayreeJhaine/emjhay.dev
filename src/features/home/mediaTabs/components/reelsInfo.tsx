import { useState } from "react";
import { MediaItem } from "../../../../constants/data/mediaData";
import ReelActions from "./reelActions";

type Props = {
  item: MediaItem;
  isActive: boolean;
  isExpanded: boolean;
  githubLink?: string;
  setIsExpanded: (value: boolean) => void;
};

const ReelsInfo = ({ item, isExpanded, githubLink, setIsExpanded }: Props) => {
  const [lastLiker, setLastLiker] = useState<string | null>(null);
  const [likesCount, setLikesCount] = useState<number>(0);

  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="flex items-center gap-2 md:gap-5 lg:gap-2 mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="./images/EmJhay.jpg"
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="font-semibold text-white">mhayreejhaine</p>
        </div>
        <p className="text-white text-sm">
          {item.description}
          {!isExpanded && (
            <span
              onClick={() => setIsExpanded(true)}
              className="text-white cursor-pointer tracking-wide "
            >
              ...
            </span>
          )}

          {isExpanded && (
            <div className="-ml-[3px] py-1 mr-15 bg-white rounded-md">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-sm italic ml-2"
              >
                View on GitHub
              </a>

              {isExpanded && (
                <span
                  onClick={() => setIsExpanded(false)}
                  className="text-hoverNavDark cursor-pointer ml-2"
                >
                  less
                </span>
              )}
            </div>
          )}
        </p>
        {likesCount > 0 && (
          <p className="text-xs text-white mt-1">
            Liked by <span className="font-medium">{lastLiker}</span>
            {likesCount > 1 && ` and others`}
          </p>
        )}
      </div>
      <ReelActions
        item={item}
        likesCount={likesCount}
        setLastLiker={setLastLiker}
        setLikesCount={setLikesCount}
      />
    </div>
  );
};

export default ReelsInfo;

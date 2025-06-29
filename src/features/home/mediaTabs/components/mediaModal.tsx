import { useEffect, useRef, useState } from "react";
// import { MediaItem } from "../../../constants/data/mediaData";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MediaItem } from "../hooks/useMedia";
import PostCard from "./postCard";
import ReelCard from "./reelCard";

type MediaViewerProps = {
  items: MediaItem[];
  activeIndex: number;
  type: "posts" | "tagged" | "reels";
  onClose: () => void;
};

const MediaViewer = ({
  items,
  activeIndex,
  type,
  onClose,
}: MediaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = activeIndex * window.innerHeight;
    }
  }, [activeIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const newIndex = Math.round(e.currentTarget.scrollTop / window.innerHeight);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="fixed inset-0 z-30 bg-[var(--color-Bg)] flex items-center justify-center overflow-hidden">
      <div className="w-full md:w-[80%] lg:w-[50%] mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 py-3 px-5 flex items-center justify-between bg-[var(--color-Bg)]">
          <div className="flex gap-4 items-center">
            <button onClick={onClose} className="cursor-pointer">
              <FaArrowLeftLong size={25} />
            </button>
            <p className="text-2xl font-semibold capitalize -mt-2">{type}</p>
          </div>
          {type === "reels" && <MdOutlineCameraAlt size={25} />}
        </div>

        {/* Scrollable Section */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-y-auto no-scrollbar snap-y snap-mandatory h-full"
        >
          {items.map((item, index) => (
            <div key={item.id} className="snap-start w-full">
              {type === "reels" ? (
                <ReelCard item={item} isActive={index === currentIndex} />
              ) : (
                <PostCard item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaViewer;

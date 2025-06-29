import { useEffect, useRef, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import ReelsInfo from "./reelsInfo";
import { MediaItem } from "../hooks/useMedia";
import { useMediaSettings } from "../../../../store/mediaSettings";

type Props = {
  item: MediaItem;
  isActive: boolean;
};

const ReelCard = ({ item, isActive }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, toggleMute } = useMediaSettings();
  const [showOverlay, setShowOverlay] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  const handleVideoClick = () => {
    toggleMute();
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 1000);
  };

  return (
    <div
      className="w-full overflow-hidden mb-10  h-[calc(100vh-64px)]
 
    "
    >
      <div className="relative flex items-center justify-center h-full mb-0 md:mb-30">
        <video
          ref={videoRef}
          src={item.media[0]}
          autoPlay
          loop
          onClick={handleVideoClick}
          muted={isMuted}
          className="w-full h-full object-contain"
        />

        {/* Mute overlay */}
        {showOverlay && (
          <div className="absolute inset-0  bg-opacity-10 flex items-center justify-center z-10">
            {isMuted ? (
              <HiSpeakerXMark size={50} color="white" />
            ) : (
              <HiSpeakerWave size={50} color="white" />
            )}
          </div>
        )}

        {/* Reels Info Overlay */}
        <div
          className="absolute bottom-0 xs:bottom-12 2xs:bottom-10 4xs:bottom-2 md:bottom-0
          lg:bottom-0 smd:bottom-0 smd:w-[70%] xl:w-[51%] 3xs:bottom-2 p-5 md:p-7 
          w-full sm:w-[70%] md:w-[90%] lg:w-[67%] xmd:w-[80%] 2xmd:w-[30%] z-10"
        >
          <ReelsInfo
            item={item}
            isActive
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </div>
    </div>
  );
};

export default ReelCard;

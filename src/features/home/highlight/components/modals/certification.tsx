import { useRef } from "react";
import { certifications } from "../../../../../constants/data/highlightData";
import StoryFooter from "../storyFooter";
import { LiaTimesSolid } from "react-icons/lia";
import MultiProgressBar from "../progressBar";
import { useStoryNavigation } from "../../hooks/useNavigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type CertificationsProps = {
  onClose: () => void;
  onComplete: () => void;
  onPrevSection?: () => void;
};

const Certifications = ({
  onClose,
  onComplete,
  onPrevSection,
}: CertificationsProps) => {
  const { currentIndex, progressWidths, goToNext, goToPrev } =
    useStoryNavigation({
      length: certifications.length,
      onComplete,
      onFirstPrev: onPrevSection ?? (() => {}),
    });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    if (x < width / 2) {
      goToPrev();
    } else {
      goToNext();
    }
  };

  return (
    <div className="fixed inset-0 z-20 backdrop-blur-sm flex flex-col items-center justify-center overflow-y-auto">
      <div className="w-full md:w-[80%] lg:w-[50%] py-6 h-full">
        <div
          className="relative h-[85%] flex flex-col justify-between rounded-xl px-4 pt-4"
          style={{ backgroundColor: "#E0E0E0" }}
        >
          {/* progress-bar header */}
          <MultiProgressBar
            count={certifications.length}
            progressWidths={progressWidths}
          />

          {/* exit */}
          <button
            className="absolute top-7 right-6 z-20 cursor-pointer text-black"
            onClick={onClose}
          >
            <LiaTimesSolid size={22} />
          </button>

          {/* content */}
          <div
            ref={containerRef}
            onClick={handleTouch}
            className="flex-1 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <img
                src={certifications[currentIndex].image}
                alt={certifications[currentIndex].title}
                className="w-85 h-60 "
              />
              <a
                href={certifications[currentIndex].urlLink}
                className="font-bold underline text-md text-label hover:text-blue text-left w-full"
                target="_blank"
              >
                @{certifications[currentIndex].title}
              </a>
            </div>
          </div>
          {/* arrow controls on large screens */}
          <div className="hidden sm:flex absolute justify-between inset-0 px-4 items-center z-10">
            <HiChevronLeft
              onClick={goToPrev}
              className="text-black text-3xl cursor-pointer"
            />
            <HiChevronRight
              onClick={goToNext}
              className="text-black text-3xl cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full">
          <StoryFooter />
        </div>
      </div>
    </div>
  );
};

export default Certifications;

import { useRef } from "react";
import { devJourney } from "../../../../../constants/data/highlightData";
import StoryFooter from "../storyFooter";
import MultiProgressBar from "../progressBar";
import { useStoryNavigation } from "../../hooks/useNavigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

type Props = {
  onClose: () => void;
  onPrevSection?: () => void;
};

const Journey = ({ onClose, onPrevSection }: Props) => {
  const { currentIndex, progressWidths, goToNext, goToPrev } =
    useStoryNavigation({
      length: devJourney.length,
      onComplete: onClose,
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
            count={devJourney.length}
            progressWidths={progressWidths}
          />

          {/* exit btn */}
          <button
            className="absolute top-7 right-6 z-20 cursor-pointer text-black"
            onClick={onClose}
          >
            <LiaTimesSolid size={22} />
          </button>

          {/* current story */}
          <div
            ref={containerRef}
            onClick={handleTouch}
            className="flex-1 flex items-center justify-center"
          >
            <div
              key={devJourney[currentIndex].title}
              className="p-3 w-80 rounded-xl border bg-white border-gray-200"
            >
              <div className="flex flex-col gap-3">
                <p className="font-bold text-2xl text-black">
                  {devJourney[currentIndex].year}
                </p>
                <p className="font-semibold text-lg text-black">
                  *{devJourney[currentIndex].title}*
                </p>
                <p className="text-center text-black">
                  "{devJourney[currentIndex].description}"
                </p>
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
          </div>
        </div>
        <div className="w-full">
          <StoryFooter />
        </div>
      </div>
    </div>
  );
};

export default Journey;

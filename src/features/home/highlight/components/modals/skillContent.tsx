import { useRef } from "react";
import { skills } from "../../../../../constants/data/highlightData";
import StoryFooter from "../storyFooter";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useStoryNavigation } from "../../hooks/useNavigation";
import MultiProgressBar from "../progressBar";
import { LiaTimesSolid } from "react-icons/lia";

type SkillsProps = {
  onClose: () => void;
  onComplete: () => void;
  onPrevSection?: () => void;
};

const Skills = ({ onClose, onComplete, onPrevSection }: SkillsProps) => {
  const { currentIndex, progressWidths, goToNext, goToPrev } =
    useStoryNavigation({
      length: skills.length,
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
            count={skills.length}
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
            className="flex-1 flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-72 h-60 bg-white shadow-md p-3 flex items-center justify-center">
              <img
                src={skills[currentIndex].image}
                alt={skills[currentIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-label text-md font-semibold w-72 text-left">
              @{skills[currentIndex].title}
            </h2>
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

export default Skills;

import { useRef } from "react";
import { testimonials } from "../../../../../constants/data/highlightData";
import StoryFooter from "../storyFooter";
import MultiProgressBar from "../progressBar";
import { LiaTimesSolid } from "react-icons/lia";
import { useStoryNavigation } from "../../hooks/useNavigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type TestimonialsProps = {
  onClose: () => void;
  onComplete: () => void;
  onPrevSection?: () => void;
};

const Testimonials = ({
  onClose,
  onComplete,
  onPrevSection,
}: TestimonialsProps) => {
  const { currentIndex, progressWidths, goToNext, goToPrev } =
    useStoryNavigation({
      length: testimonials.length,
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
            count={testimonials.length}
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
            className="flex-1 flex flex-col items-center justify-center"
          >
            <div>
              <div className="w-72 py-5 flex flex-col gap-3 bg-white shadow-md p-3 ">
                <div className="flex items-center gap-2">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-15 h-15 rounded-full"
                  />
                  <p className="font-bold text-black text-xl">
                    {testimonials[currentIndex].name}
                  </p>
                </div>

                <p className="font-semibold text-blue italic">
                  {testimonials[currentIndex].role}
                </p>
                <div>
                  <p className="text-label text-center">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
              </div>
            </div>
            <a
              href={testimonials[currentIndex].link}
              target="_blank"
              className="text-label text-md font-semibold w-72 z-30 text-left cursor-pointer underline hover:text-blue"
            >
              @{testimonials[currentIndex].urlname}
            </a>
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

        {/* FOOTER */}
        <div className="w-full">
          <StoryFooter />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

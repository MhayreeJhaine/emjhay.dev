import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

type Props = {
  media: string[];
  carouselIndex: number;
  setCarouselIndex: (index: number) => void;
};

const PostCarousel = ({ media, carouselIndex, setCarouselIndex }: Props) => {
  const handleNext = () => {
    if (carouselIndex < media.length - 1) setCarouselIndex(carouselIndex + 1);
  };

  const handlePrev = () => {
    if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="relative w-full h-[35vh] xl:h-[60vh]" {...swipeHandlers}>
        <img
          src={media[carouselIndex]}
          className="w-full h-full object-contain"
          alt="post"
        />

        {media.length > 1 && (
          <div className="absolute top-1/2 left-0 right-0 px-4 flex justify-between items-center z-10 -translate-y-1/2 pointer-events-none">
            <button
              onClick={handlePrev}
              className="bg-carouselBtns rounded-full p-1 pointer-events-auto cursor-pointer"
            >
              <IoChevronBackOutline color="white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-carouselBtns rounded-full p-1 pointer-events-auto cursor-pointer"
            >
              <IoChevronForward color="white" />
            </button>
          </div>
        )}
      </div>

      {media.length > 1 && (
        <div className="flex gap-1 items-center mt-2">
          {media.map((_, i) => (
            <div
              key={i}
              className={`rounded-full ${
                i === carouselIndex
                  ? "bg-violet-700 w-[7px] h-[7px]"
                  : "bg-gray-400 w-[5px] h-[5px]"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PostCarousel;

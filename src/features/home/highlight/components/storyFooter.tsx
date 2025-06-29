import { BiCarousel, BiMoviePlay } from "react-icons/bi";
import { LuEllipsisVertical } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { TbSend } from "react-icons/tb";

const StoryFooter = () => {
  return (
    <div className="flex justify-between py-5 px-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <SlPeople size={25} />
        <p className="text-xs">Activity</p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <BiCarousel size={25} />
          <p className="text-xs">Browse</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <BiMoviePlay size={25} />
          <p className="text-xs">Create</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <TbSend size={25} />
          <p className="text-xs">Send</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <LuEllipsisVertical size={25} />
          <p className="text-xs">More</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default StoryFooter;

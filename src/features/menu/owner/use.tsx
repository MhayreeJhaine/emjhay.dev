import ThemeToggle from "../../../features/home/nav/themeToggle/themeToggle";
import { IoColorFill } from "react-icons/io5";
import { PiReadCvLogoBold } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";
import { FaStreetView } from "react-icons/fa6";
import Switch from "./switch";

const UseContent = () => {
  // const [showMore, setShowMore] = useState(false);
  const handleResumeDownload = () => {
    alert("Coming up soonest! 😊");
  };

  return (
    <div className="px-5">
      <h3 className="text-hoverNavDark mt-3 mb-5 text-[16px] font-bold">
        How you use this site
      </h3>
      <article className="flex flex-col gap-1">
        <div
          className="flex items-center justify-between py-1 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <IoColorFill size={25} />
            <p className="text-hoverNavDark">Theme toggle</p>
          </div>
          <div className="-mr-3">
            <ThemeToggle />
          </div>
        </div>

        <div
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <FaStreetView size={25} />
            <p className="text-hoverNavDark">View as visitor</p>
          </div>
          <Switch />
        </div>

        <div
          onClick={handleResumeDownload}
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <PiReadCvLogoBold size={25} />
            <p className="text-hoverNavDark">View Resume</p>
          </div>
          <GoChevronRight size={20} className="text-hoverNavDark " />
        </div>
      </article>
    </div>
  );
};

export default UseContent;

// import { FaAt } from "react-icons/fa";
import ThemeToggle from "./themeToggle/themeToggle";
import { LuChevronDown, LuEllipsisVertical, LuMenu } from "react-icons/lu";
import { PiAt } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useVisitorStore } from "../../../store/visitorStore";
import { useState } from "react";
import ViewerMenu from "../../menu/viewerMenu";
// import ViewerMenu from "../../../constants/menu/viewerMenu";

const Nav = () => {
  const navigate = useNavigate();
  const visitorMode = useVisitorStore((state) => state.visitorMode);
  const [ellipsisMenu, setEllipsisMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center sticky top-0 p-2 z-10 mx-4">
      <div className="flex justify-center items-center gap-2">
        <h3 className="text-lg font-bold">mhayreejhaine</h3>

        <LuChevronDown size={18} />
        <div className="w-2 h-2 rounded-full bg-red"></div>
      </div>
      <div className="flex justify-center items-center gap-3 sm:gap-7 md:gap-10 lg:gap-10">
        {!visitorMode && (
          <div onClick={() => {}}>
            <PiAt size={24} />
          </div>
        )}

        <ThemeToggle />
        {!visitorMode ? (
          <div onClick={() => navigate("/menu")} className="cursor-pointer">
            <LuMenu size={24} />
          </div>
        ) : (
          <div onClick={() => setEllipsisMenu(true)} className="cursor-pointer">
            <LuEllipsisVertical size={24} />
          </div>
        )}

        {ellipsisMenu && (
          <div
            onClick={() => setEllipsisMenu(false)}
            className="fixed inset-0 bg-white/25 flex justify-center
             items-baseline-last z-50 overflow-hidden"
          >
            <ViewerMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

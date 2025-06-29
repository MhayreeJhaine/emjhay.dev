import { FaArrowLeftLong, FaMeta } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Footer from "../components/atoms/footer";
import AboutPortfolio from "../features/menu/owner/aboutPortfolio";
import HrLine from "../features/menu/owner/hrLine";
import UseContent from "../features/menu/owner/use";
import ViewContent from "../features/menu/owner/view";
import Interact from "../features/menu/owner/interact";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full md:w-[80%] lg:w-[50%] mx-auto overflow-hidden">
      <div
        className="flex flex-row gap-10 items-center sticky top-0 p-5 z-10"
        style={{ backgroundColor: "var(--color-Bg)" }}
      >
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <FaArrowLeftLong />
        </div>
        <h1 className="font-bold text-md">Settings and activitiy</h1>
      </div>

      <article className="px-5 ">
        {/* search div */}
        <div
          className="flex flex-row items-center pl-3 gap-1 mt-5  rounded-lg"
          style={{
            backgroundColor: "var(--color-hoverNav)",
          }}
        >
          <FiSearch size={17} className="text-hoverNavDark" />
          <input
            type="text"
            placeholder="Search"
            style={{ color: "var(--color-hoverNavDark)" }}
            className="w-full p-2 focus:outline-none placeholder:text-hoverNavDark"
          />
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm">Your account</p>
            <div className="flex items-center gap-2">
              <FaMeta size={20} />
              <p>Meta</p>
            </div>
          </div>

          <AboutPortfolio />
          <div>
            <p className="text-[11px] text-hoverNavDark">
              Manage your connected experiences and account settings across Meta
              technologies.{"  "}
              <span className="text-violet-500">Learm more</span>
            </p>
          </div>
        </div>
      </article>
      <HrLine />

      {/* <div className="w-full h-2 my-5 bg-hoverBioBtns"></div> */}
      <UseContent />

      <HrLine />

      <ViewContent />

      <HrLine />

      <Interact />

      <HrLine />

      <div className="px-5 -mb-2">
        <h3 className="text-hoverNavDark mt-3 mb-5 text-[12px] font-bold">
          Login
        </h3>
        <div className="mx-2">
          <p className="text-blue mb-3">Add account</p>
          <p className="text-red">Log out</p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Menu;

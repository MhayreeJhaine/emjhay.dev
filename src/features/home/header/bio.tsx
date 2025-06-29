import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ContactModal from "./contactModal";

const Bio = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleBtnPress() {
    setShowBtn(false);
    setSeeMore(true);
  }

  function handleModal() {
    setShowModal(!showModal);
  }

  const navigate = useNavigate();

  return (
    <article className="mt-1">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 items-center">
          <BsStars className="text-gold" />
          <p>Maryjane Ngozi </p>
        </div>
        <div className="flex flex-row gap-2 items-start sm:items-center md:items-center lg:items-center">
          <BsStars className="mt-1.5 sm:0 md:mt-0 lg:mt-0 text-gold" />
          <p className="">
            Mobile-first, pixel-perfect — I build what you imagine.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-start sm:items-center md:items-center lg:items-center">
          <BsStars className="mt-[4px] sm:0 md:mt-0 lg:mt-0 text-gold" />
          <p>
            #React #RN #JS #TS #Expo #TailwindCSS
            {showBtn && (
              <button
                onClick={handleBtnPress}
                className="text-gray-600 cursor-pointer"
              >
                ... more
              </button>
            )}
          </p>
        </div>
        {seeMore && (
          <div className="flex flex-row gap-2 items-center">
            <BsStars className="text-gold" />
            <p>Ctrl+S is my love language.</p>
          </div>
        )}
      </div>

      {/* Bio btns */}
      <div className="flex w-full gap-2 -mx-1 mt-3">
        <div
          onClick={() => navigate("/about")}
          className="flex-[2] border p-1 justify-center rounded-lg cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out"
        >
          <h3 className="text-center">About me</h3>
        </div>
        <div
          onClick={() => navigate("/shareProfile")}
          className="flex-[2] border p-1 justify-center rounded-lg cursor-pointer
         hover:bg-hoverBioBtns transition-all duration-500 ease-in-out"
        >
          <h3 className="text-center">Share Profile</h3>
        </div>
        <div
          onClick={handleModal}
          className="flex-[0.5] flex border p-1 items-center justify-center rounded-lg cursor-pointer 
        hover:bg-hoverBioBtns transition-all duration-500 ease-in-out"
        >
          <IoPersonAddSharp size={20} />
        </div>
        {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      </div>
    </article>
  );
};

export default Bio;

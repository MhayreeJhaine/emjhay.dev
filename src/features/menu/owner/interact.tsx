import { useState } from "react";
import { MdOutlineContactEmergency } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import ContactModal from "../../../features/home/header/contactModal";

const Interact = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="px-5">
      <h3 className="text-hoverNavDark mt-3 mb-5 text-[16px] font-bold">
        How others reach out
      </h3>
      <div
        onClick={handleModal}
        className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
      >
        <div className="flex items-center gap-3">
          <MdOutlineContactEmergency size={25} />
          <p className="text-hoverNavDark">Contact me</p>
        </div>
        <FaWpforms
          //   onClick={handleModal}
          size={20}
          className="text-hoverNavDark"
        />
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Interact;

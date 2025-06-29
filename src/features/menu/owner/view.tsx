import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ViewContent = () => {
  const [copied, setCopied] = useState(false);

  const showCopiedMessage = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("mhayreejhaine@gmail.com");
    showCopiedMessage();
  };

  return (
    <div className="px-5">
      <h3 className="text-hoverNavDark mt-3 mb-5 text-[16px] font-bold">
        Who can see your info
      </h3>
      <article className="flex flex-col gap-1">
        <a
          href="https://github.com/MhayreeJhaine"
          target="_blank"
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <FaGithub size={25} />
            <p className="text-hoverNavDark">Github</p>
          </div>
          <GoChevronRight size={20} className="text-hoverNavDark" />
        </a>

        <a
          href="https://www.linkedin.com/in/maryjane-ashinedu-ngozi/"
          target="_blank"
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <IoLogoLinkedin size={25} />
            <p className="text-hoverNavDark">LinkedIn</p>
          </div>
          <GoChevronRight size={20} className="text-hoverNavDark" />
        </a>

        <a
          href="https://x.com/Mhayree_Jhaine"
          target="_blank"
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <FaSquareXTwitter size={25} />
            <p className="text-hoverNavDark">X</p>
          </div>
          <GoChevronRight size={20} className="text-hoverNavDark" />
        </a>

        <a
          href="https://www.instagram.com/mhayreejhaine"
          target="_blank"
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <GrInstagram size={25} />
            <p className="text-hoverNavDark">Instagram</p>
          </div>
          <GoChevronRight size={20} className="text-hoverNavDark" />
        </a>

        <div
          className="flex items-center justify-between py-2 cursor-pointer
           hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
        >
          <div className="flex items-center gap-3">
            <MdEmail size={25} />
            <p className="text-hoverNavDark">Email</p>
          </div>
          {/* <GoChevronRight size={20}  /> */}
          <p onClick={copyToClipboard} className="text-hoverNavDark font-bold">
            COPY ADDRESS
          </p>
        </div>

        {copied && (
          <div
            className="fixed bottom-25 left-1/2 transform ease-in-out -translate-x-1/2
         bg-hoverBioBtns text-white px-4 py-2 rounded-lg text-sm z-50 shadow-lg"
          >
            Copied to clipboard!
          </div>
        )}
      </article>
    </div>
  );
};

export default ViewContent;

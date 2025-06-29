import { useState } from "react";
import { useVisitorStore } from "../../store/visitorStore";

const ViewerMenu = () => {
  // const isVisitor = useVisitorStore((state) => state.isVisitor);
  const switchToOwner = useVisitorStore((state) => state.switchToOwner);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => {
    switchToOwner();
  };

  const showCopiedMessage = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mhayreejhaine@gmail.com");
    showCopiedMessage();
  };

  const copyUrl = () => {
    navigator.clipboard.writeText("https://emjhay.dev");
    showCopiedMessage();
  };

  const handleResumeDownload = () => {
    alert("Coming up soonest! 😊");
  };

  return (
    <div
      className="flex flex-col relative px-6 pb-6 w-full md:w-[80%] lg:w-[50%] mx-auto rounded-t-[40px]"
      style={{
        backgroundColor: "var(--color-Bg)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="self-center absolute top-3 mb-3 w-10 h-1 bg-hoverBioBtns rounded-lg z-10" />
      <div
        className="flex flex-col gap-4 mt-7 md:gap-6 lg:gap-8 
        max-h-[55vh] md:max-h-[100vh] lg:max-h-[45vh] overflow-y-auto"
      >
        <p className="text-red text-lg">Restrict</p>
        <p className="text-red text-lg">Block</p>
        <p className="text-red text-lg">Report</p>
        <p onClick={handleToggle} className="text-lg cursor-pointer">
          View as Owner
        </p>
        <p onClick={handleResumeDownload} className="text-lg cursor-pointer">
          View Resume
        </p>
        <a href="https://github.com/MhayreeJhaine" target="_blank">
          <p className="text-lg cursor-pointer">GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/maryjane-ashinedu-ngozi/"
          target="_blank"
        >
          <p className="text-lg cursor-pointer">LinkedIn</p>
        </a>
        <a href="https://x.com/Mhayree_Jhaine" target="_blank">
          <p className="text-lg cursor-pointer">X</p>
        </a>
        <a href="https://www.instagram.com/mhayreejhaine" target="_blank">
          <p className="text-lg cursor-pointer">Instagram</p>
        </a>
        <p onClick={copyEmail} className="text-lg cursor-pointer">
          Email
        </p>

        <p onClick={copyUrl} className="text-lg cursor-pointer">
          Copy profile URL
        </p>

        {copied && (
          <div
            className="fixed top-25 left-1/2 transform ease-in-out -translate-x-1/2
         bg-hoverBioBtns text-white px-4 py-2 rounded-lg text-sm z-50 shadow-lg"
          >
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewerMenu;

import { LiaDownloadSolid, LiaTimesSolid } from "react-icons/lia";
import { TbCapture } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Footer from "../components/atoms/footer";
import { RiLinkM } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from "react";
import { useVisitorStore } from "../store/visitorStore";

const ShareProfile = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const visitorMode = useVisitorStore((state) => state.visitorMode);

  const showCopiedMessage = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Portfolio",
        text: "Check out my portfolio",
        url: "https://emjhay-dev.onrender.com",
      });
    } else {
      //   showCopiedMessage("Sharing not supported on this browser");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://emjhay-dev.onrender.com");
    showCopiedMessage();
  };

  const handleDownload = () => {
    const img = document.getElementById("qrCode") as HTMLImageElement;
    if (!img) return;

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen flex flex-col justify-between w-full md:w-[80%] lg:w-[50%] mx-auto overflow-hidden">
      <article className="flex flex-col flex-1 mx-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mt-7">
          <div onClick={() => navigate(-1)} className="cursor-pointer">
            <LiaTimesSolid size={23} />
          </div>
          <div
            className="flex px-3 py-1.2 border rounded-2xl cursor-pointer"
            style={{ borderColor: "var(--color-color)" }}
          >
            <h1 className="font-bold text-sm text-center">Emoji</h1>
          </div>
          <TbCapture size={23} className="cursor-pointer" />
        </div>

        {/* QR Code */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div
            className="shadow-[0px_1px_4px] shadow-hoverNavDark w-65 md:w-75 
          lg:w-60 py-5 rounded-2xl mt-6 flex justify-center items-center"
            style={{ backgroundColor: "var(--color-qrBg)" }}
          >
            <img
              id="qrCode"
              src="./images/qrCode.png"
              alt="Portfolio QR code"
              className="w-55 h-55 md:w-70 md:h-70 lg:w-55 lg:h-55 rounded-2xl"
            />
          </div>

          {/* btns */}
          <div
            className="shadow-[0px_1px_4px] shadow-hoverNavDark w-65 md:w-75 lg:w-60 p-3 
          rounded-2xl mt-6 flex justify-center items-center"
            style={{ backgroundColor: "var(--color-qrBg)" }}
          >
            <div
              className={`flex flex-1 justify-between items-center ${
                visitorMode ? "px-6 lg:px-4" : "px-2 lg:px-0.5"
              }`}
            >
              <div className="flex flex-col items-center gap-3 lg:gap-2 cursor-pointer">
                <div
                  onClick={handleShare}
                  className="border border-hoverNavDark rounded-full p-3 lg:p-2"
                >
                  <IoShareSocialOutline size={25} />
                </div>
                <p className="text-[12px]">Share Profile</p>
              </div>

              <div
                onClick={copyToClipboard}
                className="flex flex-col items-center gap-3 lg:gap-2 cursor-pointer"
              >
                <div className="border border-hoverNavDark rounded-full p-3 lg:p-2">
                  <RiLinkM size={25} />
                </div>
                <p className="text-[12px]">Copy link</p>
              </div>

              {!visitorMode && (
                <div
                  onClick={handleDownload}
                  className="flex flex-col items-center gap-3 lg:gap-2 cursor-pointer"
                >
                  <div className="border border-hoverNavDark rounded-full p-3 lg:p-2">
                    <LiaDownloadSolid size={25} />
                  </div>
                  <p className="text-[12px]">Download</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {copied && (
        <div
          className="fixed top-15 left-1/2 transform ease-in-out -translate-x-1/2
         bg-hoverBioBtns text-white px-4 py-2 rounded-lg text-sm z-50 shadow-lg"
        >
          Copied to clipboard!
        </div>
      )}

      {/* Footer pinned to bottom */}
      <Footer />
    </section>
  );
};

export default ShareProfile;

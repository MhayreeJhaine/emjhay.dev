import { useState } from "react";
import "./highlightRing.css";
import { IoAdd } from "react-icons/io5";

type HighlightRingProps = {
  title: string;
  icon: string;
  onClick: () => void;
  isNew?: boolean;
};

const HighlightRing = ({
  title,
  icon,
  onClick,
  isNew = false,
}: HighlightRingProps) => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);

    setTimeout(() => {
      onClick();
      setSpinning(false);
    }, 1000);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center cursor-pointer w-full  "
    >
      <div
        className={`relative highlight-ring w-20 h-20 lg:w-25 lg:h-25 rounded-full
           flex items-center justify-center
        ${isNew ? "new-ring" : ""}
                            `}
        // ${spinning ? "border-none" : "border-[3px]"}
        data-spinning={spinning}
        style={{
          borderColor: "var(--color-new)",

          backgroundColor: "var(--color-Bg)",
        }}
      >
        {isNew ? (
          <div className="h-full w-full p-[5px] rounded-full">
            <div
              className=" w-full h-full flex items-center justify-center rounded-full"
              style={{
                backgroundColor: "var(--color-newBg)",
              }}
            >
              <IoAdd className="text-3xl" />
            </div>
          </div>
        ) : (
          icon && (
            <img
              src={icon}
              alt={title}
              className="h-full w-full p-[6px] rounded-full object-cover"
            />
          )
        )}
      </div>
      <p className="text-xs mt-2">{title}</p>
    </div>
  );
};

export default HighlightRing;

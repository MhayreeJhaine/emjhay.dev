import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";

const AboutPortfolio = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    // console.log("shown");
    setShowDetails(!showDetails);
  };

  return (
    <section onClick={handleDetails} className="flex flex-col">
      <div
        className="flex justify-between items-center py-1 cursor-pointer
        hover:bg-hoverBioBtns transition-all duration-500 ease-in-out -mx-5 px-5"
      >
        <div className="flex gap-3 items-start sm:items-center md:items-center lg:items-center">
          <IoPersonCircleOutline
            size={28}
            className="mt-1.5 sm:0 md:mt-0 lg:mt-0"
          />
          <div>
            <p>About this Portfolio</p>
            <p className="text-[12.5px] text-hoverNavDark">
              Password, security, personal details, ad preferences
            </p>
          </div>
        </div>
        <GoChevronRight size={20} className="text-hoverNavDark" />
      </div>
      {showDetails && (
        <div className="mt-3 mx-2 p-2 px-4 border-2 border-hoverBioBtns rounded-lg">
          <p className="text-hoverNavDark">
            - Built with React, Typescript, TailwindCSS & Firebase.
          </p>
          <p className="text-hoverNavDark">- Last updated: June 2025.</p>
          <p className="text-hoverNavDark">- Designed by EmJhay.</p>
        </div>
      )}
    </section>
  );
};

export default AboutPortfolio;

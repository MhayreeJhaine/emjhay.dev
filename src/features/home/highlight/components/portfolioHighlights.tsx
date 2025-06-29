// import { useState } from "react";
// import HighlightRow from "./highlightRow";
// import SkillsContent from "./skillContent";
// import Certifications from "./certification";
// import Testimonials from "./testimonials";
// import DevJourney from "./devJourney";

// const PortfolioHighlights = () => {
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   return (
//     <div>
//       <HighlightRow onSelect={setActiveSection} />

//       {activeSection && (
//         <div className="mt-6 px-4">
//           {activeSection === "Skills" && <SkillsContent />}
//           {activeSection === "Certifications" && <Certifications />}
//           {activeSection === "Testimonials" && <Testimonials />}
//           {activeSection === "Dev Journey" && <DevJourney />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PortfolioHighlights;

import { useState } from "react";
import HighlightRow from "./highlightRow";
import Skills from "./modals/skillContent";
import Testimonials from "./modals/testimonials";
import Certifications from "./modals/certification";
import Journey from "./modals/devJourney";

const PortfolioHighlights = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const closeModal = () => setActiveSection(null);

  const handleSectionComplete = (nextSection: string | null) => {
    if (nextSection) {
      setActiveSection(nextSection);
    } else {
      closeModal();
    }
  };

  const handleSectionBack = (prevSection: string) => {
    setActiveSection(prevSection);
  };

  return (
    <div>
      <HighlightRow onSelect={setActiveSection} />

      {/* Modal style view */}
      {activeSection === "Skills" && (
        <Skills
          onComplete={() => handleSectionComplete("Certifications")}
          onClose={closeModal}
          onPrevSection={() => handleSectionBack("")}
        />
      )}
      {activeSection === "Certifications" && (
        <Certifications
          onComplete={() => handleSectionComplete("Testimonials")}
          onClose={closeModal}
          onPrevSection={() => handleSectionBack("Skills")}
        />
      )}
      {activeSection === "Testimonials" && (
        <Testimonials
          onComplete={() => handleSectionComplete("Dev Journey")}
          onClose={closeModal}
          onPrevSection={() => handleSectionBack("Certifications")}
        />
      )}
      {activeSection === "Dev Journey" && (
        <Journey
          onClose={closeModal}
          onPrevSection={() => handleSectionBack("Testimonials")}
        />
      )}
    </div>
  );
};

export default PortfolioHighlights;

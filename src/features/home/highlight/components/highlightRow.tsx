import { useVisitorStore } from "../../../../store/visitorStore";
import HighlightRing from "./highlightRing";

const highlights = [
  { title: "Skills", icon: "./images/skills.jpg" },
  { title: "Certifications", icon: "./images/certification.jpg" },
  { title: "Testimonials", icon: "./images/testimonial.jpg" },
  { title: "Dev Journey", icon: "./images/devJourney.jpeg" },
];

const HighlightRow = ({
  onSelect,
}: {
  onSelect: (section: string) => void;
}) => {
  const visitorMode = useVisitorStore((state) => state.visitorMode);

  return (
    <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-4">
      {!visitorMode && (
        <HighlightRing
          title="New"
          icon=""
          onClick={() => console.log("Open modal to add new highlight")}
          isNew
        />
      )}
      {highlights.map((h) => (
        <HighlightRing
          key={h.title}
          title={h.title}
          icon={h.icon}
          onClick={() => onSelect(h.title)}
        />
      ))}
    </div>
  );
};
export default HighlightRow;

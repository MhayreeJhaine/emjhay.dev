import { RiToggleFill, RiToggleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useVisitorStore } from "../../../store/visitorStore";

const Switch = () => {
  const { visitorMode } = useVisitorStore();
  // const isVisitor = useVisitorStore((state) => state.isVisitor);
  const switchToVisitor = useVisitorStore((state) => state.switchToVisitor);
  const navigate = useNavigate();

  const handleToggle = () => {
    switchToVisitor();
    navigate("/");
  };

  return (
    <div onClick={handleToggle}>
      {visitorMode ? (
        <RiToggleFill size={20} className="text-hoverNavDark " />
      ) : (
        <RiToggleLine size={20} className="text-hoverNavDark " />
      )}
    </div>
  );
};

export default Switch;

// components/Switch.tsx
// import { useVisitorStore } from "@/store/visitorStore";
// import { motion } from "framer-motion";
// import { RiToggleFill, RiToggleLine } from "react-icons/ri";
// import { useVisitorStore } from "../../store/visitorStore";

// const Switch = () => {
//   const { visitorMode, toggleVisitorMode } = useVisitorStore();

//   return (
//     <div
//       //   className={`w-12 h-6 flex items-center bg-zinc-700 rounded-full p-1 cursor-pointer`}
//       onClick={toggleVisitorMode}
//     >
//       {/* <motion.div
//         className="w-5 h-5 rounded-full bg-hoverNavDark"
//         layout
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         style={{
//           marginLeft: visitorMode ? "24px" : "0px",
//         }}
//       /> */}

//   {visitorMode ? (
//     <RiToggleFill size={20} className="text-hoverNavDark " />
//   ) : (
//     <RiToggleLine size={20} className="text-hoverNavDark " />
//   )}
//     </div>
//   );
// };

// export default Switch;

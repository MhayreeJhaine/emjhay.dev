import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mb-5 mt-15">
      <div className="flex items-center gap-1">
        <h2 className=" text-[14px] text-hoverNavDark">EmJhay </h2>
        <MdCopyright size={14} className="text-hoverNavDark" />
        <h2 className=" text-[14px] text-hoverNavDark">2025</h2>
      </div>
    </footer>
  );
};

export default Footer;

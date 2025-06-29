import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FormData from "../features/home/about/formData";
import Footer from "../components/atoms/footer";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[80%] lg:w-[50%] mx-auto mt-7 overflow-hidden">
      <section className="mx-5">
        <div className="flex flex-row gap-10 items-center">
          <button onClick={() => navigate(-1)} className="cursor-pointer">
            <FaArrowLeftLong />
          </button>
          <h1 className="font-bold text-md">About me</h1>
        </div>

        <div className="flex flex-col gap-4 mt-6 justify-center items-center">
          <div
            className="flex h-26 w-26 rounded-full content-center 
        items-center justify-center border-hoverNav border
        "
          >
            <img
              src="./images/EmJhay.jpg"
              alt="EmJhay"
              className="h-full w-full p-[0.5px] rounded-full object-cover"
            />
          </div>
        </div>
        <FormData />
        <Footer />
      </section>
    </div>
  );
};

export default About;

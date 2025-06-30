import { IoIosAdd } from "react-icons/io";

const Profile = () => {
  return (
    <article className="flex flex-row gap-6 relative">
      <div
        className="relative h-26 w-26 rounded-full content-center 
        items-center justify-center border-hoverNavDark border-3 
        lg:mx-6 sm:mx-4"
      >
        <div
          className="absolute -top-9 left-0  p-1.5 w-23 rounded-[20px]"
          style={{
            backgroundColor: "var(--color-ProfileGray)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p className="text-sm text-center text-hoverNavDark">
            What's on your mind?
          </p>
        </div>
        <img
          src="./images/EmJhay.jpg"
          alt="EmJhay"
          className="h-full w-full p-[2.5px] rounded-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white rounded-full p-0.5">
          <div className="bg-blue rounded-full p-0.3">
            <IoIosAdd size={16} className="text-white" />
          </div>
        </div>
      </div>

      {/* Name and stats */}
      <div className=" ">
        <div className="mt-2">
          <h3 className="text-[14px] sm:text-[20px] font-bold">
            🌹 MHAYREE_JHAINE 🌹
          </h3>
        </div>

        {/* stats */}
        <div className="flex flex-row gap-6 md:gap-10 lg:gap-14  mt-2">
          <div className="">
            <h3 className="font-bold">1</h3>
            <h3>posts</h3>
          </div>
          <div>
            <h3 className="font-bold">981</h3>
            <h3>followers</h3>
          </div>
          <div>
            <h3 className="font-bold">772</h3>
            <h3>following</h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Profile;

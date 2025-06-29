import Bio from "./bio";
import Profile from "./profile";

const Header = () => {
  return (
    <section className="mt-10 mx-4">
      {/* Profile picture, name and stats*/}
      <Profile />
      {/* Bio and bio btns*/}
      <Bio />
    </section>
  );
};

export default Header;

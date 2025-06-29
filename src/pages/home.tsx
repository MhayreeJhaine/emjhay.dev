import Nav from "../features/home/nav/nav";
import Header from "../features/home/header/header";
import Footer from "../components/atoms/footer";
import PortfolioHighlights from "../features/home/highlight/components/portfolioHighlights";
import Tabs from "../features/home/mediaTabs/components/tabs";

function Home() {
  return (
    <div className="w-full md:w-[80%] lg:w-[50%] mx-auto mt-2 overflow-hidden ">
      <Nav />
      <Header />

      <PortfolioHighlights />
      <Tabs />
      <div className="bottom-10">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

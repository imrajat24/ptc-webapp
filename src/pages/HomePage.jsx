import Header from "../components/Homepage/Header";
import Nav from "../components/Homepage/Navigation";
import Stats from "../components/Homepage/Stats";
import About_partners from "../components/About/About_partners";
import Issues from "../components/Homepage/Sec_Issues";
import USP from "../components/Homepage/Sec_usp";
import Process from "../components/Homepage/Sec_Process";
import CTA from "../components/Homepage/Sec_cta";
import Location from "../components/Homepage/Sec_location";
import Footer from "../components/Homepage/Footer";
import LogoSlider from "../components/Homepage/LogoSlider";

const HomePage = ({ isClicked, setIsClicked }) => {
  return (
    <>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Header />
      <Stats />
      {/* <About_partners /> */}
      <LogoSlider />
      <Issues />
      <USP />
      <Process />
      <CTA />
      <Location />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default HomePage;

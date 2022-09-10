import Nav from "../components/Homepage/Navigation";
import About_Hero from "../components/About/About_Hero";
import About_portfolio from "../components/About/About_portfolio";
import About_founder from "../components/About/About_founder";
import About_partners from "../components/About/About_partners";
import Location from "../components/Homepage/Sec_location";
import Stats from "../components/Homepage/Stats";
import Footer from "../components/Homepage/Footer";

const About = ({ isClicked, setIsClicked }) => {
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <About_Hero />
      <About_portfolio />
      <About_founder />
      {/* <Stats /> */}
      {/* <About_partners /> */}
      <Location />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default About;

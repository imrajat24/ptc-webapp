import { useState } from "react";
import Header from "../components/Homepage/Header";
import Nav from "../components/Homepage/Navigation";
import Stats from "../components/Homepage/Stats";
import Issues from "../components/Homepage/Sec_Issues";
import USP from "../components/Homepage/Sec_usp";
import Process from "../components/Homepage/Sec_Process";
import CTA from "../components/Homepage/Sec_cta";
import Location from "../components/Homepage/Sec_location";
import Footer from "../components/Homepage/Footer";
const HomePage = () => {
  // state to cross check which menu item in navigation is currently clicked
  const [isClicked, setIsClicked] = useState({
    home: true,
    about: false,
    harware: false,
    steel: false,
    contact: false,
    privacy: false,
  });
  return (
    <div>
      <div className="navigation">
        <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <Header />
      <Stats />
      <Issues />
      <USP />
      <Process />
      <CTA />
      <Location />
      <div className="footer">
        <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </div>
  );
};

export default HomePage;

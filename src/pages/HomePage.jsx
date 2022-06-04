import Header from "../components/Header";
import Nav from "../components/Navigation";
import Stats from "../components/Stats";
import Issues from "../components/Sec_Issues";
import Process from "../components/Sec_Process";
import CTA from "../components/Sec_cta";
const HomePage = () => {
  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <Header />
      <Stats />
      <Issues />
      <Process />
      <CTA />
    </div>
  );
};

export default HomePage;

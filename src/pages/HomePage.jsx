import Header from "../components/Header";
import Nav from "../components/Navigation";
import Stats from "../components/Stats";
import Issues from "../components/Sec_Issues";
const HomePage = () => {
  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <Header />
      <Stats />
      <Issues />
    </div>
  );
};

export default HomePage;

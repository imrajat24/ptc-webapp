import Header from "../components/Header";
import Nav from "../components/Navigation";
import Stats from "../components/Stats";
const HomePage = () => {
  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <Header />
      <Stats />
    </div>
  );
};

export default HomePage;

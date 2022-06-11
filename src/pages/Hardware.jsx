import Nav from "../components/Homepage/Navigation";
import Footer from "../components/Homepage/Footer";

const Hardware = ({ isClicked, setIsClicked }) => {
  return (
    <div>
      <div className="navigation">
        <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <div className="footer">
        <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </div>
  );
};

export default Hardware;

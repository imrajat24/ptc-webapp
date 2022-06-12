import Nav from "../components/Homepage/Navigation";
import Footer from "../components/Homepage/Footer";

const Hardware = ({ isClicked, setIsClicked }) => {
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Hardware;

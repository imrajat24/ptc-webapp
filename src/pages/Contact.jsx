import Nav from "../components/Homepage/Navigation";
import Contact_header from "../components/Contact/Contact_header";
import Footer from "../components/Homepage/Footer";

const Contact = ({ isClicked, setIsClicked }) => {
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Contact_header />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Contact;

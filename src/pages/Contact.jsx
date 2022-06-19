import Nav from "../components/Homepage/Navigation";
import Contact_header from "../components/Contact/Contact_header";
import Contact_faq from "../components/Contact/Contact_faq";
import Contact_cta from "../components/Contact/Contact_cta";
import Footer from "../components/Homepage/Footer";

const Contact = ({ isClicked, setIsClicked }) => {
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Contact_header />
      <Contact_faq />
      <Contact_cta />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Contact;

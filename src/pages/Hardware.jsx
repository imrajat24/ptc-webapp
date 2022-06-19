import Nav from "../components/Homepage/Navigation";
import Item_header from "../components/Items/Item_header";
import Footer from "../components/Homepage/Footer";

const Hardware = ({ isClicked, setIsClicked }) => {
  const info = {
    heading: "Hardware",
    description:
      "We provide you with the widest range of hardware products with multiple brand options such as FOSROC, CAPARO, UNIK, JCB, Hikoki,Techno, Mangala, TATA Agrico, etc to cover all your needs in one place.",
  };

  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Item_header heading={info.heading} description={info.description} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Hardware;

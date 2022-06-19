import Nav from "../components/Homepage/Navigation";
import Item_header from "../components/Items/Item_header";
import Footer from "../components/Homepage/Footer";

const Steel = ({ isClicked, setIsClicked }) => {
  const info = {
    heading: "Steel",
    description:
      "Fulfilling your steel requirements with a variety of range and various brands options such as UNIK, Mangala ISPAT, JINDAL STAR, APL APOLLO, etc to cover all your needs in a single click.",
  };
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Item_header heading={info.heading} description={info.description} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Steel;

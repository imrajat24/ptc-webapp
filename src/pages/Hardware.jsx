import Nav from "../components/Homepage/Navigation";
import Item_header from "../components/Items/Item_header";
import Item_categories from "../components/Items/Item_categories";
import Footer from "../components/Homepage/Footer";
import { hardwareItems } from "../items";
import { useState } from "react";

const Hardware = ({ isClicked, setIsClicked }) => {
  const info = {
    heading: "Hardware",
    description:
      "We provide you with the widest range of hardware products with multiple brand options such as FOSROC, CAPARO, UNIK, JCB, Hikoki,Techno, Mangala, TATA Agrico, etc to cover all your needs in one place.",
  };
  const [items, setItems] = useState(hardwareItems);

  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Item_header heading={info.heading} description={info.description} />
      <Item_categories products={items} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Hardware;

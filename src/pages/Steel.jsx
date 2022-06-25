import Nav from "../components/Homepage/Navigation";
import Item_header from "../components/Items/Item_header";
import Item_categories from "../components/Items/Item_categories";
import Footer from "../components/Homepage/Footer";
import data from "../items";
import { useState } from "react";

const Steel = ({ isClicked, setIsClicked }) => {
  const info = {
    heading: "Steel",
    description:
      "Fulfilling your steel requirements with a variety of range and various brands options such as UNIK, Mangala ISPAT, JINDAL STAR, APL APOLLO, etc to cover all your needs in a single click.",
  };
  const [items, setItems] = useState(data());

  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Item_header heading={info.heading} description={info.description} />
      <Item_categories products={items[1].items} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Steel;

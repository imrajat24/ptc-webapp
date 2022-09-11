import Nav from "../components/Homepage/Navigation";
import Item_header from "../components/Items/Item_header";
import Item_categories from "../components/Items/Item_categories";
import Footer from "../components/Homepage/Footer";
import { steelItems } from "../items";
import { useState } from "react";

const Steel = ({ isClicked, setIsClicked }) => {
  const info = {
    heading: "Punit Steel & Hardware Store",
    description:
      "It all started way back in 2016 when we had commenced our new firm after having an experience of 20 years in the industry and named it “Punit Steel and Hardware Store” with a motive of making every steel-related product available in one place.",
  };
  const [items, setItems] = useState(steelItems);

  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <Item_header heading={info.heading} description={info.description} />
      <Item_categories products={items} />
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Steel;

import search from "../../images/search.png";
import select from "../../images/select.png";
import phone from "../../images/contact_phone.png";

const Item_header = ({ heading, description }) => {
  return (
    <header className="item_header header">
      <div className="item_header-content">
        <div className="item_header-content--heading">
          <h2 className="item-heading heading-section">{heading}</h2>
          <h4>{description}</h4>
        </div>

        <div className="item_header-content--process">
          <div className="process-content">
            <div className="image">
              <img src={search} alt="search" />
            </div>
            <div className="content">
              <h3>browse categories</h3>
              <p>
                Go through the wide range of categories to find your required
                one.
              </p>
            </div>
          </div>
          <div className="process-content">
            <div className="image">
              <img src={select} alt="select" />
            </div>
            <div className="content">
              <h3>Select Category</h3>
              <p>
                Select one as per your requirements and click on the “buy”
                button to move further.
              </p>
            </div>
          </div>
          <div className="process-content">
            <div className="image">
              <img src={phone} alt="phone" />
            </div>
            <div className="content">
              <h3>Call or Leave Query</h3>
              <p>
                Make a direct call or write down your query and wait for a while
                for our executive to reach you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Item_header;

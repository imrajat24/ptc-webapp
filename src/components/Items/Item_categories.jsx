import { Link } from "react-router-dom";
import scrollToTop from "../../methods";
const Item_categories = ({ products }) => {
  return (
    <section className="item_categories">
      <div className="item_categories-header">
        <h2 className="heading-section">Categories</h2>
        <h4>
          We offer the following categories to find the best fit as per the
          requirements.
        </h4>
      </div>
      <div className="item_categories-content">
        {products.map((item) => {
          return (
            <div className="item-card" key={item.id}>
              <div className="item-card--img">
                <img src={item.img[0]} alt={item.name} />
              </div>
              <div className="item-card--title">
                <h3>{item.name}</h3>
                {item.category === "hardware" ? (
                  <Link to={`/item_content/${item.id}`} onClick={scrollToTop}>
                    <button className="btn btn-card btn-pri">View More</button>
                  </Link>
                ) : (
                  <Link to="/contact" onClick={scrollToTop}>
                    <button className="btn btn-card btn-pri">Buy Now</button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Item_categories;

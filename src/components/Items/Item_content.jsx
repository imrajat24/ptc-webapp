import Nav from "../Homepage/Navigation";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { hardwareItems, steelItems } from "../../items";
import { Link } from "react-router-dom";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const Item_content = ({ isClicked, setIsClicked }) => {
  const { id } = useParams();
  const hitems = hardwareItems();
  const sitems = steelItems();
  let item = [];
  let products = [];
  item = hitems.filter((x) => {
    if (x.id == id) return x;
  });
  if (item.length == 0)
    item = sitems.filter((x) => {
      if (x.id == id) return x;
    });

  if (item[0].category == "hardware") products = [...hitems];
  else products = [...sitems];
  const gliderRef = useRef();

  // function to add the automatic sliding animation to the glider
  useEffect(() => {
    function sliderAuto(slider, miliseconds) {
      const slidesCount = 3;
      let slideTimeout = null;
      let nextIndex = 1;
      function slide() {
        slideTimeout = setTimeout(function () {
          if (nextIndex >= slidesCount) {
            nextIndex = 0;
          }
          slider?.scrollItem(nextIndex++);
        }, miliseconds);
      }
      if (slider) {
        slider.ele.addEventListener("glider-animated", function () {
          window.clearInterval(slideTimeout);
          slide();
        });
      }

      slide();
    }
    sliderAuto(gliderRef.current, 1000);
  }, [gliderRef]);

  return (
    <>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <header className="item_content_header item_header header">
        <div className="item_content item_header-content">
          <div className="item_header-content--heading">
            <h2 className="item-heading heading-section">{item[0].name}</h2>
          </div>
          <div className="item_content-btn">
            <Link to="/contact">
              <button className="btn btn-pri-head btn-pri">Buy Now</button>
            </Link>
            {item[0].pdf ? (
              <a href={item[0].pdf} target="_blank">
                <button className="btn btn-sec btn-footer">
                  Download Price List
                </button>
              </a>
            ) : null}
          </div>
        </div>
      </header>
      <div className="item_content--content">
        <div className="about-hero_story">
          <div className="about-hero_story--img">
            <Glider
              ref={gliderRef}
              draggable
              hasDots
              slidesToShow={1}
              slidesToScroll={1}
              id="glider-main"
            >
              <img
                src={item[0].img[0]}
                alt="team-image"
                className="slider-img"
              />
              <img
                src={item[0].img[1]}
                alt="team-image"
                className="slider-img"
              />
              <img
                src={item[0].img[2]}
                alt="team-image"
                className="slider-img"
              />
            </Glider>

            <h2 className="list-heading">{`Other ${item[0].category} Products`}</h2>
            <ul key={item[0].id}>
              {products.map((product) => {
                return (
                  <Link to={`/item_content/${product.id}`}>
                    <li
                      className={product.id == item[0].id ? "selected" : null}
                    >
                      {product.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="about-hero_story--content">
            <h2 className="heading-section">{item[0].seller}</h2>
            <p>{item[0].desp}</p>
            <p>
              <a href={item[0].link} target="_blank">
                <button className="btn btn-footer">More Info</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item_content;

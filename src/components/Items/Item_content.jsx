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
  item = hitems.filter((x) => {
    if (x.id == id) return x;
  });
  const gliderRef = useRef();
  // console.log(hitems);
  // console.log(item);

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
            <button className="btn btn-pri-head btn-pri">Buy Now</button>
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
              <img src={item[0].img} alt="team-image" />
              <img src={item[0].img} alt="team-image" />
              <img src={item[0].img} alt="team-image" />
            </Glider>

            <h2>Other Hardware Products</h2>
            <ul key={item[0].id}>
              {hitems.map((product) => {
                return (
                  <Link to={`/item_content/${product.id}`}>
                    <li>{product.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="about-hero_story--content">
            <h2 className="heading-section">{item[0].seller}</h2>
            <p>
              It all started way back in 1993 when we had commenced our firm and
              named it “Punit Trading Company” with a motive of making every
              hardware-related product available in one place. Then, the motive
              started expanding with the expansion of our store from a small one
              consisting of only a few accessories to a large store with our
              godowns as well.
            </p>
            <p>
              In the meantime, we partnered with some prestigious brands like
              Asian paints, Berger paints, TATA Agrico, UNIK, JCB, Hikoki, and
              many more to give variety to our customers. Now, a family-owned
              and operated business has become the region’s best distributor
              especially in hardware products that support industrial houses and
              manufacturers for all their requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item_content;

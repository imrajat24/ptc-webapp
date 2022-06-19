import Glider from "react-glider";

const Slider_faq = () => {
  return (
    <Glider
      draggable
      hasArrows
      hasDots
      scrollLock
      slidesToShow={4}
      slidesToScroll={1}
      responsive={[
        {
          // screens greater than >= 1201px
          breakpoint: 1201,
          settings: {
            slidesToShow: "4",
          },
        },
        {
          // screens greater than >= 769px
          breakpoint: 769,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "3",
          },
        },
        {
          // screens greater than >= 601px
          breakpoint: 601,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "2",
          },
        },

        {
          // screens greater than >= 376px
          breakpoint: 300,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "1",
          },
        },
      ]}
    >
      <div className="question slide">
        <h3>
          1 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada purus a est, ac. Enim purus amet
        </p>
      </div>
      <div className="question slide">
        <h3>
          2 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada purus a est, ac. Enim purus amet
        </p>
      </div>
      <div className="question slide">
        <h3>
          3 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada purus a est, ac. Enim purus amet
        </p>
      </div>
      <div className="question slide">
        <h3>
          4 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
          risus malesuada purus a est, ac. Enim purus amet
        </p>
      </div>
    </Glider>
  );
};

export default Slider_faq;

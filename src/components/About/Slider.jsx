import Glider from "react-glider";
import "glider-js/glider.min.css";
import logo_1 from "../../images/logo-1.png";
import logo_2 from "../../images/logo-2.png";
import logo_3 from "../../images/logo-3.png";
import logo_4 from "../../images/logo-4.png";
const Slider = () => {
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
      <div className="partner-card slide">
        <img src={logo_1} alt="logo-1" />
      </div>
      <div className="partner-card slide">
        <img src={logo_2} alt="logo-2" />
      </div>
      <div className="partner-card slide">
        <img src={logo_3} alt="logo-3" />
      </div>
      <div className="partner-card slide">
        <img src={logo_4} alt="logo-4" />
      </div>
    </Glider>
  );
};

export default Slider;

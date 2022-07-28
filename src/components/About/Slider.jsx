import Glider from "react-glider";
import "glider-js/glider.min.css";

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
            slidesToShow: "5",
          },
        },
        {
          // screens greater than >= 769px
          breakpoint: 769,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "4",
          },
        },
        {
          // screens greater than >= 601px
          breakpoint: 601,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "3",
          },
        },

        {
          // screens greater than >= 376px
          breakpoint: 300,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: "2",
          },
        },
      ]}
    >
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589072/PTC/PTC%20Website%20Work/Fosroc_nm0rog.png"
          alt="logo-1"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/logo_ocm92h.png"
          alt="logo-2"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589072/PTC/PTC%20Website%20Work/1_opkyib.png"
          alt="logo-3"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589072/PTC/PTC%20Website%20Work/apppg_logo_1x_acjpzy.png"
          alt="logo-4"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/great_yuva_o5ces7.png"
          alt="logo-5"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/jcb-34409_kx8tsq.png"
          alt="logo-6"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589072/PTC/PTC%20Website%20Work/2_sbfhy3.png"
          alt="logo-7"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/Tata-Agrico-Logo-PNG_jpedca.png"
          alt="logo-8"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/techno_hdrocyl_xeuhf8.gif"
          alt="logo-9"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589072/PTC/PTC%20Website%20Work/Ferreterro-Logo_xfjzmv.png"
          alt="logo-10"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589073/PTC/PTC%20Website%20Work/nvr_cplait.png"
          alt="logo-11"
        />
      </div>
      <div className="partner-card slide">
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1658589074/PTC/PTC%20Website%20Work/Updated-Metro-Logo_hivt65.png"
          alt="logo-12"
        />
      </div>
    </Glider>
  );
};

export default Slider;

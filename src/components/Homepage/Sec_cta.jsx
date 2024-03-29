import imgHardware from "../../images/hardware-card.webp";
import imgSteel from "../../images/steel-card.webp";
import right_arrow from "../../images/right-arrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Sec_cta = () => {
  const imgVariants = {
    hidden: {
      y: -3,
    },
    final: {
      y: 3,
      transition: {
        type: "Tween",
        duration: 1,
        yoyo: Infinity,
      },
    },
  };
  return (
    <div className="sec_cta">
      <div className="sec_cta-content">
        <div className="upper-triangle"></div>
        <div className="lower-triangle"></div>
        <div className="text">
          <p>
            Quick, Assured & Quality Solutions at your doorstep with the
            simplest process among the entire hardware industry
          </p>
          <motion.button
            className="btn-card"
            whileHover={{ scale: 1.2, right: 0 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <img src={right_arrow} alt="right-arrow" />
          </motion.button>
        </div>
      </div>

      <div className="sec_cta-img header_content-images">
        <Link to="/hardware">
          <motion.img
            src={imgHardware}
            alt="hardware"
            variants={imgVariants}
            initial="hidden"
            animate="final"
          />
        </Link>
        <Link to="/steel">
          <motion.img
            src={imgSteel}
            alt="steel"
            variants={imgVariants}
            initial="hidden"
            animate="final"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sec_cta;

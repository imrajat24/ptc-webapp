import imgHardware from "../../images/hardware-card.png";
import imgSteel from "../../images/steel-card.png";
import whatsAppImg from "../../images/whatsapp.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
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
    <div className="header">
      <div className="header_content row ">
        <div className="header_content-heading">
          <h1>One-Stop Solution for all the Hardware & Steel requirements</h1>
          <h3>
            India's finest distributors of hardware & steel products that
            support industrial houses and manufacturers for all their
            requirements.
          </h3>
        </div>
        <div className="header_content-images card-contain">
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

          <div className="whatsApp-btn">
            <a
              href="https://api.whatsapp.com/send?phone=7229876091"
              target="_blank"
            >
              <img src={whatsAppImg} alt="whatsApp-btn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

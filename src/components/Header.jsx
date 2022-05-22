import imgHardware from "../images/hardware-card.png";
import imgSteel from "../images/steel-card.png";
import whatsAppImg from "../images/whatsapp.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header_content row">
        <div className="header_content-heading">
          <h1>One-Stop Solution for all the Hardware & Steel requirements</h1>
          <h3>
            India’s finest distributors of hardware & steel products that
            support industrial houses and manufacturers for all their
            requirements.
          </h3>
        </div>
        <div className="header_content-images">
          <a to="/">
            <img src={imgHardware} alt="hardware" />
          </a>
          <a to="/">
            <img src={imgSteel} alt="steel" />
          </a>
        </div>
      </div>
      <div className="whatsApp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=3197010240285"
          target="_blank"
        >
          <img src={whatsAppImg} alt="whatsApp-btn" />
        </a>
      </div>
    </div>
  );
};

export default Header;

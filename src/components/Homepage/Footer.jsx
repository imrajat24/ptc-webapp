import logo from "../../images/logo_footer.png";
import phone from "../../images/phone.png";
import location from "../../images/location.png";
const Footer = ({ isClicked, setIsClicked }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer_contain row">
      <div className="footer_contain-1">
        <nav className="bottom-nav">
          <ul>
            <li>
              <a
                to="/"
                className={isClicked.home ? "active" : ""}
                onClick={() => {
                  setIsClicked({
                    home: true,
                    about: false,
                    contact: false,
                    privacy: false,
                  });
                }}
              >
                home
              </a>
            </li>
            <li className="footer_dash">|</li>
            <li>
              <a
                to="/"
                className={isClicked.about ? "active" : ""}
                onClick={() => {
                  setIsClicked({
                    home: false,
                    about: !isClicked.about,
                    contact: false,
                    privacy: false,
                  });
                }}
              >
                about us
              </a>
            </li>
            <li className="footer_dash">|</li>
            <li>
              <a
                to="/"
                className={isClicked.contact ? "active" : ""}
                onClick={() => {
                  setIsClicked({
                    home: false,
                    about: false,
                    contact: !isClicked.contact,
                    privacy: false,
                  });
                }}
              >
                contact us
              </a>
            </li>
            <li className="footer_dash">|</li>
            <li>
              <a
                to="/"
                className={isClicked.privacy ? "active" : ""}
                onClick={() => {
                  setIsClicked({
                    home: false,
                    about: false,
                    contact: false,
                    privacy: !isClicked.privacy,
                  });
                }}
              >
                privacy policy
              </a>
            </li>
          </ul>
        </nav>
        <p>&#169; 2022 PTC Inc. All Rights Reserved.</p>
      </div>
      <div className="footer_contain-2">
        <div className="footer_contain-2_details">
          <div className="logo">
            <img src={logo} alt="logo" /> <h2>PTC Private Limited</h2>
          </div>
          <div className="location">
            <div className="location_location">
              <img src={location} alt="icon-location" />
              <span>
                Opp. 132 kb GSS, RSEB, Neelam Chowk, Bhiwadi, Alwar Rajasthan -
                301019
              </span>
            </div>
            <div className="location_phone">
              <p>
                <img src={phone} alt="icon-phone" />
                <span>92899138224</span>
              </p>
              <p>
                <img src={phone} alt="icon-phone" />
                <span>92899138224</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer_contain-2_button">
          <button className="btn btn-footer" onClick={scrollToTop}>
            back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

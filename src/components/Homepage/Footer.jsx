import logo from "../../images/logo_footer.png";
import { Link } from "react-router-dom";
import scrollToTop from "../../methods";
const Footer = ({ isClicked, setIsClicked }) => {
  return (
    <div className="footer_contain ">
      <div className="footer_contain_logo">
        <img src={logo} alt="logo" /> <h2>PTC Private Limited</h2>
      </div>
      <div className="footer_contain_bottom-nav">
        <ul className="footer-list">
          <li>
            <Link
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
            </Link>
          </li>
          <li className="footer_dash">|</li>
          <li>
            <Link
              to="/about"
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
            </Link>
          </li>
          <li className="footer_dash">|</li>
          <li>
            <Link
              to="/contact"
              className={isClicked.contact ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: false,
                  contact: true,
                  privacy: false,
                });
              }}
            >
              contact us
            </Link>
          </li>
          <li className="footer_dash">|</li>
          <li>
            <a
              href="https://www.freeprivacypolicy.com/live/b647c38f-fe78-4aec-8604-9cbe7abeecbb"
              target="_blank"
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
      </div>
      <div className="footer_contain_button">
        <p>&#169; 2022 PTC Inc. All Rights Reserved.</p>
        <button className="btn btn-footer" onClick={scrollToTop}>
          back to top
        </button>
      </div>
    </div>
  );
};

export default Footer;

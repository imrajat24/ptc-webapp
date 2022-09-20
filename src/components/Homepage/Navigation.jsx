import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Navigation = ({ isClicked, setIsClicked }) => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  });
  const handleClick = () => {
    const menu = document.getElementById("nav_menu");
    const btn = document.getElementById("nav_btn");
    menu.classList.toggle("active");
    btn.classList.toggle("active");
  };
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>Punit Trading Company</span>
        </Link>
      </div>
      <div id="nav_menu" className="nav_menu">
        <ul>
          <li>
            <Link
              to="/"
              className={isClicked.home ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: true,
                  about: false,
                  certificate: false,
                  hardware: false,
                  steel: false,
                });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isClicked.about ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: !isClicked.about,
                  certificate: false,
                  hardware: false,
                  steel: false,
                });
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className={isClicked.certificate ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: false,
                  certificate: !isClicked.certificate,
                  hardware: false,
                  steel: false,
                });
              }}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/hardware"
              className={isClicked.hardware ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: false,
                  certificate: false,
                  hardware: !isClicked.hardware,
                  steel: false,
                });
              }}
            >
              hardware
            </Link>
          </li>
          <li>
            <Link
              to="/steel"
              className={isClicked.steel ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: false,
                  certificate: false,
                  hardware: false,
                  steel: !isClicked.steel,
                });
              }}
            >
              steel
            </Link>
          </li>
        </ul>
      </div>
      <div id="nav_btn" className="nav_btn">
        <Link to="/contact" className="btn btn-pri">
          Contact Us
        </Link>
      </div>
      {/* hamburger menu */}
      <div className="hamburger_icn" onClick={handleClick}>
        <img
          src="https://res.cloudinary.com/dlghjr9qx/image/upload/v1657217801/PTC/layer1_1_dwmusg.png"
          alt="hamburgerMenu"
        />
      </div>
    </nav>
  );
};

export default Navigation;

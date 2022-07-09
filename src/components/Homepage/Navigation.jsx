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
    console.log("clicked");
  };
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav_menu">
        <ul>
          <li>
            <Link
              to="/"
              className={isClicked.home ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: true,
                  about: false,
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
              to="/hardware"
              className={isClicked.hardware ? "active" : ""}
              onClick={() => {
                setIsClicked({
                  home: false,
                  about: false,
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
      <div className="nav_btn">
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

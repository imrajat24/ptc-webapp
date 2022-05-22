import { useState } from "react";
import logo from "../images/logo.png";
const Navigation = () => {
  // state to cross check which menu item is currently clicked in the navigation
  const [isClicked, setIsClicked] = useState({
    home: true,
    about: false,
    harware: false,
    steel: false,
  });
  return (
    <nav className="nav row">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav_menu">
        <ul>
          <li>
            <a
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
            </a>
          </li>
          <li>
            <a
              to="/"
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
            </a>
          </li>
          <li>
            <a
              to="/"
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
            </a>
          </li>
          <li>
            <a
              to="/"
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
            </a>
          </li>
        </ul>
      </div>
      <div className="nav_btn">
        <a href="/" className="btn btn-pri">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

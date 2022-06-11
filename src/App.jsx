import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hardware from "./pages/Hardware";
import Steel from "./pages/Steel";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  // state to cross check which menu item in navigation is currently clicked
  const [isClicked, setIsClicked] = useState({
    home: true,
    about: false,
    harware: false,
    steel: false,
    contact: false,
    privacy: false,
  });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomePage isClicked={isClicked} setIsClicked={setIsClicked} />
          }
        />
        <Route
          path="/about"
          exact
          element={<About isClicked={isClicked} setIsClicked={setIsClicked} />}
        />
        <Route
          path="/hardware"
          exact
          element={
            <Hardware isClicked={isClicked} setIsClicked={setIsClicked} />
          }
        />
        <Route
          path="/steel"
          exact
          element={<Steel isClicked={isClicked} setIsClicked={setIsClicked} />}
        />
        <Route
          path="/contact"
          exact
          element={
            <Contact isClicked={isClicked} setIsClicked={setIsClicked} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

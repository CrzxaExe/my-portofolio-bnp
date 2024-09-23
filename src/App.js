import TopBar from "./components/TopBar";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [nav, navToggle] = useState(false);
  const [menu, setMenu] = useState("Zxra");
  const [menuLong, setMenuLong] = useState("Zxra");

  return (
    <div className="w-full text-white select-none">
      <TopBar nav={nav} navToggle={navToggle} menu={menu} menuLong={menuLong} />
      <div className="container px-5 lg:px-1 py-3 pt-[3.5rem]">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setMenu={setMenu} setMenuLong={setMenuLong} />}
          />
          <Route
            exact
            path="about"
            element={<About setMenu={setMenu} setMenuLong={setMenuLong} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

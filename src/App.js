import TopBar from "./components/TopBar";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [nav, navToggle] = useState(false);

  return (
    <div className="w-full text-white">
      <TopBar nav={nav} navToggle={navToggle} />
      <div className="container px-1 py-3 pt-[3.5rem]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

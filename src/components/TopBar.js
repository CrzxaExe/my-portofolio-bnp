import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import navData from "../nav.json";

const TopBar = ({ nav, navToggle }) => {
  useEffect(() => {
    if (nav) {
      document.querySelector("#navButton").classList.add("open");
      document.querySelector("#navi").classList.remove("hidden");
      document.querySelector("#navi").classList.add("flex");
    } else {
      document.querySelector("#navButton").classList.remove("open");
      document.querySelector("#navi").classList.add("hidden");
      document.querySelector("#navi").classList.remove("flex");
    }
  }, [nav]);

  return (
    <header className="bg-slate-700 flex px-2 py-3 fixed w-full">
      <b className="px-2 self-center w-1/2 lg:w-full text-base lg:text-lg">
        <span className="hidden lg:block">Bintang NP Website</span>
        <span className="lg:hidden">Bintang Web</span>
      </b>

      <div className="nav w-1/2 self-end lg:self-auto lg:w-auto flex justify-end text-right px-2 pr-5">
        <div
          className="navButton w-[28px] h-[22px] self-end flex flex-col justify-between lg:hidden mr-6"
          id="navButton"
          onClick={() => navToggle(!nav)}
        >
          <div className="w-full h-[2px] rounded bg-gray-100 origin-top-right transition duration-300 ease-in-out"></div>
          <div className="w-full h-[2px] rounded bg-gray-100 transition duration-300 ease-in-out"></div>
          <div className="w-full h-[2px] rounded bg-gray-100 origin-bottom-right transition duration-300 ease-in-out"></div>
        </div>
        <nav
          className="hidden lg:block absolute flex-col lg:flex-row top-[3.5rem] bg-slate-300 rounded text-slate-800 lg:text-white p-2 lg:top-[0] lg:relative lg:bg-transparent lg:text-right"
          id="navi"
        >
          {navData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((e, i) => (
              <Link
                to={e.to}
                key={i}
                className="px-3 py-1 lg:py-0 rounded transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white"
              >
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default TopBar;

import React from "react";
import { Link } from "react-router-dom";
import navData from "../nav.json";

const Footer = () => {
  return (
    <footer className="py-5 px-6 pt-7 bg-slate-900">
      <b className="block text-left pb-5">Footer</b>

      <ul className="list-dist flex flex-col text-sky-600">
        {navData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e, i) => {
            return (
              <Link
                to={e.link}
                key={i}
                className="hover:text-sky-300 transition duration-300 ease-in-out"
              >
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </Link>
            );
          })}
      </ul>

      <span className="text-gray-500 text-center flex w-full justify-center pt-4 pb-2">
        2024
      </span>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import navData from "../nav.json";
import socialData from "../social.json";

const Footer = () => {
  return (
    <footer className="py-5 px-6 pt-7 bg-slate-950">
      <b className="block text-left pb-5">Footer</b>

      <div className="flex flex-wrap">
        <div className="w-1/2 lg:w-1/4">
          <span className="text-white mb-1">Page</span>
          <ul className="list-dist flex flex-col text-sky-600">
            {navData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e, i) => {
                return (
                  <Link
                    to={e.to}
                    key={i}
                    className="hover:text-sky-300 transition duration-300 ease-in-out"
                  >
                    {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  </Link>
                );
              })}
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <span className="text-white mb-1">Sosmed</span>
          <ul className="list-dist flex flex-col text-sky-600">
            {socialData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e, i) => {
                return (
                  <a
                    href={e.link}
                    key={i}
                    target="blank"
                    className="hover:text-sky-300 transition duration-300 ease-in-out"
                  >
                    {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  </a>
                );
              })}
          </ul>
        </div>
      </div>

      <span className="text-gray-500 text-center flex w-full justify-center pt-4 pb-2 text-sm">
        Web ini dibuat tanggal 20 Agustus 2024
      </span>
    </footer>
  );
};

export default Footer;

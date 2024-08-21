import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import prjt from "../project.json";

const projectStatus = ["Offline", "Online", "Ongoing"];

const Home = ({ setMenu, setMenuLong }) => {
  // Set web title
  document.title = "Beranda Bintang";

  const [cal, setCal] = useState(new Date());

  // Set nav name
  setMenu("Beranda");
  setMenuLong("Beranda Bintang");

  return (
    <>
      <section className="py-3 pt-6">
        <div className="w-full lg:w-1/2">
          <h3 className="text-sm lg:text-base">Hai, namaku</h3>
          <h1 className="text-lg lg:text-xl -mt-2">Bintang Nugraha Putra</h1>

          <p className="text-xs lg:text-sm pt-5">
            Saya sedang berstudi di Universitas Jendral Soedirman di dalam
            program studi Teknik Komputer sejak 2024
          </p>

          <p className="text-xs lg:text-sm pt-5 mb-4">
            Web Developer & Mobile Dev Specialist
          </p>

          <Link
            to="about"
            className="bg-slate-800 font-mono px-3 py-2 mt-4 relative rounded-lg transition duration-500 ease-in-out hover:bg-slate-500 hover:text-slate-800 font-bold"
          >
            Tentang Saya
          </Link>
        </div>
      </section>

      <section className="bg-slate-700 px-4 py-2 mt-[2.4rem]">
        <h1 className="font-['Valorant'] text-lg lg:text-xl">Repo</h1>
        <span className="text-sm lg:text-base text-slate-400 -mt-2 block mb-2">
          Repository{" "}
          <a href="https://github.com/CrzxaExe" className="text-slate-300">
            github
          </a>{" "}
          yang sedang/telah saya buat
        </span>
        <div className="flex flex-wrap justify-between">
          {prjt.map((e) => {
            return (
              <div className="w-full lg:w-[49.8%] bg-slate-800/[0.4] rounded px-4 py-2 mb-1 relative">
                <a
                  href={e.link ? e.link : "#"}
                  className="text-sm lg:text-base font-bold"
                >
                  {e.name}
                </a>
                <span className="absolute top-2 right-4 text-mono text-xs lg:text-sm text-slate-400">
                  v{e.version}
                </span>
                <h4 className="text-xs lg:text-sm mt-2 text-lime-400">
                  {projectStatus[e.status]}
                </h4>
                <p className="text-xs lg:text-sm">{e.des}</p>
                <p className="text-xs lg:text-sm -mt-1">
                  {e.lang
                    .map((r) => r.charAt(0).toUpperCase() + r.slice(1))
                    .join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pt-5">
        <Calendar
          onChange={setCal}
          value={cal}
          locale="id"
          className="bg-slate-900 p-2 rounded text-slate-600 w-full md:w-1/2 lg:w-1/4 mx-auto"
        />
      </section>
    </>
  );
};

export default Home;

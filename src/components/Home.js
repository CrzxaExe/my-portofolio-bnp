import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  document.title = "Beranda Bintang";

  const [cal, setCal] = useState(new Date());

  return (
    <>
      <section className="py-3">
        <div className="w-full lg:w-1/2">
          <h3 className="text-sm lg:text-base">Hai, namaku</h3>
          <h1 className="text-lg lg:text-xl -mt-2">Bintang Nugraha Putra</h1>

          <p className="text-xs lg:text-sm pt-5">
            Saya sedang berstudi di Universitas Jendral Soedirman di dalam
            program studi Teknik Komputer sejak 2024
          </p>
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

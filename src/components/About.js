import React from "react";
import myPhoto from "../img/Me.jpg";
import pgs from "../../package.json";

const About = () => {
  document.title = "Tentang";

  return (
    <>
      <section className="py-3 pb-16">
        <h1 className="text-2xl text-slate-400">
          Tentang Bintang Nugraha Putra
        </h1>
        <span className="text-sm lg:text-base text-slate-500">
          Programmer Muda
        </span>

        <img
          src={myPhoto}
          alt="Bintang Nugraha Putra"
          className="pt-5 w-1/4 rounded"
        />

        <p className="pt-4 text-sm md:text-base lg:text-lg">
          Bernama lengkap Bintang Nugraha Putra, lahir di Kebumen tanggal 3
          Desember 2005. Tinggal di desa Demangsari, Kec Ayah, Kab Kebumen.
          Berasal dari SMP Negeri 1 Ayah lalu lanjut lagi ke SMA Negeri 1
          Rowokele dan sedang dalam masa kuliah di Universitas Jendral
          Soedirman.
          <br />
          <br />
          Sekarang berkuliah di Teknik Komputer untuk mendapat gelar sarjana.
          Keminatannya terhadap dunia programming sudah terlihat semenjak masih
          kelas 1 SMA. Berasal dari keluarga yang berkecukupan, namun ia yakin
          tentang kemampuannya dalam bidang IT dan Pemrograman.
          <br /> <br />
          Kemampuan membaca dan memahami kode lah yang membuat ia ingin
          berkuliah. Demi mendapat gelar dan pengetahuan lebih mendalam tentang
          dunia IT dan juga dunia Pemrograman
        </p>

        <h1 className="text-2xl pt-8 text-slate-400">Tentang Website ini</h1>
        <p className="pt-4 text-sm md:text-base lg:text-lg">
          Website ini dibuat dengan menggunakan library React beserta dengan
          library yang lain. Dibuat secara simpel dan cepat. Selain itu, website
          ini menggunakan beberapa module berikut: <br />
          <ul className="list-disc px-4 pt-3">
            {Object.keys(pgs.dependencies).map((e, i) => {
              return (
                <li key={i}>
                  {e} {pgs.dependencies[e]}
                </li>
              );
            })}
          </ul>
        </p>
      </section>
    </>
  );
};

export default About;

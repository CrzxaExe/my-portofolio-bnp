import React from "react";
import myPhoto from "../img/Me.jpg";
import pgs from "../../package.json";
import social from "../social.json";

const About = ({ setMenu, setMenuLong }) => {
  // Set web title
  document.title = "Tentang";

  // Set nav name
  setMenu("Tentang");
  setMenuLong("Tentang Bintang");

  return (
    <>
      <section className="py-3 pb-16">
        <h1 className="text-2xl text-slate-300">
          Tentang Bintang Nugraha Putra
        </h1>
        <span className="text-sm lg:text-base text-slate-400">
          Programmer Muda
        </span>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-14">
            <img
              src={myPhoto}
              alt="Bintang Nugraha Putra"
              className="pt-5 rounded"
            />
          </div>

          <p className="pt-1 lg:pt-[3rem] px-0 lg:px-3 text-sm md:text-base lg:text-lg text-justify w-full lg:w-1/2">
            Profile
            <br />
            Bernama lengkap Bintang Nugraha Putra, lahir di Kebumen pada tanggal
            3 Desember 2005. Sekarang ia tinggal di desa Demangsari, Kec Ayah,
            Kab Kebumen, Jawa Tengah.
            <br />
            <br />
            Pendidikan
            <br />
            Berasal dari SMP Negeri 1 Ayah lalu lanjut lagi ke SMA Negeri 1
            Rowokele dan sedang dalam masa kuliah di Universitas Jendral
            Soedirman. Berkuliah di Teknik Komputer untuk mendapat gelar
            sarjana.
            <br />
            <br />
            Keminatannya terhadap dunia programming sudah terlihat semenjak
            masih kelas 1 SMA. Kemampuan membaca dan memahami kode lah yang
            membuat ia ingin berkuliah. Demi mendapat gelar dan pengetahuan
            lebih mendalam tentang dunia IT dan juga dunia Pemrograman.
            Sebelumnya ia juga adalah seorang illustrator namun ia sudah tidak
            melanjutkannya karena lebih memilih menjadi programmer.
            <br /> <br />
            Sosial media:
            <ul className="text-sm text-slate-400">
              {social
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((e) => {
                  return (
                    <li>
                      <a href={e.link} className="hover:text-sky-300">
                        {e.name
                          .split(" ")
                          .map((f) => f.charAt(0).toUpperCase() + f.slice(1))
                          .join(" ")}
                      </a>
                    </li>
                  );
                })}
            </ul>
            <br />
            Spesialis Web Dev & Software Dev
            <br />
            JavaScript, TypeScript & Python
          </p>
        </div>

        <h1 className="text-2xl pt-8 text-slate-400">Tentang Website ini</h1>
        <span className="text-sm lg:text-base mt-3 block text-slate-300">
          Link source code web ini, silahkan klik{" "}
          <a
            href="https://github.com/CrzxaExe/my-portofolio-bnp"
            className="text-sky-300 hover:text-sky-800"
          >
            ini
          </a>
        </span>

        <p className="pt-4 text-sm md:text-base lg:text-lg text-justify">
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

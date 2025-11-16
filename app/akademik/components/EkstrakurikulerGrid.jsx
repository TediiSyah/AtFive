'use client';
import React, { useState } from "react";
import styles from "../Ekstrakurikuler.module.css";
import Image from "next/image";

const EkstrakurikulerGrid = () => {
  const dataEkstra = [
    {
      id: 1,
      title: "Ekstrakulikuler Futsal",
      image: "/image/futsal1.png",
      quote: "Kami belajar bahwa kekompakan lebih penting dari sekadar mencetak gol",
      desc: "Setiap pertandingan adalah ajang membangun semangat dan kerja sama"
    },
    {
      id: 2,
      title: "Ekstrakulikuler Pramuka",
      image: "/image/pramuka1.png",
      quote: "Di sinilah kami belajar disiplin, tanggung jawab, dan kepemimpinan",
      desc: "Dari langkah kecil, tumbuh keberanian untuk memimpin"
    },
    {
      id: 3,
      title: "Ekstrakulikuler Musik",
      image: "/galeri/gitaris.jpg",
      quote: "Kami menyalurkan emosi lewat nada dan irama yang menyatukan",
      desc: "Musik mengajarkan kami berbicara tanpa kata"
    },
    {
      id: 4,
      title: "Ekstrakurikuler Tari",
      image: "/image/tari.jpg",
      quote: "Gerakan kami adalah bahasa yang penuh makna",
      desc: "Lewat tarian, kami belajar mengekspresikan budaya dan diri"
    },
    {
      id: 5,
      title: "Ekstrakurikuler Vidiografi",
      image: "/image/drone.jpg",
      quote: "Kami melihat dunia dari sudut pandang yang berbeda",
      desc: "Setiap frame adalah cerita yang kami ciptakan"
    },
    {
      id: 6,
      title: "Ekstrakurikuler Basket",
      image: "/image/basketball.png",
      quote: "Basket mengajarkan arti kerja sama dan strategi",
      desc: "Kami bermain bukan hanya untuk menang, tapi untuk tumbuh bersama"
    },
    {
      title: "Ekstrakurikuler Lari",
      image: "/image/run.jpg",
      quote: "Lari melatih kami untuk kuat secara fisik dan mental",
      desc: "Setiap garis akhir adalah awal perjalanan baru."
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4); // tampil 4 card awal
  const loadMore = () => setVisibleCount((prev) => prev + 4); // tambah 4 card per klik

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Cerita Dibalik <span className={styles.highlight}>Ekstrakurikuler</span>
        </h2>
      </div>

      {dataEkstra.slice(0, visibleCount).map((item, index) => (
        <div
          key={item.id}
          className={`${styles.cardContainer} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageBox}>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.image}
              width={500}
              height={300}
            />
            <div className={styles.cardFooter}>
              <p>{item.title}</p>
              <button
                className={styles.button}
                onClick={() => {
                  const section = document.getElementById("ekstrakurikuler");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Selengkapnya →
              </button>
            </div>
          </div>

          <div className={styles.textBox}>
            <p className={styles.quote}>{item.quote}</p>
            <span className={styles.desc}>{item.desc}</span>
          </div>
        </div>
      ))}

      {visibleCount < dataEkstra.length && (
        <button className={styles.moreButton} onClick={loadMore}>
          Lihat lebih banyak ↓
        </button>
      )}
    </section>
  );
};

export default EkstrakurikulerGrid;

'use client';
import React, { useState } from "react";
import styles from "../Ekstrakurikuler.module.css";
import Image from "next/image";

const EkstrakurikulerGrid = () => {
  const dataEkstra = [
    {
      id: 1,
      title: "Futsal Extracurricular",
      image: "/image/futsal1.png",
      quote: "We Learned that teamwork is more important than just scoring goals",
      desc: "Sparing Every match is an opportunity to build team spirit and teamwork"
    },
    {
      id: 2,
      title: "Pramuka Extracurricular",
      image: "/image/pramuka1.png",
      quote: "This is where we learn discipline, responsibility, and leadership.",
      desc: "From small steps, the courage to lead grows."
    },
    {
      id: 3,
      title: "Music Extracurricular",
      image: "/galeri/gitaris.jpg",
      quote: "We channel our emotions through unifying notes and rhythms.",
      desc: "Music teaches us to speak without words."
    },
    {
      id: 4,
      title: " Dance Extracurricular",
      image: "/image/tari.jpg",
      quote: "Our movements are a language full of meaning.",
      desc: "Through dance, we learn to express our culture and ourselves."
    },
    {
      id: 5,
      title: "Ekstrakurikuler Vidiografi",
      image: "/image/drone.jpg",
      quote: "We see the world from a different perspective.",
      desc: "Every frame is a story we create."
    },
    {
      id: 6,
      title: "Ekstrakurikuler Basket",
      image: "/image/basketball.png",
      quote: "Basketball teaches the meaning of teamwork and strategy.",
      desc: "We play not just to win, but to grow together."
    },
    {
      title: "Ekstrakurikuler Lari",
      image: "/image/run.jpg",
      quote: "Running trains us to be physically and mentally strong",
      desc: "Every finish line is the beginning of a new journey"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4); // tampil 4 card awal
  const loadMore = () => setVisibleCount((prev) => prev + 4); // tambah 4 card per klik

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          The Story Behind <span className={styles.highlight}>Extracurricular</span>
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
                Read more →
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
         See more ↓
        </button>
      )}
    </section>
  );
};

export default EkstrakurikulerGrid;

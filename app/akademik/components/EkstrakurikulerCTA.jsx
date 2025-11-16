'use client';

import React from "react";
import Link from "next/link";
import styles from "../EkstrakurikulerCTA.module.css";
import Image from "next/image";

const EkstrakurikulerCTA = () => {
  const handleScrollToEkstra = () => {
    const section = document.getElementById("ekstrakurikuler");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      {/* Hiasan kiri bawah */}
      <Image
        src="/image/starKiri.png"
        alt=""
        width={60}
        height={60}
        className={`${styles.star} ${styles.starLeft}`}
      />
      {/* Hiasan kanan atas */}
      <Image
        src="/image/starKanan.png"
        alt=""
        width={60}
        height={60}
        className={`${styles.star} ${styles.starRight}`}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>
          Dari Teknologi, Olahraga, hingga Seni Semua ada di SMK Telkom Malang
 Temukan Passion-Mu dan Jadilah Bagian dari Perjalanan Kami!
        </h2>
        <p className={styles.subtitle}>
          Dari Teknologi, Olahraga, hingga Seni— Ekstrakurikuler Kami Siap
          Menemani Perjalananmu.
        </p>
        <button className={styles.button}><Link href="/ppdb">Gabung Sekarang</Link>
          
        </button>
      </div>
    </section>
  );
};

export default EkstrakurikulerCTA;

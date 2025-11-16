'use client';

import React from "react";
import Link from "next/link";
import styles from "../EkstrakurikulerCTA.module.css";
import Image from "next/image";

const EkstrakurikulerCTA = () => {
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
          From Technology, Sports, to Art—
           Our Extracurricular Activities are Ready to Accompany Your Journey.
        </h2>
        <p className={styles.subtitle}>
          From Technology, Sports, to Art— Our Extracurricular <br></br>Activities are Ready to Accompany Your Journey.
        </p>
      <button className={styles.button}><Link href="/ppdb-ing">Join Now</Link>
          
        </button>
      </div>
    </section>
  );
};

export default EkstrakurikulerCTA;

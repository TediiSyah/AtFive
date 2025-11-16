import React from "react";
import styles from "./RegistrationBanner.module.css";
import Image from "next/image";

const RegistrationBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/image/Union1.png" 
          alt="Promoter" 
          className={styles.image}
          width={350}
          height={360}
        />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.title}>
          Gelombang <br /> Pendaftaran Dibuka!
        </h1>
        <p className={styles.subtitle}>
          Daftar sekarang melalui Jalur Potensi Akademik <br />
          dan wujudkan cita-citamu bersama kami.
        </p>
        <a href="https://ppdb.telkomschools.sch.id/signup?lemdik=51"
            target="_blank"
            rel="noopener noreferrer"className={styles.button}>Daftar Sekarang</a>
      </div>
    </div>
  );
};

export default RegistrationBanner;

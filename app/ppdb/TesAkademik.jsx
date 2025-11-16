"use client";
import { useState } from "react";
import styles from "./TesAkademik.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TesAkademik = () => {
  const jalurData = [
    {
      nama: "Afirmasi Akademik",
      sub: "Investasi untuk masa depanmu dengan",
      biaya: "Rp. 200.000",
      jadwal: {
        pendaftaran: "03 Februari 2025 – 26 Juni 2025",
        seleksi: "03 Februari 2025 – 26 Juni 2025",
        pengumuman: "26 Juni 2025",
      },
      warna: "#9b1111",
    },
    {
      nama: "Potensi Akademik",
      sub: "Investasi untuk masa depanmu dengan",
      biaya: "Rp. 200.000",
      jadwal: {
        pendaftaran: "03 Februari 2025 – 26 Juni 2025",
        seleksi: "03 Februari 2025 – 26 Juni 2025",
        pengumuman: "26 Juni 2025",
      },
      warna: "#9b1111",
    },
    {
      nama: "Mandiri",
      sub: "Investasi untuk masa depanmu dengan",
      biaya: "Rp. 200.000",
      jadwal: {
        pendaftaran: "03 Februari 2025 – 26 Juni 2025",
        seleksi: "03 Februari 2025 – 26 Juni 2025",
        pengumuman: "26 Juni 2025",
      },
      warna: "#9b1111",
    },
  ];

  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [arrowAnimation, setArrowAnimation] = useState({ left: "", right: "" });

  const handlePrev = () => {
    setArrowAnimation({ left: "slide-left", right: "" });
    setAnimation("slide-right");
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? jalurData.length - 1 : prev - 1));
      setAnimation("");
      setArrowAnimation({ left: "", right: "" });
    }, 300);
  };

  const handleNext = () => {
    setArrowAnimation({ left: "", right: "slide-right" });
    setAnimation("slide-left");
    setTimeout(() => {
      setIndex((prev) => (prev === jalurData.length - 1 ? 0 : prev + 1));
      setAnimation("");
      setArrowAnimation({ left: "", right: "" });
    }, 300);
  };

  const handleDotClick = (i) => setIndex(i);
  const jalur = jalurData[index];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ChevronLeft
          className={`${styles.arrow} ${
            arrowAnimation.left ? styles[arrowAnimation.left] : ""
          }`}
          onClick={handlePrev}
        />
        <h1 className={styles.title}>
          Jalur <span>{jalur.nama}</span>
        </h1>
        <ChevronRight
          className={`${styles.arrow} ${
            arrowAnimation.right ? styles[arrowAnimation.right] : ""
          }`}
          onClick={handleNext}
        />
      </div>

      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Biaya Pendaftaran</h2>
        <h2 className={styles.subtitle}>Jadwal Pendaftaran</h2>
      </div>

      <div
        className={`${styles.cardContainer} ${
          animation ? styles[animation] : ""
        }`}
      >
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Biaya Pendaftaran</h3>
          <p className={styles.cardSub}>
            {jalur.nama} ({jalur.sub})
          </p>
          <p className={styles.label}>Biaya Sebesar</p>
          <div className={styles.price} style={{ backgroundColor: jalur.warna }}>
            {jalur.biaya}
          </div>
          <p className={styles.desc}>
            Transfer ke No. Virtual Account yang tertera saat pendaftaran
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Jadwal SPMB</h3>
          <p className={styles.cardSub}>
            {jalur.nama} ({jalur.sub})
          </p>
          <div className={styles.schedule}>
            <p>
              <strong>Pendaftaran</strong>
              <br />
              {jalur.jadwal.pendaftaran}
            </p>
            <p>
              <strong>Seleksi</strong>
              <br />
              {jalur.jadwal.seleksi}
            </p>
            <p>
              <strong>Pengumuman</strong>
              <br />
              {jalur.jadwal.pengumuman}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.dots}>
        {jalurData.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TesAkademik;

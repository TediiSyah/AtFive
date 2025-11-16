"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./IndonesiaMap.module.css";

const locations = [
  {
    id: 1,
    name: "GajiGesa",
    x: 30,
    y: 68,
    info: "GajiGesa adalah startup kesejahteraan finansial di Indonesia yang membantu Anda mencapai keamanan dan martabat finansial. Aplikasi ini memungkinkan karyawan anggota untuk meningkatkan kesehatan finansial jangka panjang mereka dengan perangkat manajemen keuangan, edukasi keuangan, dan Earned Wage Access (EWA).",
    image: "/industry/GajiGesa.png",
  },
  {
    id: 2,
    name: "Kitalulus",
    x: 40,
    y: 70,
    info: "KitaLulus adalah startup yang menjadi salah satu startup terbesar di Indonesia. Dengan lebih dari 3 juta anggota, platform ini menegaskan dirinya sebagai jaringan pencarian pekerjaan yang paling aman di Indonesia.",
    image: "/industry/KitaLulus.png",
  },
  {
    id: 3,
    name: "Bibit",
    x: 15,
    y: 40,
    info: "Bibit adalah startup yang memberikan platform untuk petani untuk menjual produk pertanian mereka. Platform ini memungkinkan petani untuk menjual produk mereka secara langsung kepada konsumen, mengurangi kebutuhan untuk mitra dan meningkatkan pendapatan mereka.",
    image: "/industry/bibit2.png",
  },
  {
    id: 4,
    name: "Mekari",
    x: 40,
    y: 45,
    info: "Mekari adalah startup yang fokus pada properti dan konstruksi yang mengubah proses konstruksi tradisional. Ia mengintegrasikan teknologi canggih seperti Building Information Modeling (BIM), yang memungkinkan representasi digital detail bangunan.",
    image: "/industry/mekari.png",
  },
  {
    id: 5,
    name: "Majoo",
    x: 62,
    y: 47,
    info: "Majoo adalah startup yang fokus pada properti dan konstruksi yang mengubah proses konstruksi tradisional. Ia mengintegrasikan teknologi canggih seperti Building Information Modeling (BIM), yang memungkinkan representasi digital detail bangunan.",
    image: "/industry/majoo.png",
  },
  {
    id: 6,
    name: "Goto",
    x: 80,
    y: 55,
    info: "Goto adalah startup yang memberikan platform untuk petani untuk menjual produk pertanian mereka. Platform ini memungkinkan petani untuk menjual produk mereka secara langsung kepada konsumen, mengurangi kebutuhan untuk mitra dan meningkatkan pendapatan mereka.",
    image: "/industry/goto.png",
  },
  {
    id: 7,
    name: "GlobalXtreme",
    x: 90,
    y: 55,
    info: "GlobalXtreme adalah startup yang memberikan platform untuk petani untuk menjual produk pertanian mereka. Platform ini memungkinkan petani untuk menjual produk mereka secara langsung kepada konsumen, mengurangi kebutuhan untuk mitra dan meningkatkan pendapatan mereka.",
    image: "/industry/globalxtreme.png",
  },
];

export default function IndonesiaMap() {
  const [selected, setSelected] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (loc, e) => {
    e.stopPropagation();
    setSelected(loc);
    setIsExpanded(false);

    if (isMobile) {
      setPopupPos({ x: "50%", y: "auto" });
    } else {
      const rect = e.currentTarget
        .closest(`.${styles.mapImageContainer}`)
        .getBoundingClientRect();
      setPopupPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setSelected(null);
    setIsExpanded(false);
  };

  const handleOutsideClick = (e) => {
    if (
      selected &&
      !e.target.closest(`.${styles.popup}`) &&
      !e.target.closest(`.${styles.locationDot}`)
    ) {
      setSelected(null);
      setIsExpanded(false);
    }
  };

  return (
    <div className={styles.mapContainer} onClick={handleOutsideClick}>
      <h1 className={styles.mapTitle}>
        Siswa <span>Moklet</span> Datang dari
      </h1>
      <h1 className={styles.mapTitle}>
        Seluruh Penjuru <span>Negeri</span>
      </h1>
      <p className={styles.mapSubtitle}>
        Inilah bukti bahwa Moklet menjadi pilihan terbaik bagi generasi muda
        dari Sabang hingga Merauke.
      </p>

      <div className={styles.mapWrapper}>
        <div className={styles.mapImageContainer}>
          <Image
            src="/image/indonesianMap.png"
            alt="Map"
            fill
            className={styles.mapImage}
            sizes="100vw"
            priority
          />

          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`${styles.locationDot} ${
                selected?.id === loc.id ? styles.activeDot : ""
              }`}
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              onClick={(e) => handleClick(loc, e)}
              role="button"
              tabIndex={0}
              aria-label={`Click to learn about ${loc.name}`}
            />
          ))}

          {selected && (
            <div
              className={`${styles.popup} ${isExpanded ? styles.expanded : ""}`}
              style={{
                left: isMobile
                  ? "50%"
                  : selected.name === "GlobalXtreme"
                  ? "10px"
                  : `${popupPos.x}px`,
                top: isMobile ? "auto" : `${popupPos.y + 15}px`,
                bottom: isMobile ? "20px" : "auto",
                transform: isMobile
                  ? "translateX(-50%)"
                  : selected.name === "GlobalXtreme"
                  ? "none"
                  : "translateX(-50%)",
                width: isExpanded ? "280px" : "220px", // melebar saat See More
              }}
            >
              <div className={styles.popupImageContainer}>
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className={styles.popupImage}
                />
              </div>
              <div className={styles.popupContent}>
                <h3>{selected.name}</h3>
                <p className={styles.popupInfo}>
                  {selected.info.length > 120 && !isExpanded
                    ? `${selected.info.slice(0, 120)}...`
                    : selected.info}
                </p>
                {selected.info.length > 120 && (
                  <button
                    className={styles.seeMoreButton}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}
                  </button>
                )}
                <button className={styles.closeButton} onClick={handleClose}>
                  Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

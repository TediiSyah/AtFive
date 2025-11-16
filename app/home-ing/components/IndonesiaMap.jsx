"use client";

import Image from "next/image";
import styles from "./IndonesiaMap.module.css";

const locations = [
  { id: 1,  x: 30, y: 68 },
  { id: 2,  x: 40, y: 70 },
  { id: 3,  x: 15, y: 40 },
  { id: 4,  x: 40, y: 45 },
  { id: 5,  x: 62, y: 47 },
  { id: 6,  x: 80, y: 55 },
  { id: 7,  x: 90, y: 55 },
];

export default function IndonesiaMap() {
  return (
    <div className={styles.mapContainer}>
      <h1 className={styles.mapTitle}>
        Student <span>Moklet</span> Come From All Corners Of
      </h1>
      <h1 className={styles.mapTitle}>
        <span>Indonesia</span> All Corners Of The <span>Country</span>
      </h1>
      <p className={styles.mapSubtitle}>
        Here Is Proof That Moklet Is The Best Choice For Young Generations From Sabang To Merauke.
      </p>

      <div className={styles.mapWrapper}>
        <div className={styles.mapImageContainer}>
          <Image
            src="/image/indonesianMap.png"
            alt="Map of Indonesia"
            fill
            className={styles.mapImage}
            sizes="200vw"
            priority
          />

          {/* Titik lokasi tanpa popup */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={styles.locationDot}
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

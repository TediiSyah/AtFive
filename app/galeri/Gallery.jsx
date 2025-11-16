'use client';
import React from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  const topImages = [
    "/image/dokum.jpg",
    "/image/tumpeng.jpg",
     "/galeri/image22.png",
  ];

  const bottomImages = [
    "/image/reward.jpg",
    "/image/show.jpg",
    "/image/dance.jpg",
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.topGrid}>
        {topImages.map((src, index) => (
          <div key={`top-${index}`} className={styles.card}>
            <Image 
              src={src} 
              alt={`Galeri Mokleters ${index + 1}`}
              width={400}
              height={300}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.middleLine}>
        <h2>Galeri Aktivitas & Prestasi SMK Telkom Malang
</h2>
        <p>Di balik setiap foto, tersimpan cerita tentang semangat, kebersamaan, dan dedikasi.</p>
      </div>

      <div className={styles.bottomGrid}>
        {bottomImages.map((src, index) => (
          <div key={`bottom-${index}`} className={styles.card}>
            <Image 
              src={src} 
              alt={`Galeri Mokleters ${index + 4}`}
              width={600}
              height={400}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

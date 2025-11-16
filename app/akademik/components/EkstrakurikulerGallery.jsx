'use client';

import styles from './EkstrakurikulerGallery.module.css';
import Image from 'next/image';

const images = [
  '/galeri/image10.png',
  '/galeri/image11.png',
  '/galeri/image12.png',
  '/galeri/image13.png',
  '/galeri/image14.png',
];

export default function ExtracurricularSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Intip Keseruan Kegiatan Ekstrakulikuler <br /> Mokleters di Sini yuk!
      </h2>

      {/* Kontainer scroll looping */}
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Gambar diulang dua kali supaya looping-nya mulus */}
          {images.concat(images).map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Ekstrakurikuler ${index + 1}`}
                width={280}
                height={200}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      <a href="/galeri"><button className={styles.ctaButton}>
        Coba lihat <span className={styles.arrow}>→</span>
      </button></a>
    </section>
  );
}

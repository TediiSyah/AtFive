'use client';

import React, { useState } from "react";
import styles from "./NewsSection.module.css";
import Image from 'next/image';

const newsData = [
  {
    image: "/galeri/image10.png",
    title: "SMK Telkom Malang Harumkan Nama Indonesia di ajang Internasional",
    location: "Korea",
    date: "15 Agustus 2025",
    description:
      "Perwakilan Kota Malang ini, berhasil meraih Juara 1 atau Gold Medal dalam Kompetisi Badan Standardisasi Nasional (BSN) 2025...",
  },
  {
    image: "/galeri/image53.png",
    title:
      "Kominfo Jatim dan SMK Telkom Malang Jalin Kolaborasi di Bidang Keamanan Siber",
    location: "Malang",
    date: "18 Januari 2025",
    description:
      "Perkembangan teknologi informasi yang pesat menuntut dunia pendidikan untuk terus menyesuaikan materi pembelajaran...",
  },
  {
    image: "/image/2.png",
    title:
      "Moklet Bilingual Education is Here! Learn English with SMK Telkom Malang",
    location: "Malang",
    date: "05 Desember 2024",
    description:
      "Kegiatan yang dari awal para siswa ini melakukan giat pengerjaan LMS bahasa Inggris namanya English Discovery...",
  },
  {
    image: "/galeri/image11.png",
    title:
      "SMK Telkom Malang Menyabet Medali Emas di Festival Fiksi Jakarta",
    location: "Jakarta",
    date: "27 Agustus 2024",
    description:
      "SMK Telkom Malang berhasil memperoleh total medali 10 diantaranya 4 emas, 5 perak dan 1 perunggu...",
  },
  // 🔽 4 Berita tambahan
  {
    image: "/galeri/image10.png",
    title: "Siswa SMK Telkom Malang Ciptakan Aplikasi AI Edukasi Anak",
    location: "Malang",
    date: "12 Maret 2025",
    description:
      "Sebuah inovasi menarik dari siswa RPL menciptakan aplikasi edukasi berbasis AI untuk anak-anak sekolah dasar...",
  },
  {
    image: "/galeri/image12.png",
    title: "SMK Telkom Malang Raih Penghargaan Sekolah Digital Terbaik",
    location: "Surabaya",
    date: "9 Februari 2025",
    description:
      "Dalam ajang penghargaan Digital School Award, SMK Telkom Malang berhasil meraih peringkat pertama se-Jawa Timur...",
  },
  {
    image: "/galeri/image13.png",
    title: "Tim Voli Moklet Juara 1 Turnamen Antar Sekolah se-Malang Raya",
    location: "Malang",
    date: "20 Mei 2025",
    description:
      "Tim voli putra SMK Telkom Malang sukses menjuarai turnamen tingkat kota dengan strategi dan kerja sama yang solid...",
  },
  {
    image: "/galeri/image15.png",
    title: "Kegiatan Bakti Sosial: SMK Telkom Malang Peduli Masyarakat",
    location: "Batu",
    date: "30 Juni 2025",
    description:
      "Para siswa dan guru berpartisipasi aktif dalam kegiatan sosial berupa pembagian sembako dan kegiatan kebersihan lingkungan...",
  },
];

const NewsSection = () => {
  const [visibleCount, setVisibleCount] = useState(4); // tampil 4 berita awal

  const handleShowMore = () => {
    setVisibleCount(newsData.length); // tampilkan semua berita
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Yang Mungkin Anda Suka</h2>
        <p className={styles.sectionSubtitle}>
          Temukan berita dan informasi terbaru seputar SMK Telkom Malang
        </p>
      </div>

      <div className={styles.newsGrid}>
        {newsData.slice(0, visibleCount).map((item, index) => (
          <div
            className={`${styles.card} ${styles.fadeIn}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={180}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.meta}>
                {item.location}, {item.date}
              </p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < newsData.length && (
        <button className={styles.moreButton} onClick={handleShowMore}>
          Lihat lebih banyak <span>→</span>
        </button>
      )}
    </section>
  );
};

export default NewsSection;

'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Achievements.module.css';

export default function Achievements() {
  const data = [
    {
      img: '/galeri/image10.png',
      name: 'M. Rezky Eksatama',
      desc: 'Juara 1 LKS (Nasional) Bidang IT Software Solution for Business',
      date: '31 Juli 2025',
    },
    {
      img: '/galeri/image11.png',
      name: 'Kontingen SMK Telkom Malang',
      desc: 'Juara Umum LKS Provinsi Jawa Timur',
      date: '08 Mei 2025',
    },
    {
      img: '/galeri/image12.png',
      name: 'Adiyet Laksamana Putra K.',
      desc: 'Juara 1 LKS (Kota) Bidang Graphic Designer',
      date: '12 Maret 2023',
    },
    {
      img: '/image/beasiswa.jpg',
      name: 'Albi Ariza Raih Beasiswa',
      desc: 'Juara 1 Kompetisi Standardisasi Nasional Tingkat SMA/SMK oleh BSN',
      date: '15 Agustus 2025',
    },
    {
      img: '/galeri/image14.png',
      name: 'Team AtFive SMK Telkom Malang',
      desc: 'Juara 1 Business Plan Berdampak Demo Day MIC X MYD',
      date: '13 Januari 2024',
    },
    {
      img: '/galeri/image15.png',
      name: 'Bagas Dwitam & Reza Ananta',
      desc: 'Lolos menjadi perwakilan LKS Provinsi Jawa Timur Bidang Cyber Security',
      date: '23 April 2023',
    },
  ];

  const itemsPerPage = 3; // Bisa diubah sesuai kebutuhan
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          SMK Telkom Malang <span>Berprestasi</span>
        </h2>
        <p className={styles.subtitle}>
          Inilah Bukti Nyata Bakat dan Dedikasi Siswa/i SMK Telkom Malang
        </p>
      </div>

      <div className={styles.grid}>
        {currentItems.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.img}
                alt={item.name}
                width={350}
                height={220}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <p className={styles.date}>{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
}

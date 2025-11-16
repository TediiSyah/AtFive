'use client';

import { useState } from 'react';
import styles from './TipsCeritaSeru.module.css';
import Image from 'next/image';

export default function TipsCeritaSeru() {
  const cards = [
    {
      title: 'Lulusan TKJ tapi Kerja di bidang UI/UX? Kok bisa?',
      desc: 'Yuk ngobrol bareng Kak Karnya, Alumni yang sekarang bekerja',
      date: '10 Juni 2025',
      image: '/galeri/image10.png',
    },
    {
      title: 'Tips & Trik Mengetahui Bakat Maupun Minat Kamu!',
      desc: 'Gabung sama Kak Farei Angkatan 27 yang masuk prodi',
      date: '07 Januari 2025',
      image: '/galeri/image11.png',
    },
    {
      title: 'Menjalin Kembali Kenangan Reuni Akbar Wikusama',
      desc: 'SMK Telkom Malang bersama Alumni Wikusama menggelar Reuni Akbar  ',
      date: '5 Oktober 2025',
      image: '/image/alumnos.jpg',
    },
    {
      title: 'Spekta 32 Ditutup Meriah Bersama Soul5five',
      desc: 'Puncak perayaan HUT ke-32 SMK Telkom Malang berlangsung megah.',
      date: '15 Agustus 2025',
      image: '/image/diesnat.jpg',
    },
    {
      title: 'Gimana sih rasanya PKL di Telkom Access?',
      desc: 'Yuk tanya-tanya Kak Malik dari Angkatan 31 dari Jurusan TKJ',
      date: '13 Januari 2025',
      image: '/galeri/image14.png',
    },
    {
      title: ' Booth Universitas Ma Chung Dipadati Siswa',
      desc: 'Booth Universitas Ma Chung menjadi salah satu titik yang paling diminati.',
      date: '03 Agustus 2025',
      image: '/image/edufair.jpg',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Hitung indeks untuk slicing
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = cards.slice(indexOfFirstItem, indexOfLastItem);

  // Total halaman
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Fungsi pindah halaman
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          Tips, Tricks, dan <span>Cerita Seru</span>
        </h2>
        <p>
          Kisah nyata alumni yang bisa jadi bekal buat Mokleters masa kini.
        </p>
      </div>

      <div className={styles.grid}>
        {currentCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className={styles.date}>{card.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNumber = idx + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={currentPage === pageNumber ? styles.activePage : ''}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

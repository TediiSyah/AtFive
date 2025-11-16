'use client';

import { useState } from 'react';
import styles from './TipsCeritaSeru.module.css';
import Image from 'next/image';

export default function TipsCeritaSeru() {
  const cards = [
    {
      title: 'TKJ graduate working in UI/UX? How is that possible?',
      desc: 'Let chat with Kak Karnya, an alumnus who is now working',
      date: '10 Juni 2025',
      image: '/galeri/image10.png',
    },
    {
      title: 'How to Identify Your Talent and Interest!',
      desc: 'Join Kak Farei Angkatan 27 who joined the program',
      date: '07 Januari 2025',
      image: '/galeri/image11.png',
    },
    {
      title: 'Grand Reunion and Opening of Wikusama Cafe',
      desc: 'SMK Telkom Malang reunites with Alumni Wikusama',
      date: '5 October 2025',
      image: '/image/alumnos.jpg',
    },
    {
      title: 'Specta 32 Closes Celebrations with a Performance by Soul5five',
      desc: 'The peak of the 32nd anniversary celebration of SMK Telkom Malang took place magnificently.',
      date: '15 August 2025',
      image: '/image/diesnat.jpg',
    },
    {
      title: 'What does it feel like to be a PKL at Telkom Access?',
      desc: ' Ask Brother Malik and Brother Ridho from the alumni of class 31 of the TKJ Department',
      date: '13 January 2025',
      image: '/galeri/image14.png',
    },
    {
      title: 'Universitas Ma Chung booth was visited by students',
      desc: 'Ma Chung University booth sponsored by Evercoss became one of the most popular spots.',
      date: '03 August 2025',
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
          Tips, Tricks, and <span>Exciting Story</span>
        </h2>
        <p>
          Real story of alumni that can be a bekal for Mokleters in the future.
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

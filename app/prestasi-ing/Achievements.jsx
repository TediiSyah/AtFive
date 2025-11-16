'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Achievements.module.css';

export default function Achievements() {
  const data = [
  {
    img: '/galeri/image10.png',
    name: 'M. Rezky Eksatama',
    desc: '1st Place in National LKS - IT Software Solution for Business',
    date: '31 July 2025',
  },
  {
    img: '/galeri/image11.png',
    name: 'SMK Telkom Malang Contingent',
    desc: '1st Place in Provincial LKS - East Java',
    date: '08 May 2025',
  },
  {
    img: '/galeri/image12.png',
    name: 'Adiyet Laksamana Putra K.',
    desc: '1st Place in City-Level LKS - Graphic Design',
    date: '12 March 2025',
  },
  {
    img: '/image/beasiswa.jpg',
    name: 'Albi Ariza Earns Scholarship',
    desc: '1st Place in National Standardization Competition for High School/Vocational Students by BSN',
    date: '15 August 2025',
  },
  {
    img: '/galeri/image14.png',
    name: 'Team AtFive SMK Telkom Malang',
    desc: '1st Place in Business Plan with Impact - Demo Day MIC X MYD',
    date: '13 January 2025',
  },
  {
    img: '/galeri/image15.png',
    name: 'Bagas Dwitam & Reza Ananta',
    desc: 'Selected as Representatives for East Java Provincial LKS - Cyber Security Field',
    date: '23 April 2025',
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
          SMK Telkom Malang <span>Achievements</span>
        </h2>
        <p className={styles.subtitle}>
          Here is the True Evidence of Talent and Dedication of Students SMK Telkom Malang
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

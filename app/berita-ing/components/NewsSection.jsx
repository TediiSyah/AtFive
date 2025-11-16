'use client';

import React, { useState } from "react";
import styles from "./NewsSection.module.css";
import Image from 'next/image';

const newsData = [
  {
    image: "/galeri/image10.png",
    title: "Telkom Vocational School Malang Brings Indonesia's Name to the International Stage",
    location: "Korea",
    date: "15 August 2025",
    description:
      "This Malang City Representative, successfully won Gold Medal in the National Standardization Organization (BSN) 2025..",
  },
  {
    image: "/galeri/image53.png",
    title:
      "The East Java Ministry of Communication and Information Technology and Telkom Vocational School in Malang Collaborate in Cybersecurity",
    location: "Malang",
    date: "18 January 2025",
    description:
      "The East Java Ministry of Communication and Information Technology and Telkom Vocational School in Malang Collaborate in Cybersecurity...",
  },
  {
    image: "/image/2.png",
    title:
      "Moklet Bilingual Education is Here! Learn English with SMK Telkom Malang",
    location: "Malang",
    date: "05 December 2024",
    description:
      "The students from the beginning have been working on the LMS English Discovery...",
  },
  {
    image: "/galeri/image11.png",
    title:
      "Telkom Vocational School in Malang Achieves Gold Medal at the Jakarta Fiction Festival",
    location: "Jakarta",
    date: "27 August 2024",
    description:
      "Telkom Vocational School in Malang successfully won 10 medals, including 4 gold, 5 silver, and 1 bronze...",
  },
  // 🔽 4 Berita tambahan
  {
    image: "/galeri/image10.png",
    title: "Students from Telkom Vocational School in Malang Create an AI Education Application for Children",
    location: "Malang",
    date: "12 March 2025",
    description:
      "An innovative creation from students RPL creating an AI-based education application for elementary school children...",
  },
  {
    image: "/galeri/image12.png",
    title: "Telkom Vocational School in Malang Receives the Best Digital School Award",
    location: "Surabaya",
    date: "9 February 2025",
    description:
      "In the Digital School Award competition, Telkom Vocational School in Malang successfully won first place in East Java...",
  },
  {
    image: "/galeri/image13.png",
    title: "Telkom Vocational School in Malang Wins First Place in the Inter-School Volleyball Tournament",
    location: "Malang",
    date: "20 May 2025",
    description:
      "The men's volleyball team of Telkom Vocational School in Malang successfully won the city-level tournament with solid strategy and teamwork...",
  },
  {
    image: "/galeri/image15.png",
    title: "Telkom Vocational School in Malang Participates in Social Activities",
    location: "Batu",
    date: "30 June 2025",
    description:
      "Students and teachers actively participate in social activities such as food distribution and cleanliness activities...",
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
        <h2 className={styles.sectionTitle}>You May Also Like</h2>
        <p className={styles.sectionSubtitle}>
          Find the latest news and information about Telkom Vocational School in Malang
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
          See more <span>→</span>
        </button>
      )}
    </section>
  );
};

export default NewsSection;

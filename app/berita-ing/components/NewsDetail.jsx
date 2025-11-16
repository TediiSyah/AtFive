'use client';
import { useState, useRef } from "react";
import styles from './NewsDetail.module.css';
import Image from 'next/image';

const bigNewsData = [
  {
    image: "/image/olimawisa.jpg",
    title: "🏆 Telkom Vocational School Malang Holds National-Level OLIMAWISA 2025",
    date: "01 October 2025",
    description: "This prestigious event for elementary and middle school levels was successfully held with high enthusiasm, bringing together high-achieving young generations from various regions who competed in academic and technology competitions.",
  },
  {
    image: "/image/beasiswa.jpg",
    title: " Telkom Malang Vocational School Students Receive Scholarships and Work Bonds",
    date: "15 September 2025",
    description: "This is a great achievement for Telkom Vocational School Malang when students successfully received scholarships and work bonds directly from major companies, proving the quality of graduates who are ready to compete in the industry.",
  },
  {
    image: "/image/wikucafe.jpg",
    title: "☕ Wikucafe Opens Officially by Wikusama Alumni",
    date: "20 August 2025",
    description: "Telkom Vocational School Malang now has a new space for entrepreneurship and relaxation! Wikucafe, founded by Wikusama alumni, becomes a creative platform for students and alumni to develop entrepreneurial spirit.",
  },
  {
    image: "/image/robotik.jpg",
    title: "🤖 Robotics Becomes an Attractive Aspect of OLIMAWISA 2025",
    date: "10 July 2025",
    description: "Robotics competition has become one of the most exciting events in OLIMAWISA 2025, where participants showcase intelligent robot innovations in front of judges and visitors. 27 February 2025",
  },
];

export default function NewsDetail() {
  const [selectedNews, setSelectedNews] = useState({
    image: "/image/noxa.jpg",
    title: "🎉 Dies Natalis Telkom Vocational School Malang Welcomes Pusakata",
    date: "12 June 2025",
    description: `In celebration of the school's 33rd anniversary, Telkom Vocational School Malang successfully invited Pusakata (Mas Is), former Payung Teduh vocalist, to the stage, creating a warm and nostalgic atmosphere for the audience.
`,
  });

  const mainContentRef = useRef(null);

  const handleClickBigNews = (news) => {
    setSelectedNews(news);
    // Scroll ke konten utama
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={styles.container}>
      {/* ===================== KONTEN UTAMA ===================== */}
      <article className={styles.mainContent} ref={mainContentRef}>
        <h1 className={styles.title}>{selectedNews.title}</h1>
        <p className={styles.date}>{selectedNews.date}</p>

        <div className={styles.mainImage}>
          <Image
            src={selectedNews.image}
            alt={selectedNews.title}
            width={800}
            height={450}
          />
        </div>

        <div className={styles.textContent}>
          <p>{selectedNews.description}</p>
        </div>
      </article>

      {/* ===================== SIDEBAR ===================== */}
      <aside className={styles.sidebar}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Latest News</h3>
          <ul className={styles.newsList}>
            <li>A Proud Achievement! M. Rezky Ekastama Wins Gold Medal in IT Software Solutions for Business</li>
            <li>Ready to Represent Indonesia, Jean, Shabri, and Syafakarim Successfully Won First Place in the Standardization Competition</li>
            <li>Becoming the Top Contributor of Medals in the Provincial LKS, Making East Java Province the Overall Champion</li>
            <li>Telkom Vocational School Malang's Achievements at the ASEAN Youth Camp 2025: AI Hackathon for Green Sustainability</li>
            <li>The New Academic Year Has Started, Telkom Vocational School Malang is Ready to Welcome New Students with MPLS</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Big News</h3>
          <div className={styles.bigNews}>
            {bigNewsData.map((news, idx) => (
              <div
                key={idx}
                className={styles.bigCard}
                onClick={() => handleClickBigNews(news)}
              >
                <Image src={news.image} alt={news.title} width={350} height={180} />
                <p>{news.title}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

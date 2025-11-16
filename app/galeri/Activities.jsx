'use client';
import React from "react";
import styles from "./Activities.module.css";
import Image from "next/image";

const Activities = () => {
  const activities = [
    {
      title: "Moklet Youth Innovators 2025",
      image: "/galeri/image27.png",
      link: "/berita",
    },
    {
      title: "Olimawisa 2025",
      image: "/image/olimawisa1.jpg",
      link: "/berita",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.activitiesSection}>
      <div className={styles.mainTitle}>
        <h2>
          Nggak Cuma Belajar! Intip{" "}
          <span className={styles.redText}>Keseruan</span> & Skill yang Bisa Kamu Asah di{" "}
          <span className={styles.redText}>Moklet!</span>
        </h2>
      </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            {activities.map((activity, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={activity.image} 
                    alt={activity.title}
                    fill
                    className={styles.activityImage}
                  />
                </div>
                <h3>{activity.title}</h3>
                <a href={activity.link} className={styles.button}>
                  Lihat lebih banyak →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;

'use client';
import React from "react";
import styles from "./Activities.module.css";
import Image from "next/image";

const Activities = () => {
  const activities = [
    {
      title: "Moklet Youth Innovators 2025",
      image: "/galeri/image27.png",
      link: "/berita-ing",
    },
    {
      title: "Olimawisa 2025",
      image: "/image/olimawisa1.jpg",
      link: "/berita-ing",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.activitiesSection}>
      <div className={styles.mainTitle}>
        <h2>
          Not Just Learning! peek{" "}
          <span className={styles.redText}>Fun</span> & Skills that You Can Improve at{" "}
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
                  See more →
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

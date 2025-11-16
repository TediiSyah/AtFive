import React, { useState } from "react";
import styles from "./FriendTelkom.module.css";

const FriendTelkom = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const events = [
    {
      thumbnail: "/image/frame21.png",
      full: "/image/noxa.jpg",
    },
    {
      thumbnail: "/image/frame22.png",
      full: "/image/party.jpg",
    },
    {
      thumbnail: "/galeri/image32.png",
      full: "/image/mic.png",
    },
  ];

  return (
    <section className={styles.friendSection}>
      <div className={styles.mainTitle}>
        <h2>
          Flashback Fun Times{" "}
          <span className={styles.redText}>Friends</span> SMK{" "}
          <span className={styles.redText}>Telkom</span> Malang
        </h2>
      </div>

      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.eventItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${
                activeIndex === index ? event.full : event.thumbnail
              })`,
            }}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          ></div>
        ))}
      </div>
    </section>
  );
};

export default FriendTelkom;

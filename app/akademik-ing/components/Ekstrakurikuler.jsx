import React from "react";
import styles from "../Ekstrakurikuler.module.css";
import {
  FaFlag,
  FaRobot,
  FaUsers,
  FaComments,
  FaBasketballBall,
  FaVolleyballBall,
  FaUserNinja,
  FaTheaterMasks,
  FaBookOpen,
  FaFutbol,
  FaMusic,
  FaFemale,
} from "react-icons/fa";

const ekskulList = [
  {
    icon: <FaFlag />,
    title: "Mandatory Scouting",
    desc: "Mandatory Scouting is a mandatory extracurricular activity for students in class X.",
    colorLight: "#FCE7B1",
    colorStrong: "#F7C46D",
  },
  {
    icon: <FaRobot />,
    title: "Robotics",
    desc: "Robotics is an extracurricular activity that teaches the basics of electronics, assembly, and programming robots using sensors and logic.",
    colorLight: "#B9DEFF",
    colorStrong: "#66B4FF",
  },
  {
    icon: <FaUsers />,
    title: "Paskibra",
    desc: "Paskibra is an extracurricular activity that teaches leadership, discipline, and national spirit through marching.",
    colorLight: "#C3F5B8",
    colorStrong: "#6CD44E",
  },
  {
    icon: <FaComments />,
    title: "English Conversation",
    desc: "English Conversation is an extracurricular activity that teaches the ability to speak English through discussions, roleplay, and daily conversations.",
    colorLight: "#E3D6FF",
    colorStrong: "#A37EFF",
  },
  {
    icon: <FaBasketballBall />,
    title: "Basketball",
    desc: "Basketball is an extracurricular activity that teaches the basics of basketball, strategy, and teamwork on the court.",
    colorLight: "#FFC8A2",
    colorStrong: "#FF914D",
  },
  {
    icon: <FaVolleyballBall />,
    title: "Volleyball",
    desc: "Volleyball is an extracurricular activity that teaches the basics of volleyball, strategy, and teamwork on the court.",
    colorLight: "#FFF5A3",
    colorStrong: "#FFD400",
  },
  {
    icon: <FaUserNinja />,
    title: "Ninja",
    desc: "Ninja is an extracurricular activity that teaches the basics of ninja techniques, physical fitness, and mental development.",
    colorLight: "#B7EFE7",
    colorStrong: "#3DBBAA",
  },
  {
    icon: <FaFemale />,
    title: "Dance",
    desc: "Dance is an extracurricular activity that teaches the basics of dance, physical fitness, and mental development.",
    colorLight: "#F5C2F3",
    colorStrong: "#E47DE0",
  },
  {
    icon: <FaTheaterMasks />,
    title: "Theater",
    desc: "Theater is an extracurricular activity that teaches the basics of theater, physical fitness, and mental development.",
    colorLight: "#C9E2FF",
    colorStrong: "#609CFF",
  },
  {
    icon: <FaBookOpen />,
    title: "Tahfidz",
    desc: "Tahfidz is an extracurricular activity that teaches the basics of reading the Quran, physical fitness, and mental development.",
    colorLight: "#D7FFB9",
    colorStrong: "#8FD866",
  },
  {
    icon: <FaFutbol />,
    title: "Futsal",
    desc: "Sports extracurricular activities to improve agility, stamina, and futsal playing strategies in a team.",
    colorLight: "#E6E6E6",
    colorStrong: "#BFBFBF",
  },
  {
    icon: <FaMusic />,
    title: "Choir",
    desc: "Choir is an extracurricular activity that teaches the basics of choir, physical fitness, and mental development.",
    colorLight: "#FFD1C6",
    colorStrong: "#FF6F5E",
  },
];

export default function Ekstrakurikuler() {
  return (
    <section className={styles.container}>
     <div className={styles.header}>
        <h2 className={styles.title}>
        Curriculum <span className={styles.highlight}>Extracurricular</span>{" "}
        </h2><h2  className={styles.title}>Life Skill Development</h2>
      </div>

      <div className={styles.grid}>
        {ekskulList.map((item, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.iconWrapper}
              style={{
                "--color-light": item.colorLight,
                "--color-strong": item.colorStrong,
              }}
            >
              <div className={styles.icon}>{item.icon}</div>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

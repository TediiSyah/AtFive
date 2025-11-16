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
    title: "Wajib Pramuka",
    desc: "Kegiatan wajib untuk membentuk kedisiplinan, kepemimpinan, kemandirian, dan kerja sama bagi siswa kelas X.",
    colorLight: "#FCE7B1",
    colorStrong: "#F7C46D",
  },
  {
    icon: <FaRobot />,
    title: "Robotik",
    desc: "Ekskul yang mengajarkan dasar-dasar elektronika, perakitan, dan pemrograman robot menggunakan sensor dan logika.",
    colorLight: "#B9DEFF",
    colorStrong: "#66B4FF",
  },
  {
    icon: <FaUsers />,
    title: "Paskibra",
    desc: "Ekskul yang melatih kepemimpinan, kedisiplinan, serta semangat nasionalisme melalui baris-berbaris.",
    colorLight: "#C3F5B8",
    colorStrong: "#6CD44E",
  },
  {
    icon: <FaComments />,
    title: "English Conversation",
    desc: "Ekskul yang melatih kemampuan berbicara dalam Bahasa Inggris melalui diskusi, roleplay, dan percakapan sehari-hari.",
    colorLight: "#E3D6FF",
    colorStrong: "#A37EFF",
  },
  {
    icon: <FaBasketballBall />,
    title: "Bola Basket",
    desc: "Melatih teknik dasar bola basket, strategi permainan, dan kerja sama tim di lapangan.",
    colorLight: "#FFC8A2",
    colorStrong: "#FF914D",
  },
  {
    icon: <FaVolleyballBall />,
    title: "Bola Voli",
    desc: "Mengasah kemampuan servis, passing, smash, serta strategi permainan voli bersama tim.",
    colorLight: "#FFF5A3",
    colorStrong: "#FFD400",
  },
  {
    icon: <FaUserNinja />,
    title: "Pencak Silat",
    desc: "Belajar teknik bela diri tradisional, meningkatkan fisik dan mental, serta menanamkan nilai budaya.",
    colorLight: "#B7EFE7",
    colorStrong: "#3DBBAA",
  },
  {
    icon: <FaFemale />,
    title: "Tari",
    desc: "Menampilkan tarian tradisional maupun modern, serta melatih keluwesan dan kerja sama tim.",
    colorLight: "#F5C2F3",
    colorStrong: "#E47DE0",
  },
  {
    icon: <FaTheaterMasks />,
    title: "Teater",
    desc: "Membina kemampuan akting, vokal, ekspresi, serta produksi pertunjukan teater bersama tim.",
    colorLight: "#C9E2FF",
    colorStrong: "#609CFF",
  },
  {
    icon: <FaBookOpen />,
    title: "Tahfidz",
    desc: "Kegiatan menghafal Al-Qur’an secara rutin dengan target hafalan tertentu dan pembinaan intensif.",
    colorLight: "#D7FFB9",
    colorStrong: "#8FD866",
  },
  {
    icon: <FaFutbol />,
    title: "Futsal",
    desc: "Ekskul olahraga untuk meningkatkan ketangkasan, stamina, dan strategi bermain futsal dalam tim.",
    colorLight: "#E6E6E6",
    colorStrong: "#BFBFBF",
  },
  {
    icon: <FaMusic />,
    title: "Paduan Suara",
    desc: "Latihan vokal secara kelompok, mengenal harmoni suara, dan tampil dalam berbagai acara sekolah.",
    colorLight: "#FFD1C6",
    colorStrong: "#FF6F5E",
  },
];

export default function Ekstrakurikuler() {
  return (
    <section id="ekstrakurikuler" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Kurikulum <span className={styles.highlight}>Ekstrakurikuler</span>{" "}
        </h2>
        <h2 className={styles.title}>Pengembangan Life Skill</h2>
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

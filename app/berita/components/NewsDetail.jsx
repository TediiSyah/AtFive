'use client';
import { useState, useRef } from "react";
import styles from './NewsDetail.module.css';
import Image from 'next/image';

const bigNewsData = [
  {
    image: "/image/olimawisa.jpg",
    title: "🏆 SMK Telkom Malang Gelar OLIMAWISA 2025 Bertaraf Nasioanal",
    date: "01 Oktober 2025",
    description: "Ajang bergengsi tingkat SD dan SMP ini sukses digelar dengan antusiasme tinggi, menghadirkan generasi muda berprestasi dari berbagai daerah yang beradu kemampuan dalam kompetisi akademik dan teknologi",
  },
  {
    image: "/image/beasiswa.jpg",
    title: " Siswa SMK Telkom Malang Raih Beasiswa & Ikatan Kerja",
    date: "15 September 2025",
    description: "Sebuah kebanggaan tersendiri bagi SMK Telkom Malang ketika para siswanya berhasil memperoleh beasiswa dan ikatan kerja langsung dari perusahaan ternama, membuktikan kualitas lulusan yang siap bersaing di dunia industri.",
  },
  {
    image: "/image/wikucafe.jpg",
    title: "☕ Wikucafe Resmi Dibuka oleh Alumni Wikusama",
    date: "20 Agustus 2025",
    description: "SMK Telkom Malang kini punya ruang baru untuk berkarya dan bersantai! Wikucafe, yang didirikan oleh alumni Wikusama, menjadi wadah kolaborasi kreatif antara siswa dan alumni dalam mengembangkan semangat kewirausahaan.",
  },
  {
    image: "/image/robotik.jpg",
    title: "🤖 Robotik Jadi Daya Tarik di OLIMAWISA 2025",
    date: "10 Juli 2025",
    description: "Lomba robotik menjadi salah satu ajang paling seru dalam OLIMAWISA 2025, di mana para peserta menampilkan inovasi robot cerdas hasil karya mereka di hadapan dewan juri dan pengunjung. -27 februari 2025",
  },
];

export default function NewsDetail() {
  const [selectedNews, setSelectedNews] = useState({
    image: "/image/noxa.jpg",
    title: "🎉 Meriah! Dies Natalis SMK Telkom Malang Hadirkan Pusakata",
    date: "12 Juni 2025",
    description: `Dalam perayaan ulang tahun sekolah yang ke-33, SMK Telkom Malang sukses menghadirkan Pusakata (Mas Is), mantan vokalis Payung Teduh, yang membuat suasana panggung penuh kehangatan dan nostalgia.
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
          <h3 className={styles.sectionTitle}>Berita Terbaru</h3>
          <ul className={styles.newsList}>
            <li>Prestasi Membanggakan! M. Rezky Ekastama Raih Medali Emas Bidang IT Software Solution For Business</li>
            <li>Siap Mewakili Indonesia, Jean, Shabri, dan Syafakarim Berhasil Meraih Juara 1 Kompetisi Standarisasi</li>
            <li>Menjadi Penyumbang Medali Terbanyak di LKS Provinsi, Membuat Provinsi Jatim Mendapatkan Juara Umum</li>
            <li>Prestasi SMK Telkom Malang di ASEAN Youth Camp 2025: AI Hackathon For Green Sustainability</li>
            <li>Tahun Ajaran Baru Sudah Dimulai, SMK Telkom Malang Siap Menyambut Peserta Didik Baru Dengan MPLS</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Berita Besar</h3>
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

'use client';
import styles from './Timeline.module.css';
const timelineData = [
  {
    date: '13 November 2025',
    title: 'Pengumpulan Berkas',
    desc: 'Calon siswa mengisi formulir pendaftaran online melalui website resmi dan mengunggah dokumen sesuai dengan persyaratan.'
  },
  {
    date: '06 Januari 2026',
    title: 'Tes Potensi Akademik & Algoritma',
    desc: 'Tes online/offline berbasis komputer untuk mengukur kemampuan dalam bidang matematika, algoritma, dan bahasa Inggris.'
  },
  {
    date: '11 Februari 2026',
    title: 'Seleksi Gelombang 2',
    desc: 'Seleksi tahap kedua untuk siswa yang belum sempat mengikuti gelombang pertama.'
  },
  {
    date: '18 Februari 2026',
    title: 'Pengumuman Diterima',
    desc: 'Hasil seleksi diumumkan melalui website resmi dan email yang didaftarkan.'
  },
  {
    date: '25 Februari 2026',
    title: 'Kelengkapan Berkas',
    desc: 'Siswa yang diterima wajib melengkapi berkas administrasi sesuai petunjuk dari panitia.'
  }
];

export default function TimelinePPDB() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>Dari Sini Perjalanan Dimulai</h2>
      <p className={styles.subtitle}>PPDB 2025/2026</p>

      <div className={styles.timelineWrapper}>
        <div className={styles.timelineContainer}>
          {timelineData.map((item, index) => (
            <div className={styles.timelineItem} key={index}>
              <div className={styles.dot}></div>
              <p className={styles.date}>{item.date}</p>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

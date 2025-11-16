'use client';
import styles from './Timeline.module.css';

const timelineData = [
  {
    date: 'Juni 1992',
    title: 'Awal Berdiri',
    desc: 'SMK Telkom Malang didirikan dengan nama STM Telkom Sandhy Putra Malang dan awalnya berlokasi di Jl. Kawi No. 40, Kota Malang, menggunakan gedung eks APDN. Sekolah ini diresmikan oleh Menteri Pariwisata, Pos, dan Telekomunikasi, Soesilo Soedarman.'
  },
  {
    date: '1995',
    title: 'Pindah ke Lokasi Baru',
    desc: 'Tiga tahun setelah berdiri, sekolah berpindah ke lokasi baru di Jl. Danau Ranau, Sawojajar, Malang. Peresmian gedung baru dilakukan oleh Direktur Utama PT Telkom, Bapak Soeryanto P. Santoso, menandai dimulainya era baru pengembangan fasilitas dan lingkungan belajar.'
  },
  {
    date: '1997',
    title: 'Perubahan Status',
    desc: 'Sesuai kebijakan nasional di bidang pendidikan vokasi, penyebutan "STM" diubah menjadi "SMK". Dengan perubahan ini, nama sekolah secara resmi menjadi SMK Telkom Sandhy Putra Malang, mengikuti standar penamaan Sekolah Menengah Kejuruan.'
  },
  {
    date: '2014',
    title: 'Rebranding',
    desc: 'Yayasan Pendidikan Telkom (YPT) melakukan rebranding terhadap seluruh lembaga pendidikan di bawah naungannya, dari jenjang PAUD hingga SMK. Nama "Sandhy Putra" dihapus dari penamaan institusi, dan sekolah ini resmi berganti nama menjadi SMK Telkom Malang.'
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>Sejarah SMK Telkom Malang</h2>
      <p className={styles.subtitle}>Perjalanan Panjang Menuju Sekolah Digital Terkemuka</p>

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

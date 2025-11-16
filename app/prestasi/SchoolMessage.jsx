'use client';
import Image from 'next/image';
import styles from './SchoolMessage.module.css';
// Using Next.js Image component with public path
const photo = '/image/girl.png'; // Image should be in the public/image directory

export default function SchoolMessage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Karya-karya yang dihasilkan siswa <b>SMK Telkom Malang</b> adalah bukti nyata bahwa dengan kerja keras, disiplin, dan komitmen tinggi, tidak ada batas untuk berprestasi.
Namun, setiap pencapaian bukanlah akhir — melainkan langkah awal menuju tantangan yang lebih besar.
Bersama-sama, siswa, guru, dan seluruh civitas sekolah terus bergerak maju, belajar lebih giat, dan tidak pernah berhenti bermimpi demi masa depan yang lebih baik.

        </p>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.redCircle}></div>
        <div className={styles.smallCircleLeft}></div>
        <div className={styles.smallCircleRight}></div>
        <Image src={photo} alt="Students" width={380} height={380} className={styles.image} />
        <div className={styles.socials}>
          <span className={styles.icon}>f</span>
          <span className={styles.icon}>◎</span>
        </div>
      </div>
    </section>
  );
}

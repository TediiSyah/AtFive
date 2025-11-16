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
          The works displayed here are true evidence that with passion, hard work, and high dedication,
          students/i SMK Telkom Malang can create something impressive. However, this achievement is not the end—
          but rather the first step towards greater challenges. Because of this, we all, whether students, teachers, or
          the entire school community, must continue to move forward, study more actively, be more diligent in the process, and never stop dreaming for a better future.
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

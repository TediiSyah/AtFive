'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
            Jadikan setiap hari sebagai <span className={styles.red}>kesempatan</span>,<br />
            untuk belajar hal baru, karena itu akan membuatmu <br /><span className={styles.red}>semakin</span> bijaksana
          </p>
          <p className={styles.author}>SMK Telkom Malang</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

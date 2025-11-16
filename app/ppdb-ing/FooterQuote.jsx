'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
            Make every day as an <span className={styles.red}>opportunity</span>,<br />
            to learn new things, because it will make you <br /><span className={styles.red}>even</span> wiser
          </p>
          <p className={styles.author}>SMK Telkom Malang</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

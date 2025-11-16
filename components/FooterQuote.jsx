'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
            Para juara tidak pernah <span className={styles.red}>tidur</span>,<br />
            semangat abadi membuat mereka<br />
            tetap <span className={styles.red}>waspada dan terjaga.</span>
          </p>
          <p className={styles.author}>– Amit Ray</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

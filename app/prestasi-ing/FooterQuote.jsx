'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
            The winners never <span className={styles.red}>sleep</span>,<br />
            eternal passion makes them<br />
            always <span className={styles.red}>alert and vigilant.</span>
          </p>
          <p className={styles.author}>– Amit Ray</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
          Champions never <span className={styles.red}>sleep</span>,<br />
            never-ending spirit makes them<br />
           <span className={styles.red}> always alert and vigilant</span>
          </p>
          <p className={styles.author}>– Amit Ray</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

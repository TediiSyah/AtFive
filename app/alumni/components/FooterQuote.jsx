'use client';
import styles from './FooterQuote.module.css';

export default function FooterQuote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.quoteContainer}>
        <span className={styles.quoteMark}>❝</span>
        <div className={styles.quoteContent}>
          <p className={styles.quote}>
          Para Juara Tidak Pernah <span className={styles.red}>  Tidur <br></br></span>
            Semangat Abadi Membuat Mereka Tetap<span className={styles.red}> Waspada dan Terjaga</span>
           
          </p>
          <p className={styles.author}>– Amit Ray</p>
        </div>
        <span className={`${styles.quoteMark} ${styles.quoteMarkRight}`}>❝</span>
      </div>
    </section>
  );
}

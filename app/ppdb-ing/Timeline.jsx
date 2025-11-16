'use client';
import styles from './Timeline.module.css';
const timelineData = [
  {
    date: '13 February 2025',
    title: 'Document Collection',
    desc: 'Students fill out the registration form online through the official website and upload documents according to the requirements.'
  },
  {
    date: '06 January 2026',
    title: 'Academic & Algorithm Test',
    desc: 'Online/offline computer-based test to measure ability in mathematics, algorithms, and English.'
  },
  {
    date: '11 January 2026',
    title: 'Selection Wave 2',
    desc: 'Selection for students who did not participate in the first wave.'
  },
  {
    date: '18 January 2026',
    title: 'Announcement',
    desc: 'Selection results are announced through the official website and email that was registered.'
  },
  {
    date: '25 January 2026',
    title: 'Completeness of Files',
    desc: 'Students who are accepted must complete administrative documents according to the instructions from the committee.'
  }
];

export default function TimelinePPDB() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>From Here the Journey Begins</h2>
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

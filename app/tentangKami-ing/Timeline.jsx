'use client';
import styles from './Timeline.module.css';

const timelineData = [
  {
    date: 'June 1992',
    title: 'Founding',
    desc: 'SMK Telkom Malang was founded with the name STM Telkom Sandhy Putra Malang and initially located at Jl. Kawi No. 40, Malang City, using the APDN building. The school was inaugurated by Minister of Tourism, Post, and Telecommunication, Soesilo Soedarman.'
  },
  {
    date: '1995',
    title: 'Move to New Location',
    desc: 'Three years after founding, the school moved to a new location at Jl. Danau Ranau, Sawojajar, Malang. The inauguration of the new building was done by the Director General of PT Telkom, Mr. Soeryanto P. Santoso, marking the beginning of a new era of facility development and learning environment.'
  },
  {
    date: '1997',
    title: 'Status Change',
    desc: ' In line with national policy in vocational education, the name "STM" was changed to "SMK". With this change, the schools official name became SMK Telkom Sandhy Putra Malang, following the standard naming convention for vocational schools.'
  },
  {
    date: '2014',
    title: 'Rebranding',
    desc: 'Yayasan Pendidikan Telkom (YPT) conducted a rebranding of all educational institutions under its jurisdiction, from preschool to senior high school. The name "Sandhy Putra" was removed from the institution name, and the school officially changed its name to SMK Telkom Malang.'
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>History SMK Telkom Malang</h2>
      <p className={styles.subtitle}>Long Journey to the Leading Digital School</p>

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

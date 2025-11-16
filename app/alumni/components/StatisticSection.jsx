import React, { useEffect, useState, useRef } from "react";
import styles from "./StatisticSection.module.css";

const Counter = ({ target, label, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    const timer = setInterval(() => {
      start += target / steps;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div className={styles.counter}>
      <div className={`${styles.number} ${visible ? styles.animate : ""}`}>
        {count}
        <span className={styles.percent}>%</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

const StatisticSection = () => {
  const counterSectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (counterSectionRef.current) observer.observe(counterSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={counterSectionRef}
      className={`${styles.counterContainer} ${
        visible ? "" : styles["counter-hidden"]
      }`}
    >
      <div>
        <Counter target={90} label="Bidang IT" visible={visible} />
        <div className={styles.divider}></div>
        <Counter target={7} label="Wirausaha" visible={visible} />
        <div className={styles.divider}></div>
        <Counter target={3} label="Non Bidang IT" visible={visible} />
      </div>
    </section>
  );
};

export default StatisticSection;

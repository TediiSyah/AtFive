'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../homePage.module.css';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = target;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div ref={counterRef} className={styles.counter}>
      <span className={`${styles.number} ${hasAnimated ? styles.animate : ''}`}>
        {count}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Counter;

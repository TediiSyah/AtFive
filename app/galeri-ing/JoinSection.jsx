"use client";
import React, { useEffect, useRef } from "react";
import styles from "./JoinSection.module.css";

export default function JoinSection() {
  const sectionRef = useRef(null);
  const decor1Ref = useRef(null);
  const decor2Ref = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = sectionRef.current.offsetTop;
      
      // Animate when section is in view
      if (scrollPosition > sectionPosition && window.scrollY < sectionPosition + sectionRef.current.offsetHeight) {
        const scrollPercent = (window.scrollY - sectionPosition + window.innerHeight) / window.innerHeight;
        
        if (decor1Ref.current) {
          decor1Ref.current.style.transform = `translateY(${scrollPercent * 20}px) rotate(-10deg)`;
        }
        if (decor2Ref.current) {
          decor2Ref.current.style.transform = `translateY(${scrollPercent * -15}px) rotate(15deg)`;
        }
        if (headingRef.current) {
          headingRef.current.style.opacity = Math.min(1, scrollPercent * 1.5);
          headingRef.current.style.transform = `translateY(${(1 - Math.min(1, scrollPercent)) * 30}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the section is already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.container} style={{ marginBottom: '150px' }}>
      {/* Dekorasi kiri atas */}
      <div ref={decor1Ref} className={`${styles.decor} ${styles.decor1}`}></div>
      <div ref={decor2Ref} className={`${styles.decor} ${styles.decor2}`}></div>

      {/* Teks utama */}
      <h2 ref={headingRef} className={styles.heading} style={{ opacity: 0, transition: 'all 0.5s ease-out' }}>
        Join Us, Be Part of the Story{" "}
        <span className={styles.red}>Next!</span>
      </h2>
      <a href="/tentangKami-ing"><p className={styles.subtext}> See More Moments →
</p></a>

      {/* Dekorasi kanan bawah */}
      <div className={`${styles.decor} ${styles.decor3}`}></div>
      <div className={`${styles.decor} ${styles.decor4}`}></div>
      <div className={`${styles.decor} ${styles.decor5}`}></div>
    </section>
  );
}

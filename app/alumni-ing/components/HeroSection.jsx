import styles from "./HeroSection.module.css";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
        Footsteps, <span className={styles.highlight}>Experience</span>, and
          Inspiration From Alumni For <br />
          <span className={styles.highlight}>Mokleters</span> Now.
        </h1>
        <a href="/ppdb-ing"><button className={styles.ctaButton}>
          Join Us
          <ArrowRight size={18} className={styles.icon} />
        </button></a>
      </div>
    </section>
  );
}

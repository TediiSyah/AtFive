import styles from "./HeroSection.module.css";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Jejak Langkah, <span className={styles.highlight}>Pengalaman</span>, dan
          Inspirasi dari Para Alumni untuk <br />
          <span className={styles.highlight}>Mokleters</span> Masa Kini.
        </h1>
        <a href="/ppdb"><button className={styles.ctaButton}>
          Gabung Dengan Kami
          <ArrowRight size={18} className={styles.icon} />
        </button></a>
      </div>
    </section>
  );
}

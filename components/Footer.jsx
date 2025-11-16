"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Kiri */}
        <div className={styles.left}>
          <div className={styles.logoSection}>
            <img src="/image/logo_smktelkom.png" alt="SMK Telkom Malang" className={styles.logo} />
            <div>
            </div>
          </div>
          <p className={styles.desc}>
            Bergabunglah dengan SMK Telkom Malang dan ikut serta dalam revolusi pembelajaran
            bersama demi pendidikan Indonesia yang lebih baik.
          </p>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/smktelkommalang?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://id.linkedin.com/school/smktelkommalang/"
            target="_blank"
            rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/smktelkommalang/#"
            target="_blank"
            rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/smktelkommalang"
            rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/@smktelkom_mlg"
            target="_blank"
            rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Kanan */}
        <div className={styles.right}>
          <div className={styles.info}>
            <p>
              <FaMapMarkerAlt className={styles.icon} />
              Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139
            </p>
            <p>
              <FaPhoneAlt className={styles.icon} />
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>2025 © Copyright Moklet All Rights Reserved.</p>
        <div className={styles.links}>
          <a >Terms & Conditions</a>
          <a >Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

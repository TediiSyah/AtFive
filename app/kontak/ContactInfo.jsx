import styles from './ContactInfo.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>
          Pusat Informasi Lengkap <span className={styles.highlight}>SMK Telkom Malang</span>
        </h1>

        <div className={styles.item}>
          <span className={styles.icon}>🕒</span>
          <div>
            <strong>Jam Kerja</strong>
            <p>Monday – Friday</p>
            <p>06.00 – 16.00 WIB</p>
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>📍</span>
          <div>
            <strong>Alamat</strong>
            <p>Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139</p>
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✉️</span>
          <div>
            <strong>Email</strong>
            <p>info@smktelkom-mlg.sch.id</p>
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>📞</span>
          <div>
            <strong>Hotline Sistem Informasi</strong>
            <p>+62 8122-3488-999 (WA)</p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a href="Facebook" className={styles.socialLink}><FaFacebookF /></a>
          <a href="Instagram" className={styles.socialLink}><FaInstagram /></a>
          <a href="Tiktok" className={styles.socialLink}><FaTiktok /></a>
          <a href="Youtube" className={styles.socialLink}><FaYoutube /></a>
        </div>
      </div>

      <div className={styles.mapSection}>
        <iframe
          title="SMK Telkom Malang"
          src="https://www.google.com/maps?q=SMK+Telkom+Malang&output=embed"
          className={styles.map}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;

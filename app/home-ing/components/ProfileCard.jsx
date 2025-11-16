import React from 'react';
import Image from 'next/image';
import styles from './ProfileCard.module.css';

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.background}>
        <Image 
          src="/background.jpg" 
          alt="Background" 
          width={400}
          height={200}
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={100}
            height={100}
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <h2>Nama Lengkap</h2>
          <p>@username</p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100</span>
              <span className={styles.statLabel}>Mengikuti</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500</span>
              <span className={styles.statLabel}>Pengikut</span>
            </div>
          </div>
        </div>
        <button className={styles.followButton}>Ikuti</button>
      </div>
    </div>
  );
};

export default ProfileCard;

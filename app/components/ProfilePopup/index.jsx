'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProfilePopup.module.css';

export default function ProfilePopup({ profile, onClose }) {
  if (!profile) return null;

    const [certImages, setCertImages] = useState(
    profile.certifications?.map(cert => {
      const baseName = cert.replace(/\s+/g, '');
      return {
        cert,
        src: `/certifications/${baseName}.webp`,
        fallbackSrc: `/certifications/${baseName}.png`
      };
    }) || []
  );

  const [profileImageSrc, setProfileImageSrc] = useState(profile.image);
  const [imageError, setImageError] = useState(false);



  const handleCertImageError = (index) => {
    setCertImages(prev => prev.map((certImg, i) => {
      if (i !== index) return certImg;
      
      // If we were trying the webp version, try the png version
      if (certImg.src.endsWith('.webp') && certImg.fallbackSrc) {
        return { ...certImg, src: certImg.fallbackSrc };
      }
      
      // If both failed, use the default image
      return { ...certImg, src: '/certifications/default-cert.webp' };
    }));
  };

  const handleProfileImageError = () => {
    if (!imageError) {
      setImageError(true);
      setProfileImageSrc('/guru/PRahmad.png');
    }
  };

  // Handle immediate image loading failures
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      // Image loaded successfully
    };
    img.onerror = () => {
      // Image failed to load immediately
      handleProfileImageError();
    };
    img.src = profile.image;
  }, [profile.image]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.header}>
          <Image
            src={profileImageSrc}
            alt={profile.name}
            width={150}
            height={150}
            className={styles.profileImage}
            onError={handleProfileImageError}
            unoptimized={imageError}
          />
          <div>
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.role}>{profile.role}</p>
            <p className={styles.department}>{profile.department}</p>
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.bio}>{profile.bio}</p>
          <p className={styles.experience}>
            Pengalaman: {profile.experience} tahun
          </p>

          {/* Sertifikat */}
          {certImages.length > 0 && (
            <div className={styles.certifications}>
              <h3>Sertifikasi</h3>
              <div className={styles.certImages}>
                {certImages.map((certImg, idx) => (
                  <Image
                    key={idx}
                    src={certImg.src}
                    alt={certImg.cert}
                    width={70}
                    height={70}
                    className={styles.certImage}
                    onError={() => handleCertImageError(idx)}
                    unoptimized={certImg.src.endsWith('default-cert.webp')}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

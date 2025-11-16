'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProfilePopup.module.css';

// Sample certification images - using WebP format for better performance
const CERTIFICATION_IMAGES = {
  'CCNA': '/certifications/CCNA.png',
  'MCSA': '/certifications/MCSA.png',
  'AWS': '/certifications/AWS.png',
  'Google': '/certifications/Google.png',
  'Microsoft': '/certifications/Microsoft.png',
  'Cisco': '/certifications/Cisco.png',
  'Coursera': '/certifications/Coursera.webp',
  'Dicoding': '/certifications/Dicoding.webp',
  'RevoU': '/certifications/RevoU.webp',
  'Specialist': '/certifications/Specialist.webp',
  'Specialist1': '/certifications/Specialist1.webp',
  'Specialist2': '/certifications/Specialist2.webp',
  
};

export default function ProfilePopup({ profile, onClose }) {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Helper function to get the correct image path for a certification
  const getImagePath = (cert) => {
    // Default image path - ensure it exists in public/certifications/
    const defaultImage = '/certifications/default-cert.webp';
    
    if (!cert) return { src: defaultImage, isDefault: true };
    
    // If the cert is a full path, use it directly
    if (cert.startsWith('/')) {
      return { src: cert.startsWith('/certifications/') ? cert : `/certifications/${cert}`, isDefault: false };
    }
    // If the cert exists in CERTIFICATION_IMAGES, use that
    if (CERTIFICATION_IMAGES[cert]) {
      return { src: CERTIFICATION_IMAGES[cert], isDefault: false };
    }
    // Default fallback
    return { src: defaultImage, isDefault: true };
  };
  
  // Fallback component for when images fail to load
  const ImageFallback = ({ alt, className }) => (
    <div className={`${styles.certificationImage} ${styles.fallbackImage} ${className || ''}`}>
      <span>{alt?.charAt(0).toUpperCase() || '?'}</span>
    </div>
  );

  // Helper function to render certification badges
  const renderCertifications = (certifications) => {
    if (!certifications || certifications.length === 0) {
      return <p className={styles.noCertifications}>No certifications available</p>;
    }
    
    return (
      <div className={styles.certificationsContainer}>
        {certifications.map((cert, index) => {
          const { src: imagePath, isDefault } = getImagePath(cert);
          const [imgError, setImgError] = useState(false);
          
          // If we've encountered an error, show the fallback
          if (imgError) {
            return (
              <div key={index} className={styles.certificationBadge}>
                <ImageFallback alt={cert} className={styles.certificationImage} />
              </div>
            );
          }
          
          return (
            <div key={index} className={styles.certificationBadge}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={imagePath}
                  alt={cert}
                  width={40}
                  height={40}
                  title={cert}
                  className={styles.certificationImage}
                  unoptimized={isDefault}  // Don't optimize default images
                  onError={() => setImgError(true)}
                />
              </div>
              <span className={styles.certificationName}>
                {cert.replace(/^\//, '').split('/').pop().replace(/\.[^/.]+$/, '')}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // Position the popup relative to the profile element
  useEffect(() => {
    if (profile && popupRef.current) {
      const profileElement = document.getElementById(`profile-${profile.id}`);
      if (profileElement) {
        const rect = profileElement.getBoundingClientRect();
        setPosition({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY + rect.height + 10 // Position below the profile
        });
      }
    }
  }, [profile]);

  if (!profile) return null;

  // Add some logging to help with debugging
  console.log('Rendering popup with profile:', profile);
  
  return (
    <div 
      ref={popupRef}
      className={styles.profilePopup}
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        maxWidth: '90%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.popupContent}>
        <div className={styles.popupHeader}>
          <div className={styles.profileImage}>
            <Image 
              src={profile.image || '/default-profile.jpg'} 
              alt={profile.name}
              width={80}
              height={80}
              className={styles.roundedImage}
            />
          </div>
          <div className={styles.profileInfo}>
            <h3 className={styles.profileName}>{profile.name}</h3>
            {profile.role && <p className={styles.profileRole}>{profile.role}</p>}
            {profile.department && <p className={styles.profileDepartment}>{profile.department}</p>}
          </div>
        </div>
        
        {profile.bio && (
          <div className={styles.profileBio}>
            <p>{profile.bio}</p>
            
            {/* Experience Section */}
            {profile.experience && (
              <div className={styles.experienceSection}>
                <h4>Industry Experience</h4>
                <div className={styles.experienceBadge}>
                  <span className={styles.experienceYears}>{profile.experience}</span>
                  <span>Years of Experience</span>
                </div>
              </div>
            )}
            
            {/* Certifications Section */}
            <div className={styles.section}>
              <h4>Certifications</h4>
              {renderCertifications(profile.certifications)}
            </div>
          </div>
        )}

        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close profile"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

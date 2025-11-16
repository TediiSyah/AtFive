'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProfilePopup.module.css';

// Certification images mapping with fallback support
const CERTIFICATION_IMAGES = {
  // Professional Certifications
  'CCNA': '/certifications/CCNA.png',
  'MCSA': '/certifications/MCSA.png',
  'AWS': '/certifications/AWS.png',
  'Google': '/certifications/Google.png',
  'Microsoft': '/certifications/Microsoft.png',
  'Cisco': '/certifications/Cisco.png',
  'MikroTik': '/certifications/MikroTik.png',
  'Oracle': '/certifications/Oracle.png',
  
  // Course Certificates
  'UXResearch': '/certifications/Coursera.webp',
  'DesignsPrototypes': '/certifications/Coursera1.webp',
  'FoundationsUX': '/certifications/Coursera2.webp',
  'Dicoding': '/certifications/Dicoding.webp',
  'RevoU': '/certifications/Revo.webp',
  'DataAnalyst': '/certifications/Specialist.webp',
  'SoftwareDeveloper': '/certifications/Specialist1.webp',
  'ActificialIntelligence': '/certifications/Specialist2.webp',
  'Swift': '/certifications/Swift.webp',
  'DataSet': '/certifications/DataSet.jpg',
  'ResearchStarterkit': '/certifications/ResearchStarterkit.jpg',
  'PembimbingLks': '/certifications/PembimbingLks.jpg',
  'GapuraDigital': '/certifications/GapuraDigital.jpg',
  
  //Sertifikat Guru" Muklit
  'AhmadNasikin': '/certifications/ahmadnasikin.jpg',
  'ArisPuji': '/certifications/arispuji.jpg',
  'DrsBambang': '/certifications/drsbambang.jpg',
  'RendiLusbiantoro': '/certifications/rendilusbiantoro.jpg',
  'SriChusnul': '/certifications/srichusnul.jpg',
  'MuhammadChusni': '/certifications/muhammadchusni.jpg',
  'RoselinaFebrianti': '/certifications/roselinafebrianti.jpg',
  'MuhammadArifin': '/certifications/muhamadarifin.jpg',
  'MokhamadHadi': '/certifications/mokhamadhadi.jpg',
  'LarasatiChairun': '/certifications/larasatichairun.jpg',
  'IfaChoirunnisa': '/certifications/ifachoirunnisa.jpg',
  'Firdausa': '/certifications/firdausa.jpg',
  'Biasdamiasa': '/certifications/biasdamiasa.jpg',
  'WhynaAgustin': '/certifications/whynaagustin.jpg',
  'SriChusnul1': '/certifications/srichusnul1.jpg',
  'RahmatDwi': '/certifications/rahmatdwi.jpg',
  'TitoTri': '/certifications/titotri.jpg',
};

export default function ProfilePopup({ profile, onClose }) {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Helper function to get the correct image path for a certification
  const getCertificationImage = (certName) => {
    if (!certName) return '/certifications/default-cert.webp';
    
    // Check if we have a direct mapping
    if (CERTIFICATION_IMAGES[certName]) {
      return CERTIFICATION_IMAGES[certName];
    }
    
    // Try to find a matching image by name (case insensitive)
    const lowerCert = certName.toLowerCase();
    const matchedCert = Object.entries(CERTIFICATION_IMAGES).find(([key]) => 
      key.toLowerCase() === lowerCert
    );
    
    return matchedCert ? matchedCert[1] : '/certifications/default-cert.webp';
  };

  // Fallback component for when images fail to load
  const ImageFallback = ({ alt, className }) => (
    <div className={`${styles.certificationImage} ${styles.fallbackImage} ${className || ''}`}>
      <span>{alt?.charAt(0).toUpperCase() || '?'}</span>
    </div>
  );

  // Track image loading errors
  const [imageErrors, setImageErrors] = useState({});

  // Handle image load errors
  const handleImageError = (cert) => {
    setImageErrors(prev => ({
      ...prev,
      [cert]: true
    }));
  };

  // Helper function to render certification badges
  const renderCertifications = (certifications) => {
    if (!certifications || certifications.length === 0) {
      return <p className={styles.noCertifications}>No certifications available</p>;
    }
    
    return (
      <div className={styles.certificationsContainer}>
        {certifications.map((cert, index) => {
          const imagePath = getCertificationImage(cert);
          const hasError = imageErrors[cert];
          
          // If we've encountered an error, show the fallback
          if (hasError) {
            return (
              <div key={index} className={styles.certificationBadge}>
                <ImageFallback alt={cert} className={styles.certificationImage} />
                <span className={styles.certificationName}>{cert}</span>
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
                  onError={() => handleImageError(cert)}
                />
              </div>
              <span className={styles.certificationName}>
                {cert.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
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

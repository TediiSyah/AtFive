'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FooterForm from '@/components/FooterForm';
import ProfilePopup from '@/components/ProfilePopup';
import styles from './tentangPage.module.css';
import Link from 'next/link';

export default function TentangKami() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Staff data
  const staffProfiles = [
    {
      id: 1,
      name: 'Rahmad Dwi Jatmiko S.Kom.',
      role: 'Kepala Sekolah',
      department: 'Pendidikan',
      image: '/guru/PRahmad.png',
      experience: '15+',
      bio: 'Memimpin SMK Telkom Malang dengan visi untuk mencetak lulusan yang berkompeten di bidang teknologi informasi dan komunikasi.',
      certifications: ['CCNA', 'MCSA', 'Microsoft']
    },
    // Add other staff profiles here...
  ];

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const renderProfileCard = (profile, index) => {
    return (
      <div 
        key={profile.id || index}
        className={styles.profileCard}
        onClick={() => handleProfileClick(profile)}
      >
        <div className={styles.imageContainer}>
          <Image 
            src={profile.image} 
            alt={profile.name} 
            width={175} 
            height={175} 
            className={styles.profileImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{profile.name}</h3>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.department}>{profile.department}</p>
          <div className={styles.experienceBadge}>
            <span className={styles.experienceYears}>{profile.experience || '5+'}</span>
            <span>Tahun Pengalaman</span>
          </div>
        </div>
      </div>
    );
  };

  // Close popup when clicking outside or pressing Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedProfile && !e.target.closest(`.${styles.profilePopup}`)) {
        setSelectedProfile(null);
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedProfile(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedProfile]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Tentang Kami</h1>
          <p className={styles.headerSubtitle}>Kenali lebih dekat tim kami yang berdedikasi</p>
        </header>
        
        <div className={styles.profileGrid}>
          {staffProfiles.map((profile, index) => renderProfileCard(profile, index))}
        </div>
      </div>
      
      <FooterForm />
      
      {selectedProfile && (
        <ProfilePopup 
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

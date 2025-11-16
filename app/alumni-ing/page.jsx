'use client';
import React, { useState, useEffect } from 'react';
import styles from './alumni.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FooterIng from '@/components/FooterIng';
import FooterQuote from './components/FooterQuote';
import IndonesiaMap from './components/IndonesiaMap';
import StatisticSection from './components/StatisticSection';
import PesebaranAlumni from './components/PesebaranAlumni';
import TestimoniMoklet from './components/TestimoniMoklet';
import TipsCeritaSeru from './components/TipsCeritaSeru';
import HeroSection from './components/HeroSection';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import Chatbot from '@/components/Chatbot';


export default function Prestasi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isTentangKamiHovered, setIsTentangKamiHovered] = useState(false);
     // State baru untuk mengontrol tampilan dropdown di mobile
     const [isTentangKamiOpen, setIsTentangKamiOpen] = useState(false);
   
     const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;
   
     const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
       // Tutup dropdown Tentang Kami saat menu utama ditutup
       if (isMenuOpen) setIsTentangKamiOpen(false);
     };
   
     const closeMenu = () => {
       setIsMenuOpen(false);
       setIsTentangKamiOpen(false);
     };
   
     // Toggle dropdown function (untuk language switcher)
     const toggleDropdown = (e) => {
       e.stopPropagation();
       const dropdown = e.currentTarget.closest(`.${styles.langDropdown}`);
       if (dropdown) {
         dropdown.classList.toggle(styles.active);
       }
     };
   
     // Close dropdown when clicking outside
     useEffect(() => {
       const handleClickOutside = (event) => {
         if (!event.target.closest(`.${styles.langDropdown}`)) {
           document.querySelectorAll(`.${styles.langDropdown}`).forEach((dropdown) => {
             dropdown.classList.remove(styles.active);
           });
         }
       };
   
       document.addEventListener('click', handleClickOutside);
       return () => {
         document.removeEventListener('click', handleClickOutside);
       };
     }, []);
   
     // Handler Hover (Hanya aktif di desktop/tablet)
     const handleTentangKamiMouseEnter = () => {
       if (!isMobile()) {
         setIsTentangKamiHovered(true);
       }
     };
   
     const handleTentangKamiMouseLeave = () => {
       if (!isMobile()) {
         setIsTentangKamiHovered(false);
       }
     };
   
     // Handler Click untuk Mobile
     const handleTentangKamiClick = (e) => {
       // Jika berada di mode mobile
       if (isMobile()) {
         // Mencegah Link navigasi jika submenu ingin dibuka
         e.preventDefault();
         setIsTentangKamiOpen(!isTentangKamiOpen);
       }
       // Jika di desktop/tablet, biarkan Link berjalan normal
     };
   
     return (
       <div className={styles.body}>
         <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/image/telkomPutih.png"
                alt="Logo SMK Telkom Malang"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ""}`}
            ></div>
          </div>

          {/* Menu Utama */}
          <ul
            className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}
          >
            <li>
              <Link href="/home-ing">Beranda</Link>
            </li>
            {/* Tentang Kami dengan dropdown */}
            <li
              className={styles.dropdownWrapper}
              onMouseEnter={handleTentangKamiMouseEnter}
              onMouseLeave={handleTentangKamiMouseLeave}
            >
          
                <Link href="">About Us</Link>
              

              {/* Dropdown hanya muncul di tablet & desktop */}
              {isTentangKamiHovered && !isMobile() && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href="/tentangKami-ing">About Us</Link>
                  </li>
                  <li>
                    <Link href="/akademik-ing">Academic</Link>
                  </li>
                  <li><b>
                    <Link href="/alumni-ing">Alumni</Link>
                  </b></li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/prestasi-ing">Achievements</Link>
            </li>

            <li>
              <Link href="/galeri-ing">Gallery</Link>
            </li>
            <li>
              <Link href="/ppdb-ing">PPDB</Link>
            </li>

            {/* Translate untuk MOBILE (masuk ke hamburger) */}
            {/* Translate untuk MOBILE */}
            <div className={styles.mobileLang}>
              <div className={styles.langDropdown}>
                <div className={styles.langBtn} onClick={toggleDropdown}>
                  <Image
                    src="/image/unitedStates.png"
                    alt="EN"
                    width={20}
                    height={15}
                  />
                  <span>EN</span>
                  <span className={styles.arrow}>▼</span>
                </div>
                <div className={styles.langOptions}>
                  <Link href="/alumni">
                    <Image
                      src="/image/indonesia.png"
                      alt="ID"
                      width={20}
                      height={15}
                    />{" "}
                    IN
                  </Link>
                  <Link href="/alumni-ing">
                    <Image
                      src="/image/unitedStates.png"
                      alt="EN"
                      width={20}
                      height={15}
                    />{" "}
                    EN
                  </Link>
                </div>
              </div>
            </div>
          </ul>
          {/* Translate untuk DESKTOP & TABLET */}
          <div className={`${styles.langDropdown} ${styles.desktopLang}`}>
            <div className={styles.langBtn} onClick={toggleDropdown}>
              <Image
                src="/image/unitedStates.png"
                alt="EN"
                width={20}
                height={15}
              />
              <span>EN</span>
              <span className={styles.arrow}>▼</span>
            </div>
            <div className={styles.langOptions}>
              <Link href="/alumni">
                <Image
                  src="/image/indonesia.png"
                  alt="ID"
                  width={20}
                  height={15}
                />{" "}
                IN
              </Link>
              <Link href="/alumni-ing">
                <Image
                  src="/image/unitedStates.png"
                  alt="EN"
                  width={20}
                  height={15}
                />{" "}
                EN
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay saat menu aktif */}
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        ></div>
      )}

      {/* Hero */}
      <div className={styles['hero-real']}>
        <h1 className={styles.heading1}>Alumni</h1>
        <h2 className={styles.heading2}>Home / Alumni</h2>
      </div>
      
      <FooterQuote />
      <IndonesiaMap />
      <StatisticSection />
      <PesebaranAlumni />
      <TestimoniMoklet />
      <TipsCeritaSeru />
      <HeroSection />
      
      <AccessibilityMenu />
      <Chatbot />
      <FooterIng />
    </div>
  );
}
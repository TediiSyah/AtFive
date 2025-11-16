'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './berita.module.css'
import FooterIng from '@/components/FooterIng';
import NewsDetail from './components/NewsDetail';
import NewsSection from './components/NewsSection';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import Chatbot from '@/components/Chatbot';

const newsData = [
  {
    id: 1,
    title: "Tim Jagoan Mamah",
    subtitle: "Juara 1 Lomba Menulis Puisi",
    date: "13 Januari 2024",
    image: "/image/news1.png"
  },
  {
    id: 2,
    title: "Nama Siswa 1",
    subtitle: "Juara 2 Lomba Cerpen",
    date: "15 Januari 2024",
    image: "/image/news5.png"
  },
  {
    id: 3,
    title: "Nama Siswa 2",
    subtitle: "Juara Harapan Debat",
    date: "18 Januari 2024",
    image: "/image/news6.png"
  },
  {
    id: 4,
    title: "Nama Siswa 3",
    subtitle: "Juara Lomba Poster Digital",
    date: "20 Januari 2024",
    image: "/image/news5.png"
  },
  {
    id: 5,
    title: "Nama Siswa 4",
    subtitle: "Juara 1 Pidato Bahasa Inggris",
    date: "25 Januari 2024",
    image: "/image/news6.png"
  },
  {
    id: 6,
    title: "Nama Siswa 5",
    subtitle: "Juara 1 Olimpiade Matematika",
    date: "28 Januari 2024",
    image: "/image/news4.png"
  }
]


export default function BeritaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const perPage = 3;
  const totalPages = Math.ceil(newsData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentItems = newsData.slice(startIndex, startIndex + perPage);

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isTentangKamiHovered, setIsTentangKamiHovered] = useState(false);

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;

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

  // Toggle dropdown function
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
                  <li>
                    <Link href="/alumni-ing">Alumni</Link>
                  </li>
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
                  <Link href="/berita">
                    <Image
                      src="/image/indonesia.png"
                      alt="ID"
                      width={20}
                      height={15}
                    />{" "}
                    IN
                  </Link>
                  <Link href="/berita-ing">
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
              <Link href="/berita">
                <Image
                  src="/image/indonesia.png"
                  alt="ID"
                  width={20}
                  height={15}
                />{" "}
                IN
              </Link>
              <Link href="/berita-ing">
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

      <main>
        {/* Overlay saat menu aktif */}
            {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
     {/* Hero */}
     <div className={styles['hero-real']}>
        <h1 className={styles.heading1}>News and Blog</h1>
        <h2 className={styles.heading2}>Home / News and Blog</h2>
      </div>

      {/* News Detail */}
      <NewsDetail />

      {/* News Section */}
      <NewsSection />
      <AccessibilityMenu />
      <Chatbot />
      <FooterIng />
      </main>
    </div>
  )
}
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'PPDB', path: '/ppdb' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoPlaceholder}>
            <span>SMK Telkom Malang</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className={styles.rightIcons}>
          <button className={styles.searchIcon} aria-label="Search">
            🔍
          </button>
          <div className={styles.languageSelector}>
            <div className={styles.flagContainer}>
              <div className={styles.flag}>
                <div className={styles.flagTop}></div>
                <div className={styles.flagBottom}></div>
              </div>
              <span>ID</span>
              <span className={styles.chevron}>▼</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

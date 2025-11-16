"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BookOpen } from "lucide-react";
import styles from "./homePage.module.css";
import IndonesiaMap from "./components/IndonesiaMap";
import Counter from "./components/Counter";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import CalendarSection from "./components/CalendarSection";
import TestimonialSection from "./components/TestimonialSection";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const courses = [
    {
      title: "Web Dev",
      desc: "Siswa nantinya akan belajar dan dituntut untuk bisa membuat aplikasi berbasis web dengan teknologi pemrograman sesuai standar industri. Back-end menggunakan Node JS/Laravel, dan Front-end menggunakan React JS/Vue JS.",
    },
    {
      title: "Mobile Dev",
      desc: "Siswa akan mempelajari pengembangan aplikasi mobile menggunakan teknologi terkini seperti React Native atau Flutter untuk menciptakan aplikasi yang berjalan di berbagai platform.",
    },
  ];

  // State for calendar
  const [monthYear, setMonthYear] = useState("");
  const [calendarDays, setCalendarDays] = useState([]);

  // Agenda events
  const agendaEvents = [
    {
      title: "Sosialisasi MYD",
      date: "1 Maret 2022",
      datetime: "2022-03-01",
    },
    {
      title: "Pelaksanaan MYD",
      date: "15 Maret 2022",
      datetime: "2022-03-15",
    },
    {
      title: "Kick-OF MYD",
      date: "20 Maret 2022",
      datetime: "2022-03-20",
    },
  ];

  // Refs for intersection observers
  const principalSectionRef = useRef(null);
  const counterSectionRef = useRef(null);

  // Set up intersection observer for counter section
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles["counter-hidden"]);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 5% of the counter section is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before the section is fully in view
      }
    );

    const currentCounterRef = counterSectionRef.current;
    if (currentCounterRef) {
      counterObserver.observe(currentCounterRef);
    }

    return () => {
      if (currentCounterRef) {
        counterObserver.unobserve(currentCounterRef);
      }
    };
  }, []);

  // Set up intersection observer for principal section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["animate-slide-in"]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Trigger as soon as the element starts entering the viewport
        rootMargin: "0px", // No margin, trigger immediately on entry
      }
    );

    const currentRef = principalSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Calendar logic
  useEffect(() => {
    const date = new Date();
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    setMonthYear(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);

    // Generate calendar days
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const days = [];
    let week = new Array(7).fill(null);

    // Add padding for days before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      week[i] = { day: null, isOutsideMonth: true };
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayIndex = (firstDayOfMonth + day - 1) % 7;
      week[dayIndex] = { day, isOutsideMonth: false };
      if (dayIndex === 6 || day === daysInMonth) {
        days.push([...week]);
        week = new Array(7).fill(null);
      }
    }

    // Add padding for remaining days
    if (week.some((day) => day !== null)) {
      days.push([...week]);
    }

    setCalendarDays(days);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTentangKamiHovered, setIsTentangKamiHovered] = useState(false);
  // State baru untuk mengontrol tampilan dropdown di mobile
  const [isTentangKamiOpen, setIsTentangKamiOpen] = useState(false);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Tutup dropdown Tentang Kami saat menu utama ditutup
    if (isMenuOpen) setIsTentangKamiOpen(false);
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
        document
          .querySelectorAll(`.${styles.langDropdown}`)
          .forEach((dropdown) => {
            dropdown.classList.remove(styles.active);
          });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.fadeSection}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
            <li><b><Link href="/">Beranda</Link></b>
              
            </li>
            {/* Tentang Kami dengan dropdown */}
            <li
              className={styles.dropdownWrapper}
              onMouseEnter={handleTentangKamiMouseEnter}
              onMouseLeave={handleTentangKamiMouseLeave}
              
            >
              <Link href="">Tentang Kami</Link>
              
              {/* Dropdown hanya muncul di tablet & desktop */}
              {isTentangKamiHovered && !isMobile() && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href="/tentangKami">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/akademik">Akademik</Link>
                  </li>
                  <li>
                    <Link href="/alumni">Alumni</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/prestasi">Prestasi</Link>
            </li>

            <li>
              <Link href="/galeri">Galeri</Link>
            </li>
            <li>
              <Link href="/ppdb">PPDB</Link>
            </li>

            {/* Translate untuk MOBILE (masuk ke hamburger) */}
            {/* Translate untuk MOBILE */}
            <div className={styles.mobileLang}>
              <div className={styles.langDropdown}>
                <div className={styles.langBtn} onClick={toggleDropdown}>
                  <Image
                    src="/image/indonesia.png"
                    alt="IN"
                    width={20}
                    height={15}
                  />
                  <span>IN</span>
                  <span className={styles.arrow}>▼</span>
                </div>
                <div className={styles.langOptions}>
                  <Link href="/">
                    <Image
                      src="/image/indonesia.png"
                      alt="ID"
                      width={20}
                      height={15}
                    />{" "}
                    IN
                  </Link>
                  <Link href="/home-ing">
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
                src="/image/indonesia.png"
                alt="IN"
                width={20}
                height={15}
              />
              <span>IN</span>
              <span className={styles.arrow}>▼</span>
            </div>
            <div className={styles.langOptions}>
              <Link href="/">
                <Image
                  src="/image/indonesia.png"
                  alt="IN"
                  width={20}
                  height={15}
                />{" "}
                IN
              </Link>
              <Link href="/home-ing">
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
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}

      {/* Hero */}
      <div className={styles["hero-real"]}>
        <h1 className={styles.heading1}>The Real</h1>
        <h1 className={styles.heading1}>Informatics School</h1>
        <Link href="/ppdb" className={styles.btn}>
          Gabung Bersama Kami →
        </Link>
      </div>

      <div className={styles["section-header"]}>
        <h1 className={styles.heading1}>
          Bangun Masa Depan <span className={styles.span}> Digital</span>{" "}
          Bersama{" "}
        </h1>
        <h1 className={styles.heading1}>
          <span className={styles.span}>SMK Telkom Malang</span>
        </h1>
        <h3>
          Kami hadir untuk membimbing kamu menjadi talenta unggul di dunia
          teknologi. Dengan pengajar profesional, lingkungan belajar yang
          inspiratif, dan fasilitas modern.
        </h3>
        <div className={styles.cards}>
          {[
            {
              title: "Pengajar Profesional",
              desc: " Belajar langsung dari para ahli berpengalaman di industri teknologi, siap membentukmu menjadi profesional sejati.",
              img: "/image/Pengajar1.png",
            },
            {
              title: "Lingkungan yang Sehat",
              desc: " Suasana belajar yang nyaman, positif, dan saling mendukung agar kamu bisa berkembang maksimal.",
              img: "/image/Lingkungan1.png",
            },
            {
              title: "Fasilitas Modern",
              desc: " Kelas dan laboratorium berteknologi tinggi yang siap menunjang kreativitas dan produktivitasmu setiap hari.",
              img: "/image/Fasilitas1.png",
            },
          ].map((item, idx) => (
            <div key={`card-${idx}`} className={styles.card}>
              {" "}
              {/* Key unik opsional */}
              <Image
                src={item.img}
                width={120}
                height={120}
                alt={item.title}
                className="mx-auto" // Tetap center horizontal
              />
              <h3 className="text-xl font-bold mt-2.5 text-primary-text">
                {item.title}
              </h3>
              <p className={styles.paragraph}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sambutan Kepala Sekolah */}
      <div className={styles.highlight} id="principal-section">
        <div className={styles["highlight-text"]}>
          <h3 className={styles["highlight h3"]}>Pranatacara Kepala sekolah</h3>
          <p className={styles.paragraph}>
            Selamat datang di website SMK Telkom Malang yang saya tujukan untuk
            seluruh unsur pimpinan, guru, karyawan dan siswa serta khalayak umum
            guna dapat mengakses seluruh informasi tentang sekolah kami.
            Tentunya dalam penyajian informasi masih banyak kekurangan, oleh
            karena itu kepada seluruh civitas akademika dan masyarakat umum
            dapat memberikan saran dan kritik demi kemajuan lebih lanjut.
          </p>
          <p className={`${styles.paragraph} font-bold`}>
            Rahmat Dwi Djadmiko, S.Kom
          </p>
        </div>
        <Image
          src="/image/headCircle.png"
          width={550}
          height={350}
          alt="Principal"
          className={styles["highlight-img"]}
        />
      </div>

      {/* Indonesia Map Section */}
      <IndonesiaMap />

      {/* Counter Section */}
      <section
        ref={counterSectionRef}
        className={`${styles.counterContainer} ${styles["counter-hidden"]}`}
      >
        <div>
          <Counter target={150} label=" Siswa RPL" />
          <Counter target={120} label=" Siswa TKJ" />
          <Counter target={90} label=" Siswa PG" />
        </div>
      </section>

      {/* Program Keahlian Cards */}
      <section className={styles.programSection}>
        <div className={styles.programContainer}>
          <h2 className={styles.sectionTitle}>
            Tiga <span>Jurusan Unggulan,</span> Satu Tujuan <br />
            Masa Depan <span>Digital Gemilang.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Pilih passion-mu dan kembangkan potensi terbaik di bidang IT bersama
            program unggulan SMK Telkom Malang.
          </p>
          <div className={styles.programGrid}>
            {[
              {
                icon: "/image/Rekayasa1.png",
                title: "Rekayasa Perangkat Lunak",
                desc: " Kuasai dunia pemrograman, desain sistem, dan pengembangan software. Jadilah developer yang siap bersaing di industri global!",
                link: "#rpl",
              },
              {
                icon: "/image/Teknik1.png",
                title: "Teknik Komputer Jaringan",
                desc: "Pelajari tentang jaringan komputer, keamanan informasi, dan infrastruktur IT. Menguasai teknologi jaringan terbaru!",
                link: "#tkj",
              },
              {
                icon: "/image/Pengembangan1.png",
                title: "Pengembangan Game",
                desc: " Ubah ide dan imajinasimu menjadi game seru! Pelajari desain, coding, dan grafis untuk industri game kreatif.",
                link: "#game",
              },
            ].map((item, i) => (
              <div key={i} className={styles.programCard}>
                <div className={styles.programIcon}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className={styles.programIconImg}
                  />
                </div>
                <h3 className={styles.programTitle}>{item.title}</h3>
                <p className={styles.programDesc}>{item.desc}</p>
                <div className={styles.learnMoreWrapper}>
                  <a href={item.link} className={styles.learnMore}>
                    <span>Lebih Detail</span>
                    <svg
                      className={styles.arrowIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekayasa Perangkat Lunak Section */}
      <section
        id="rpl"
        className={`mt-32 mb-32 ${styles.tentangKamiSection} ${styles.fadeSection}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div
              className="relative z-10 p-8 transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Rekayasa Perangkat Lunak
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Pelajari bagaimana software hebat diciptakan — dari konsep
                hingga aplikasi nyata berbasis web dan mobile.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Web Dev",
                    desc: "Bangun website modern dengan teknologi industri seperti React JS, Node.js, dan Laravel.",
                    icon: "</>",
                  },
                  {
                    title: "Mobile Dev",
                    desc: " Ciptakan aplikasi mobile interaktif dengan teknologi mutakhir dan desain elegan.",
                    icon: "📱",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-2xl shadow-sm border flex gap-4 items-start hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="bg-red-100 w-12 h-12 rounded-md flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              style={{
                transitionDelay: "200ms",
              }}
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <Image
                src="/image/rpl10.jpg"
                alt="Siswa belajar di kelas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TKJ Section */}
      <section
        id="tkj"
        className={`mt-32 mb-32 ${styles.tentangKamiSection} ${styles.fadeSection}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              style={{
                transitionDelay: "200ms",
              }}
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <Image
                src="/image/tkj10.jpg"
                alt="Siswa TKJ sedang belajar jaringan"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
            </div>

            {/* Right Content */}
            <div
              className="relative z-10 p-8 transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Teknik Komputer dan Jaringan
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Dalami dunia jaringan, dari instalasi hingga keamanan sistem,
                dan jadilah pakar infrastruktur digital.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Jaringan komputer",
                    desc: " Pelajari manajemen, konfigurasi, hingga keamanan jaringan profesional.",
                    icon: "📡",
                  },
                  {
                    title: "Perakitan, instalasi dan troubleshooting",
                    desc: "Kuasai perakitan komputer dan kemampuan memperbaiki perangkat dengan cepat dan tepat.",
                    icon: "🔧",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-sm border flex gap-4 items-start hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="bg-red-100 w-12 h-12 rounded-md flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Development Section */}
      <section
        id="game"
        className={`mt-32 mb-32 ${styles.tentangKamiSection} ${styles.fadeSection}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div
              className="relative z-10 p-8 transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Pengembangan Game
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Gabungkan kreativitas dan teknologi untuk menciptakan pengalaman
                bermain yang memukau.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Desain Game",
                    desc: " Rancang alur, karakter, dan dunia game yang seru dan imersif.",
                    icon: "🎮",
                  },
                  {
                    title: "Pengembangan Game",
                    desc: "Gunakan engine populer seperti Unity dan Unreal Engine untuk membangun game profesional.",
                    icon: "👾",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-2xl shadow-sm border flex gap-4 items-start hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="bg-red-100 w-12 h-12 rounded-md flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-out opacity-0 translate-y-10"
              style={{
                transitionDelay: "200ms",
              }}
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-y-10");
                      el.classList.add("opacity-100", "translate-y-0");
                    }
                  },
                  {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                  }
                );
                observer.observe(el);
              }}
            >
              <Image
                src="/image/pg10.jpg"
                alt="Pengembangan game"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <HeroSection />

      {/* Section Kerja */}
      <div className={styles["section-kerja"]}>
        <h1 className={styles["section-kerja h1"]}>
          {" "}
          Lulusan Siap Kerja, Siap Berkarya!
        </h1>
        <h5 className={styles["section-kerja h5"]}>
          {" "}
          Setiap jurusan di SMK Telkom Malang dirancang agar kamu punya keahlian
          yang dibutuhkan industri. Kami tidak hanya mencetak siswa pintar —
          kami membentuk profesional masa depan.
        </h5>
        <div className={styles.cards}>
          {[
            {
              img: "/image/Frame_rpl.png",
              title: "Lulusan RPL",
              desc: " Siap bekerja sebagai web developer, mobile developer, atau software engineer di berbagai perusahaan teknologi.",
            },
            {
              img: "/image/Frame_tkj.png",
              title: "Lulusan TKJ",
              desc: " Dikenal dapat diandalkan sebagai teknisi jaringan, teknisi jaringan, atau administrator sistem",
            },
            {
              img: "/image/Frame_pg.png",
              title: "Lulusan PG",
              desc: "Menjadi kreator game, desainer interaktif, hingga developer di industri kreatif global.",
            },
          ].map((item, idx) => (
            <div key={idx} className={styles.card}>
              <Image
                src={item.img}
                width={120}
                height={120}
                alt={item.title}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-2.5 text-primary-text">
                {item.title}
              </h3>
              <p className={styles.paragraph}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CalendarSection />
      </div>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Kenal Lebih Dekat Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 mt-16">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Bagian Kiri */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                    Get to know us!
                  </h1>
                  <p className="text-gray-700 mb-6">
                    Discover the dedication to learning, achievements for pride,
                    and a school life that is enjoyable and colorful behind the walls of SMK
                    Telkom Malang. Everything starts here — from a school that not only teaches,
                    <br></br>but also inspiring.
      
                  </p>
                  <a
                    href="/tentangKami-ing"
                    className="inline-block bg-red-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-900 transition"
                  >
                    Get to know us →
                  </a>
                </div>
      
                {/* Bagian Kanan */}
                <a
                  href="https://youtu.be/9xofia597HI?si=lfKA2nw62CVfYcPo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-xl overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <Image
                      src="/image/ytImage.png"
                      alt="Video Moklet"
                      width={640}
                      height={360}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
      
                  {/* Tombol Play di tengah */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transition group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-red-800"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
      
                  {/* Durasi di pojok kanan bawah */}
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-0.5 rounded">
                     
                  </span>
                </a>
              </div>
            </section>

      {/* Join Us Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white my-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
            Bergabunglah dengan Menjadi Bagian Dari{" "}
            <span className="text-[#7B0000] font-bold">SMK Telkom Malang</span>{" "}
            Mulai Perjalanan Anda Menuju {" "}
            <span className="text-[#7B0000] font-bold">Masa Depan</span> 
          </h1>

          <Link
           href="/tentangKami"
            className="mt-6 inline-block text-gray-600 hover:text-[#7B0000] transition font-medium text-lg"
          >
           <i>Kenali kami →</i> 
          </Link>
        </div>
      </section>

      <AccessibilityMenu />
      <Chatbot />
      <Footer />
    </div>
  );
}

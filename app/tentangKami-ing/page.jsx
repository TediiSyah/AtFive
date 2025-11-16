"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FooterIng from '@/components/FooterIng';
import ProfilePopup from "@/components/ProfilePopup";
import styles from "./tentangPage.module.css";
import Link from "next/link";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Chatbot from "@/components/Chatbot";
import Timeline from "./Timeline";

// Certification Card Component
const CertificationCard = ({ cert }) => {
  // Fallback to default image if loading fails
  const [imgSrc, setImgSrc] = useState(cert.image || `/certifications/${cert.name.replace(/\s+/g, '')}.webp`);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleImageError = () => {
    if (!triedFallback) {
      // First try the PNG version
      const baseName = cert.name.replace(/\s+/g, '');
      setImgSrc(`/certifications/${baseName}.png`);
      setTriedFallback(true);
    } else {
      // If PNG also fails, use default image
      setImgSrc("/certifications/default-cert.webp");
    }
  };

  return (
    <div
      className="cert-card bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[120px] border border-gray-100 group-hover:border-red-100"
      title={cert.name}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
        <Image
          src={imgSrc}
          alt={cert.name}
          fill
          className="object-contain p-1"
          onError={handleImageError}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
          loading="lazy"
          unoptimized={imgSrc.endsWith("default-cert.webp")}
        />
      </div>
      <span className="text-center text-xs sm:text-sm font-medium text-gray-700 px-1 line-clamp-2">
        {cert.name}
      </span>
    </div>
  );
};

export default function TentangKami() {
  const timelineRef = useRef(null);
  const timelineEvents = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Staff data

  const staffProfiles = [
    {
      id: 1,
      name: "Rahmad Dwi Jatmiko S.Kom.",
      role: "Headmaster",
      department: "Management",
      image: "/guru/PRahmad.png",
      experience: "15+",
      bio: "Leading SMK Telkom Malang with a vision to produce competent graduates in the field of information and communication technology. With over 15 years of experience in technology education, he has developed various flagship programs that encourage innovation and career development for students in the digital industry.",
       certifications: ["RahmatDwi"],
    },
    {
      id: 2,
      name: "Muhammad Arifin, M.Pd.",
      role: "Deputy Headmaster",
      department: "Management",
      image: "/guru/PArifin.png",
      experience: "10+",
      bio: "Expert in competency-based curriculum development with a focus on the needs of the current digital industry. Specialized in designing learning programs that integrate cutting-edge technology and foster character development in students with noble morals.",
      certifications: ["MuhammadArifin"],
    },
    {
      id: 3,
      name: "Laila Agustin, S.T.",
      role: "Financial Head",
      department: "Management",
      image: "/guru/BLaila.png",
      experience: "8+",
      bio: "An education financial management specialist with over 8 years of experience. Skilled in budget planning, BOS fund management, and transparent financial reporting in accordance with public sector financial accounting standards.",
      certifications: ["Google", "MCSA"],
    },
    {
      id: 4,
      name: "Sri Chusnul Haniyah, S.Pd.",
      role: "Human Capital Head",
      department: "Management",
      image: "/guru/BChusnul.png",
      experience: "9+",
      bio: "An expert in educational human resource development with a focus on improving the competency of teachers and education personnel. Expertise in school logistics management and developing a productive work culture in educational settings.",
      certifications: ["SriChusnul", "SriChusnul1"],
    },
    {
      id: 5,
      name: "Ifa Choirunnisa, S.ST., M.Pd.",
      role: "Curriculum Head",
      department: "Management",
      image: "/guru/BIfa.png",
      experience: "7+",
      bio: "A technology-based curriculum development expert specializing in computer networks. Actively involved in designing learning programs that respond to Industry 4.0 developments and the needs of the workplace.",
      certifications: ["IfaChoirunnisa"],
    },
    {
      id: 6,
      name: "Bambang Siwantoro",
      role: "Student Affairs Head",
      department: "Management",
      image: "/guru/PBambang.png",
      experience: "14+",
      bio: "An educational practitioner with a project-based learning approach and industry experience. Focusing on developing students' technical skills through hands-on practice and real-world case studies.",
      certifications: ["DrsBambang"],
    },
    {
      id: 7,
      name: "Aris Puji Santoso, S.Kom.",
      role: "Industry Relations Head",
      department: "Management",
      image: "/guru/PAris.png",
      experience: "9+",
      bio: "An expert in Information and Communication Technology-based curriculum development. Plays a key role in building strategic partnerships with industry to enhance the curriculum's relevance to the needs of the workplace.",
       certifications: ["ArisPuji"],
    },
    {
      id: 8,
      name: "M. Hadi Wijaya, S.kom., M.T.",
      role: "IT Laboratory Head",
      department: "Management",
      image: "/guru/PHadi.png",
      experience: "13+",
      bio: "An expert in educational infrastructure management with a focus on developing industry-standard computer laboratories. Experienced in planning and managing information technology infrastructure in educational settings.",
      certifications: ["MokhamadHadi"],
    },
    {
      id: 9,
      name: "Rendi Lusbinantoro, M.Pd",
      role: "Admissions Head",
      department: "Management",
      image: "/guru/PRendi.png",
      experience: "9+",
      bio: "Specialist in curriculum development and digital learning systems. Expertise in designing interactive learning content and technology-based assessment systems to improve the quality of education.",
     certifications: ["RendiLusbiantoro"],
    },
    {
      id: 10,
      name: "Ahmad Nasikin, M.Pd.",
      role: "Counseling Head",
      department: "Management",
      image: "/guru/PNasikin.png",
      experience: "10+",
      bio: "An educational counselor dedicated to developing students' character and potential. Experienced in providing career guidance and individual counseling to help students achieve optimal academic and non-academic achievement.",
      certifications: ["AhmadNasikin"],
    },
    {
      id: 11,
      name: "Qodri Akbar Wajdi, S.Kom.",
      role: "Production Unit Head",
      department: "Management",
      image: "/guru/PQodri.png",
      experience: "11+",
      bio: "Leading the development of Software Engineering expertise competencies.",
      certifications: ["AWS", "CCNA"],
    },
    {
      id: 12,
      name: "Whyna Agustin, S.Pd.",
      role: "IT Head",
      department: "Management",
      image: "/guru/BWhyna.png",
      experience: "11+",
      bio: "IT expert with a focus on developing network infrastructure and school information systems. Experienced in designing and implementing technology solutions to support digital learning processes and efficient school administration.",
      certifications: ["WhynaAgustin","UXResearch", "DesignsPrototypes","FoundationsUX",],
    },
    {
      id: 13,
      name: "Larasati Chairun Nisa, S.Pd.",
      role: "Learning and Library Head",
      department: "Management",
      image: "/guru/BLaras.png",
      experience: "11+",
      bio: "Professional librarian specializing in digital library development. Actively involved in creating a digital literacy ecosystem and fostering a reading culture among students through innovative programs.",
     certifications: ["LarasatiChairun"],
    },
    {
      id: 14,
      name: "M. Chusni Agus, M.Pd., Gr.",
      role: "Extracurricular Head",
      department: "Management",
      image: "/guru/PChusni.png",
      experience: "11+",
      bio: "Expert in developing student talents and interests through extracurricular programs. Experienced in identifying and developing student potential in various fields, from science and technology to the arts and sports.",
       certifications: ["MuhammadChusni"],
    },
    {
      id: 15,
      name: "Kinanti Ratnaning, W., M.Pd.",
      role: "PPDB Head",
      department: "PPDB",
      image: "/guru/BKinan.png",
      experience: "11+",
      bio: "Expert in developing student talents and interests through extracurricular programs. Experienced in identifying and developing student potential in various fields, from science and technology to the arts and sports.",
      certifications: ["AWS", "CCNA"],
    },
    {
      id: 16,
      name: "Roselina Febrianti, S.St., Gr.",
      role: "Laboratory Head",
      department: "Laboratorium",
      image: "/guru/BRosel.png",
      experience: "11+",
      bio: "Laboratory management expert with a focus on developing adequate, industry-standard laboratory facilities. Involved in ensuring the completeness and readiness of laboratory equipment to support student practical learning.",
      certifications: ["RoselinaFebrianti"],
    },
    {
      id: 17,
      name: "Firdausa, S.Pd., Gr.",
      role: "RPL Head",
      department: "RPL",
      image: "/guru/PFirdausa.png",
      experience: "11+",
      bio: "Expert in Software Engineering (RPL) curriculum development and learning. Experienced in guiding students to master various programming languages ​​and application development, as well as preparing them for national and international competitions in the field of RPL.",
      certifications: ["Firdausa","DataAnalyst", "SoftwareDeveloper", "ActificialIntelligence", "Swift"],
    },
    {
      id: 18,
      name: "Tito Tri Prabowo, M.Pd.",
      role: "TKJ Head",
      department: "TKJ",
      image: "/guru/PTito.png",
      experience: "11+",
      bio: "A computer networking expert specializing in Computer and Network Engineering (TKJ) curriculum development. Experienced in designing and implementing reliable network infrastructure and guiding students to achieve international certification in computer networking.",
    certifications: ["TitoTri"],
    },
    {
      id: 19,
      name: "Bias Damiasa, S.Pd.",
      role: "Game Development Head",
      department: "Game Development",
      image: "/guru/BBias.png",
      experience: "11+",
      bio: "A game development practitioner with experience in the digital creative industry. Focused on developing a game development curriculum that encompasses aspects of game design, programming, and business. Guiding students to create innovative and competitive games.",
     certifications: ["BiasDamiasa"],
    },
    {
      id: 20,
      name: "Yaniko Dimas Yogo Prasetyo, S.Kom",
      role: "Secretary to the Head of the TKJ Procurement Agency",
      department: "TKJ",
      image: "/guru/PYaniko.png",
      experience: "11+",
      bio: "A computer networking expert with a focus on developing TKJ practicals and curricula. Experienced in integrating the latest technologies into computer networking and digital systems learning. Actively involved in developing practical modules relevant to industry needs.",
       certifications: ["Dicoding", "RevoU"],
    },            
    {
      id: 21,
      name: "Nico Rachmacandrana",
      role: "IT PIC Network",
      department: "Infrastructure",
      image: "/guru/PNico.png",
      experience: "11+",
      bio: "Specialist in educational infrastructure management with a focus on school asset and facility management. Experienced in planning, procurement, maintenance, and optimizing the use of educational infrastructure to support effective and efficient learning processes.",
      certifications: ["DataSet", "ResearchStarterkit", "PembimbingLks", "GapuraDigital"],
    },            
  ];

  const handleProfileClick = (profile, e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setSelectedProfile(profile);
  };

  const renderProfileCard = (profile, index) => {
    const profileData =
      staffProfiles.find((p) => p.id === profile.id) || profile;
    return (
      <div
        key={profile.id || index}
        className={`${styles.card} ${
          selectedProfile?.id === profile.id ? styles.cardActive : ""
        }`}
        onClick={(e) => handleProfileClick(profileData, e)}
        id={`profile-${profile.id || index}`}
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
        </div>
      </div>
    );
  };

  // Close popup when clicking outside or pressing Escape key
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
              <div className={styles.dropdownToggle}>
                <b><Link href="">About Us</Link></b>
              </div>

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
                  <Link href="/tentangKami">
                    <Image
                      src="/image/indonesia.png"
                      alt="ID"
                      width={20}
                      height={15}
                    />{" "}
                    IN
                  </Link>
                  <Link href="/tentangKami-ing">
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
              <Link href="/tentangKami">
                <Image
                  src="/image/indonesia.png"
                  alt="ID"
                  width={20}
                  height={15}
                />{" "}
                IN
              </Link>
              <Link href="/tentangKami-ing">
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

      {/* Hero */}
      <div className={styles["hero-real"]}>
        <h1 className={styles.heading1}>About Us</h1>
        <h2 className={styles.heading2}>Home / About Us</h2>
      </div>

      <div className="min-h-screen bg-white flex flex-col px-6 py-12 max-w-7xl mx-auto w-full mt-4 md:mt-[200px]">
        {/* Vision and Mission Title */}
        <div className="w-full mb-0 pl-[55px]">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 relative z-10">
              Vision & Mission
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-blue-100 -z-0 opacity-70 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Not just a slogan, but a spirit that animates every step we take to continue to innovate, collaborate, and provide real impact, in every journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Bagian Gambar */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Image
              src="/image/visiImage.png"
              alt="Visi Misi"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Bagian Visi Misi */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Box Visi */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  📄
                </div>
                <h2 className="text-lg font-bold">Vision</h2>
              </div>
              <p className="text-gray-700">
                Producing graduates with integrity, expertise, and global
                diversity
              </p>
            </div>

            {/* Box Misi */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  📄
                </div>
                <h2 className="text-lg font-bold">Mision</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Educating students to be religious and resilient</li>
                <li>
                  Educating students to be lifelong learners in the field of
                  Information and Communication Technology
                </li>
                <li>
                  Equipping students with international standards of competence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Timeline />
      </div>

      {/* Sambutan Kepala Sekolah */}
      <div className={styles.highlight} id="principal-section">
        <div className={styles["highlight-text"]}>
          <h3 className={styles["highlight h3"]}>Principal's Speech</h3>
          <p className={styles.paragraph}>
            Welcome to the website of SMK Telkom Malang, which I have prepared
            for all members of the school, teachers, staff, students, and the
            general public to access all information about our school. Of
            course, there are still many deficiencies in the presentation of
            information, so I hope that all members of the academic community
            and the general public can provide suggestions and criticism to
            promote further development.
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

      <section className={styles.pilarSection}>
        <h1 className={styles.pilarSectionTitle}>
          <span>Education Pillars</span> SMK Telkom Malang
        </h1>
        <p className={styles.description}>
          Discover Dedicated Educators Who Are the Main Pillars in Guiding and Cultivating <br></br>Superior Talents at SMK Telkom Malang.
        </p>
        <div className={styles.cardContainer}>
          {[
            {
              id: 1,
              name: "Rahmad Dwi Jatmiko S.Kom.",
              role: "Principal",
              department: "Education",
              image: "/guru/PRahmad.png",
              experience: "15+",
            },
            {
              id: 2,
              name: "Muhammad Arifin, M.Pd.",
              role: "Quality Development Performance Management Head",
              department: "Curriculum",
              image: "/guru/PArifin.png",
              experience: "10+",
            },
            {
              id: 3,
              name: "Laila Agustin, S.T.",
              role: "Accounting Head",
              department: "Accounting",
              image: "/guru/BLaila.png",
              experience: "8+",
            },
            {
              id: 4,
              name: "Sri Chusnul Haniyah, S.Pd.",
              role: "Human Capital Logistik and Secretariat Head",
              department: "Human Capital",
              image: "/guru/BChusnul.png",
              experience: "9+",
            },
            {
              id: 5,
              name: "Ifa Choirunnisa, S.ST., M.Pd.",
              role: "Curriculum Head",
              department: "Curriculum",
              image: "/guru/BIfa.png",
              experience: "7+",
            },
            {
              id: 6,
              name: "Bambang Siwantoro",
              role: "Kesiswaan Head",
              department: "Kesiswaan",
              image: "/guru/PBambang.png",
              experience: "14+",
            },
            {
              id: 7,
              name: "Aris Puji Santoso, S.Kom.",
              role: "Hubungan Industri Head",
              department: "Hubungan Industri",
              image: "/guru/PAris.png",
              experience: "9+",
            },
            {
              id: 8,
              name: "M. Hadi Wijaya, S.kom., M.T.",
              role: "IT Laboratory and Infrastructure Head",
              department: "Infrastructure",
              image: "/guru/PHadi.png",
              experience: "11+",
            },
            {
              id: 9,
              name: "Rendi Lusbinantoro, M.Pd.",
              role: "Curriculum Development Head",
              department: "Curriculum",
              image: "/guru/PRendi.png",
              experience: "8+",
            },
            {
              id: 10,
              name: "Ahmad Nasikin, M.Pd.",
              role: "Counseling Head",
              department: "Counseling",
              image: "/guru/PNasikin.png",
              experience: "10+",
            },
            {
              id: 11,
              name: "Qodri Akbar Wajdi, S.Kom.",
              role: "Production and Alumni Head",
              department: "Production",
              image: "/guru/PQodri.png",
              experience: "9+",
            },
            {
              id: 12,
              name: "Whyna Agustin, S.Pd.",
              role: "IT Head",
              department: "IT",
              image: "/guru/BWhyna.png",
              experience: "7+",
            },
            {
              id: 13,
              name: "Larasati Chairun Nisa, S.Pd.",
              role: "Learning and Library Head",
              department: "Library",
              image: "/guru/BLaras.png",
              experience: "6+",
            },
            {
              id: 14,
              name: "M. Chusni Agus, M.Pd., Gr.",
              role: "Extracurricular and Achievement Development Head",
              department: "Extracurricular",
              image: "/guru/PChusni.png",
              experience: "12+",
            },
            {
              id: 15,
              name: "Kinanti Ratnaning, W., M.Pd.",
              role: "PPDB and Communication Head",
              department: "PPDB",
              image: "/guru/BKinan.png",
              experience: "8+",
            },
            {
              id: 16,
              name: "Roselina Febrianti, S.St., Gr.",
              role: "Laboratory Head",
              department: "Laboratory",
              image: "/guru/BRosel.png",
              experience: "7+",
            },
            {
              id: 17,
              name: "Firdausa, S.Pd., Gr.",
              role: "RPL Head",
              department: "RPL",
              image: "/guru/PFirdausa.png",
              experience: "10+",
            },
            {
              id: 18,
              name: "Tito Tri Prabowo, M.Pd.",
              role: "TKJ Head",
              department: "TKJ",
              image: "/guru/PTito.png",
              experience: "11+",
            },
            {
              id: 19,
              name: "Bias Damiasa, S.Pd.",
              role: "Game Development Head",
              department: "Game Development",
              image: "/guru/BBias.png",
              experience: "9+",
            },
            {
              id: 20,
              name: "Yaniko Dimas Yogo Prasetyo, S.Kom",
              role: "Secretary to the Head of the TKj Procurement Agency",
              department: "TKJ",
              image: "/guru/PYaniko.png",
              experience: "8+",
            },
            {
              id: 21,
              name: "Nico Rachmacandrana",
              role: "IT PIC Network",
              department: "Infrastructure",
              image: "/guru/PNico.png",
              experience: "8+",
            },
          ].map((profile, index) => renderProfileCard(profile, index))}
        </div>
      </section>

      <section className={styles.strukturOrganisasi}>
        <h1 className={styles.organ}>
          <span>Organizational structure</span> SMK Telkom Malang
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/image/bagantelkom.png"
            alt="Bagan Struktur Organisasi SMK Telkom Malang"
            width={800}
            height={600}
          />
        </div>
      </section>

      <AccessibilityMenu />
      <Chatbot />
      <FooterIng />

      {/* Profile Popup */}
      {selectedProfile && (
        <ProfilePopup
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

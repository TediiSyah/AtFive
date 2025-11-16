"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProfilePopup from "@/components/ProfilePopup";
import styles from "./tentangPage.module.css";
import Link from "next/link";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Timeline from "./Timeline";

// Certification Card Component
const CertificationCard = ({ cert }) => {
  // Fallback to default image if loading fails
  const [imgSrc, setImgSrc] = useState(cert.image || `/certifications/${cert.replace(/\s+/g, '')}.webp`);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleImageError = () => {
    if (!triedFallback) {
      // First try the PNG version
      const baseName = cert.replace(/\s+/g, '');
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
      role: "Kepala Sekolah",
      department: "Pimpinan",
      image: "/guru/PRahmad.png",
      experience: "15+",
      bio: "Memimpin SMK Telkom Malang dengan visi untuk mencetak lulusan yang berkompeten di bidang teknologi informasi dan komunikasi. Berpengalaman lebih dari 15 tahun di dunia pendidikan teknologi, beliau telah mengembangkan berbagai program unggulan yang mendorong inovasi dan pengembangan karir siswa di industri digital.",
      certifications: ["RahmatDwi"],
    },
    
    {
      id: 2,
      name: "Muhammad Arifin, M.Pd.",
      role: "Wakil Kepala Sekolah",
      department: "Pimpinan",
      image: "/guru/PArifin.png",
      experience: "10+",
      bio: "Ahli dalam pengembangan kurikulum berbasis kompetensi dengan fokus pada kebutuhan industri digital terkini. Memiliki keahlian khusus dalam merancang program pembelajaran yang mengintegrasikan teknologi terkini dan pengembangan karakter siswa yang berakhlak mulia.",
      certifications: ["MuhammadArifin"],
    },
    {
      id: 3,
      name: "Laila Agustin, S.T.",
      role: "Kaur Keuangan",
      department: "Keuangan",
      image: "/guru/BLaila.png",
      experience: "8+",
      bio: "Spesialis manajemen keuangan pendidikan dengan pengalaman lebih dari 8 tahun. Terampil dalam perencanaan anggaran, pengelolaan dana BOS, dan pelaporan keuangan yang transparan sesuai standar akuntansi keuangan sektor publik.",
      certifications: ["Google", "MCSA"],
    },
    {
      id: 4,
      name: "Sri Chusnul Haniyah, S.Pd.",
      role: "Kaur Human Capital",
      department: "SDM",
      image: "/guru/BChusnul.png",
      experience: "9+",
      bio: "Ahli pengembangan SDM pendidikan dengan fokus pada peningkatan kompetensi guru dan tenaga kependidikan. Memiliki keahlian dalam manajemen logistik sekolah dan pengembangan budaya kerja yang produktif di lingkungan pendidikan.",
      certifications: ["SriChusnul", "SriChusnul1"],
    },
    {
      id: 5,
      name: "Ifa Choirunnisa, S.ST., M.Pd.",
      role: "Waka Bid. Kurikulum",
      department: "Kurikulum",
      image: "/guru/BIfa.png",
      experience: "7+",
      bio: "Pakar pengembangan kurikulum berbasis teknologi dengan spesialisasi di bidang jaringan komputer. Berperan aktif dalam merancang program pembelajaran yang responsif terhadap perkembangan industri 4.0 dan kebutuhan dunia kerja.",
      certifications: ["IfaChoirunnisa"],
    },
    {
      id: 6,
      name: "Bambang Siwantoro",
      role: "Waka Bid. Kesiswaan dan Karakter",
      department: "Kesiswaan",
      image: "/guru/PBambang.png",
      experience: "14+",
      bio: "Praktisi pendidikan dengan pendekatan pembelajaran berbasis proyek dan pengalaman industri. Berfokus pada pengembangan keterampilan teknis siswa melalui praktik langsung dan studi kasus nyata di dunia kerja.",
      certifications: ["DrsBambang"],
    },
    {
      id: 7,
      name: "Aris Puji Santoso, S.Kom.",
      role: "Waka Bid. Kurikulum",
      department: "Hubungan Industri",
      image: "/guru/PAris.png",
      experience: "9+",
      bio: "Ahli pengembangan kurikulum berbasis Teknologi Informasi dan Komunikasi. Berperan penting dalam membangun kemitraan strategis dengan industri untuk meningkatkan relevansi kurikulum dengan kebutuhan dunia kerja.",
      certifications: ["ArisPuji"],
    },
    {
      id: 8,
      name: "M. Hadi Wijaya, S.kom., M.T.",
      role: "Waka Bid. IT Laboratourium dan Sarpra",
      department: "Sarana Prasarana",
      image: "/guru/PHadi.png",
      experience: "13+",
      bio: "Ahli manajemen sarana prasarana pendidikan dengan fokus pada pengembangan laboratorium komputer berstandar industri. Berpengalaman dalam perencanaan dan pengelolaan infrastruktur teknologi informasi di lingkungan pendidikan.",
      certifications: ["MokhamadHadi"],
    },
    {
      id: 9,
      name: "Rendi Lusbinantoro, M.Pd",
      role: "Kaur Pengembangan Kursilmat",
      department: "Kurikulum",
      image: "/guru/PRendi.png",
      experience: "9+",
      bio: "Spesialis pengembangan kurikulum dan sistem pembelajaran digital. Memiliki keahlian dalam merancang konten pembelajaran interaktif dan sistem penilaian berbasis teknologi untuk meningkatkan kualitas pendidikan.",
      certifications: ["RendiLusbiantoro"],
    },
    {
      id: 10,
      name: "Ahmad Nasikin, M.Pd.",
      role: "Kaur Bimbingan Konseling dan Karakter",
      department: "BK",
      image: "/guru/PNasikin.png",
      experience: "10+",
      bio: "Konselor pendidikan yang berdedikasi dalam pengembangan karakter dan potensi siswa. Berpengalaman dalam memberikan bimbingan karir dan konseling individu untuk membantu siswa meraih prestasi optimal baik akademik maupun non-akademik.",
      certifications: ["AhmadNasikin"],
    },
    {
      id: 11,
      name: "Qodri Akbar Wajdi, S.Kom.",
      role: "Kaur Sinergi Unit Produksi dan Alumni",
      department: "Unit Produksi",
      image: "/guru/PQodri.png",
      experience: "11+",
      bio: "Memimpin pengembangan kompetensi keahlian Rekayasa Perangkat Lunak.",
      certifications: ["AWS", "CCNA"],
    },
    {
      id: 12,
      name: "Whyna Agustin, S.Pd.",
      role: "Kaur IT",
      department: "Teknologi Informasi",
      image: "/guru/BWhyna.png",
      experience: "11+",
      bio: "Ahli IT dengan fokus pada pengembangan infrastruktur jaringan dan sistem informasi sekolah. Berpengalaman dalam merancang dan mengimplementasikan solusi teknologi untuk mendukung proses pembelajaran digital dan administrasi sekolah yang efisien.",
      certifications: ["WhynaAgustin","UXResearch", "DesignsPrototypes","FoundationsUX"],
    },
    {
      id: 13,
      name: "Larasati Chairun Nisa, S.Pd.",
      role: "Kaur Pembelajaran Dan Perpustakaan",
      department: "Perpustakaan",
      image: "/guru/BLaras.png",
      experience: "11+",
      bio: "Pustakawan profesional dengan spesialisasi pada pengembangan perpustakaan digital. Berperan aktif dalam menciptakan ekosistem literasi digital dan pengembangan budaya baca di kalangan siswa melalui program-program inovatif.",
      certifications: ["LarasatiChairun"],
    },
    {
      id: 14,
      name: "M. Chusni Agus, M.Pd., Gr.",
      role: "Kaur Ekstrakulikulum Dan Pembinaan Prestasi",
      department: "Ekstrakurikuler",
      image: "/guru/PChusni.png",
      experience: "12+",
      bio: "Ahli pengembangan bakat dan minat siswa melalui program ekstrakurikuler. Berpengalaman dalam mengidentifikasi dan mengembangkan potensi siswa di berbagai bidang, mulai dari sains, teknologi, seni, hingga olahraga.",
      certifications: ["MuhammadChusni"],
    },
    {
      id: 15,
      name: "Kinanti Ratnaning, W., M.Pd.",
      role: "Kaur Ppdb Dan Komunikasi",
      department: "PPDB",
      image: "/guru/BKinan.png",
      experience: "11+",
      bio: "Ahli dalam manajemen penerimaan peserta didik baru dan komunikasi sekolah. Berpengalaman dalam merancang strategi rekrutmen siswa baru yang efektif dan membangun citra positif sekolah di masyarakat melalui berbagai program komunikasi dan publikasi.",
      certifications: ["AWS", "CCNA"],
    },
    {
      id: 16,
      name: "Roselina Febrianti, S.St., Gr.",
      role: "Kaur Laboraturium",
      department: "Laboratorium",
      image: "/guru/BRosel.png",
      experience: "11+",
      bio: "Ahli manajemen laboratorium dengan fokus pada pengembangan fasilitas praktikum yang memadai dan berstandar industri. Berperan dalam memastikan kelengkapan dan kesiapan alat-alat praktikum untuk mendukung pembelajaran praktik siswa.",
      certifications: ["RoselinaFebrianti"],
    },
    {
      id: 17,
      name: "Firdausa, S.Pd., Gr.",
      role: "Ketua Kompetisi Keahlian RPL",
      department: "RPL",
      image: "/guru/PFirdausa.png",
      experience: "11+",
      bio: "Pakar dalam pengembangan kurikulum dan pembelajaran Rekayasa Perangkat Lunak (RPL). Berpengalaman dalam membimbing siswa untuk menguasai berbagai bahasa pemrograman dan pengembangan aplikasi, serta mempersiapkan mereka untuk kompetisi nasional dan internasional di bidang RPL.",
      certifications: ["Firdausa","DataAnalyst", "SoftwareDeveloper", "ActificialIntelligence", "Swift"],
    },
    {
      id: 18,
      name: "Tito Tri Prabowo, M.Pd.",
      role: "Ketua Kopetensi Keahlian TKJ",
      department: "TKJ",
      image: "/guru/PTito.png",
      experience: "11+",
      bio: "Ahli jaringan komputer dengan spesialisasi dalam pengembangan kurikulum Teknik Komputer dan Jaringan (TKJ). Berpengalaman dalam merancang dan mengimplementasikan infrastruktur jaringan yang andal serta membimbing siswa untuk meraih sertifikasi internasional di bidang jaringan komputer.",
      certifications: ["TitoTri"],
    },
    {
      id: 19,
      name: "Bias Damiasa, S.Pd.",
      role: "Ketua Kompetensi Keahlian Pengembangan Gim",
      department: "Game Development",
      image: "/guru/BBias.png",
      experience: "11+",
      bio: "Praktisi pengembangan game dengan pengalaman di industri kreatif digital. Berfokus pada pengembangan kurikulum pengembangan game yang mencakup aspek desain, pemrograman, dan bisnis game. Membimbing siswa untuk menciptakan karya game yang inovatif dan kompetitif.",
      certifications: ["BiasDamiasa"],
    },
    {
      id: 20,
      name: "Yaniko Dimas Yogo Prasetyo, S.Kom",
      role: "Sekretaris Kaproli TKJ",
      department: "TKJ",
      image: "/guru/PYaniko.png",
      experience: "11+",
      bio: "Ahli jaringan komputer dengan fokus pada pengembangan praktikum dan kurikulum TKJ. Berpengalaman dalam mengintegrasikan teknologi terbaru dalam pembelajaran jaringan komputer dan sistem digital. Aktif dalam pengembangan modul praktikum yang relevan dengan kebutuhan industri.",
      certifications: ["Dicoding", "RevoU"],
    },
    {
      id: 21,
      name: "Nico Rachmacandrana",
      role: "IT PIC Jaringan",
      department: "Sarana Prasarana",
      image: "/guru/PNico.png",
      experience: "11+",
      bio: "Spesialis manajemen sarana dan prasarana pendidikan dengan fokus pada pengelolaan aset dan fasilitas sekolah. Berpengalaman dalam perencanaan pengadaan, pemeliharaan, dan optimalisasi penggunaan sarana prasarana pendidikan untuk menunjang proses pembelajaran yang efektif dan efisien.",
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
            <li><Link href="/">Beranda</Link>
              
            </li>
            {/* Tentang Kami dengan dropdown */}
            <li
              className={`${styles.dropdownWrapper} ${isTentangKamiHovered && !isMobile() ? styles.active : ''}`}
              onMouseEnter={handleTentangKamiMouseEnter}
              onMouseLeave={handleTentangKamiMouseLeave}
              onClick={handleTentangKamiClick}
            >
              <div className={styles.dropdownToggle}>
                <b><Link href="">Tentang Kami</Link></b>
              </div>

              {/* Dropdown hanya muncul di tablet & desktop */}
              {(isTentangKamiHovered || (isMobile() && isTentangKamiOpen)) && (
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
                  <Link href="/tentangKami">
                    <Image
                      src="/image/indonesia.png"
                      alt="IN"
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
                src="/image/indonesia.png"
                alt="IN"
                width={20}
                height={15}
              />
              <span>IN</span>
              <span className={styles.arrow}>▼</span>
            </div>
            <div className={styles.langOptions}>
              <Link href="/tentangKami">
                <Image
                  src="/image/indonesia.png"
                  alt="IN"
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
        <h1 className={styles.heading1}>Tentang Kami</h1>
        <h2 className={styles.heading2}>Beranda / Tentang Kami</h2>
      </div>

      <div className="min-h-screen bg-white flex flex-col px-6 py-12 max-w-7xl mx-auto w-full mt-4 md:mt-[200px]">
        {/* Vision and Mission Title */}
        <div className="w-full mb-0 pl-[55px]">
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 relative z-10">
              Visi & Misi Kami
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-blue-100 -z-0 opacity-70 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
          Bukan sekadar slogan, tetapi semangat yang menjiwai setiap langkah kami untuk terus berinovasi, berkolaborasi, dan memberikan dampak nyata, di setiap perjalananya
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
                <h2 className="text-lg font-bold">Visi</h2>
              </div>
              <p className="text-gray-700">
                Mencetak lulusan berAKHLAK, ahli, dan berkebhinekaan global
              </p>
            </div>

            {/* Box Misi */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  📄
                </div>
                <h2 className="text-lg font-bold">Misi</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Mengasuh MOKLETER menjadi pribadi yang religius dan tangguh
                </li>
                <li>
                  Mengasah MOKLETER menjadi pribadi pembelajar sepanjang hayat
                  di bidang teknologi Informasi dan Komunikasi
                </li>
                <li>
                  Membekali MOKLETER dengan kompetensi berstandar internasional
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

      <section className={styles.pilarSection}>
        <h1 className={styles.pilarSectionTitle}>
          <span>Pilar Pendidikan</span> SMK Telkom Malang
        </h1>
        <p className={styles.description}>
         Temukan Para Pendidik Berdedikasi yang Menjadi Pilar Utama Dalam Membimbing <br></br>serta Melahirkan Talenta-Talenta Unggul di SMK Telkom Malang.
        </p>
        <div className={styles.cardContainer}>
          {[
            {
              id: 1,
              name: "Rahmad Dwi Jatmiko S.Kom.",
              role: "Kepala Sekolah",
              department: "Pendidikan",
              image: "/guru/PRahmad.png",
              experience: "15+",
            },
            {
              id: 2,
              name: "Muhammad Arifin, M.Pd.",
              role: "Kaur. QualityDevelpoment Performance Management",
              department: "Kurikulum",
              image: "/guru/PArifin.png",
              experience: "10+",
            },
            {
              id: 3,
              name: "Laila Agustin, S.T.",
              role: "Kaur Keuangan",
              department: "Keuangan",
              image: "/guru/BLaila.png",
              experience: "8+",
            },
            {
              id: 4,
              name: "Sri Chusnul Haniyah, S.Pd.",
              role: "Kaur Human Capital Logistik dan Seketariat",
              department: "SDM",
              image: "/guru/BChusnul.png",
              experience: "9+",
            },
            {
              id: 5,
              name: "Ifa Choirunnisa, S.ST., M.Pd.",
              role: "Waka Bid. Kurikulum",
              department: "Kurikulum",
              image: "/guru/BIfa.png",
              experience: "7+",
            },
            {
              id: 6,
              name: "Bambang Siwantoro",
              role: "Waka Bid. Kesiswaan dan Karakter",
              department: "Kesiswaan",
              image: "/guru/PBambang.png",
              experience: "14+",
            },
            {
              id: 7,
              name: "Aris Puji Santoso, S.Kom.",
              role: "Waka bid. hubid industri dan komunikasi",
              department: "Hubungan Industri",
              image: "/guru/PAris.png",
              experience: "9+",
            },
            {
              id: 8,
              name: "M. Hadi Wijaya, S.kom., M.T.",
              role: "Waka Bid. IT Laboratourium dan Sarpra",
              department: "Sarana Prasarana",
              image: "/guru/PHadi.png",
              experience: "11+",
            },
            {
              id: 9,
              name: "Rendi Lusbinantoro, M.Pd.",
              role: "Kaur Pengembangan Kursilmat",
              department: "Kurikulum",
              image: "/guru/PRendi.png",
              experience: "8+",
            },
            {
              id: 10,
              name: "Ahmad Nasikin, M.Pd.",
              role: "Kaur Bimbingan Konseling dan Karakter",
              department: "BK",
              image: "/guru/PNasikin.png",
              experience: "10+",
            },
            {
              id: 11,
              name: "Qodri Akbar Wajdi, S.Kom.",
              role: "Kaur Sinergi Unit Produksi dan Alumni",
              department: "Unit Produksi",
              image: "/guru/PQodri.png",
              experience: "9+",
            },
            {
              id: 12,
              name: "Whyna Agustin, S.Pd.",
              role: "Kaur IT",
              department: "Teknologi Informasi",
              image: "/guru/BWhyna.png",
              experience: "7+",
            },
            {
              id: 13,
              name: "Larasati Chairun Nisa, S.Pd.",
              role: "Kaur Pembelajaran Dan Perpustakaan",
              department: "Perpustakaan",
              image: "/guru/BLaras.png",
              experience: "6+",
            },
            {
              id: 14,
              name: "M. Chusni Agus, M.Pd., Gr.",
              role: "Kaur Ekstrakulikulum Dan Pembinaan Prestasi",
              department: "Kesiswaan",
              image: "/guru/PChusni.png",
              experience: "12+",
            },
            {
              id: 15,
              name: "Kinanti Ratnaning, W., M.Pd.",
              role: "Kaur Ppdb Dan Komunikasi",
              department: "PPDB",
              image: "/guru/BKinan.png",
              experience: "8+",
            },
            {
              id: 16,
              name: "Roselina Febrianti, S.St., Gr.",
              role: "Kaur Laboraturium",
              department: "Laboratorium",
              image: "/guru/BRosel.png",
              experience: "7+",
            },
            {
              id: 17,
              name: "Firdausa, S.Pd., Gr.",
              role: "Ketua Kompetisi Keahlian RPL",
              department: "RPL",
              image: "/guru/PFirdausa.png",
              experience: "10+",
            },
            {
              id: 18,
              name: "Tito Tri Prabowo, M.Pd.",
              role: "Ketua Kopetensi Keahlian TKJ",
              department: "TKJ",
              image: "/guru/PTito.png",
              experience: "11+",
            },
            {
              id: 19,
              name: "Bias Damiasa, S.Pd.",
              role: "Ketua Kompetensi Keahlian Pengembangan Gim",
              department: "Game Development",
              image: "/guru/BBias.png",
              experience: "9+",
            },
            {
              id: 20,
              name: "Yaniko Dimas Yogo Prasetyo, S.Kom",
              role: "Sekretaris Kaproli TKJ",
              department: "TKJ",
              image: "/guru/PYaniko.png",
              experience: "8+",
            },
            {
              id: 21,
              name: "Nico Rachmacandrana",
              role: "IT PIC Jaringan",
              department: "Sarana Prasarana",
              image: "/guru/PNico.png",
              experience: "8+",
            },
          ].map((profile, index) => renderProfileCard(profile, index))}
        </div>
      </section>

      <section className={styles.strukturOrganisasi}>
        <h1 className={styles.organ}>
          <span>Struktur Organisasi</span> SMK Telkom Malang
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
      <Footer />

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

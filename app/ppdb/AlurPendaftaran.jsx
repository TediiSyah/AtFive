'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // ✅ Tambahkan icon arrow
import styles from './AlurPendaftaran.module.css';

const steps = [
  {
    id: 1,
    title: 'Daftar Akun',
    desc: [
      'Klik tombol “Daftar Sekarang” di halaman utama.',
      ' Masukkan data awal pendaftaran dan buat akun pribadimu.',
      ' Gunakan email dan password yang kamu daftarkan untuk login ke sistem.',
      '💡 Langkah pertama untuk bergabung dengan sekolah teknologi terbaik di Malang!'
    ]
  },
  {
    id: 2,
    title: 'Pilih Gelombang',
    desc: [
      'Pilih gelombang pendaftaran yang sedang dibuka dan pastikan tanggalnya masih aktif.',
      ' 🎯 Setiap gelombang adalah kesempatan baru untuk meraih impianmu.'
    ]
  },
  {
    id: 3,
    title: 'Isi Identitas Diri',
    desc: [
      'Lengkapi semua data pribadi dengan benar dan jujur.',
      ' 🧾 Data lengkap = proses lebih cepat dan mudah.'
    ]
  },
  {
    id: 4,
    title: 'Unggah Berkas',
    desc: [
      'Upload berkas sesuai ketentuan format dan ukuran.',
      ' Periksa ulang sebelum dikirim agar tidak ada yang tertinggal.',
      ' 📂 Ketelitianmu hari ini menentukan kelancaran proses besok.'
    ]
  },
  {
    id: 5,
    title: 'Pilih Jurusan',
    desc: [
      'Tentukan jurusan yang paling sesuai dengan passion dan cita-citamu!',
      '🌟 Ingin jadi programmer, desainer, atau pebisnis digital? SMK Telkom Malang siap jadi awal kisah suksesmu.'
    ]
  }
];

export default function RegistrationSteps() {
  const [active, setActive] = useState(1);

  const nextStep = () => {
    if (active < steps.length) setActive(active + 1);
  };

  const prevStep = () => {
    if (active > 1) setActive(active - 1);
  };

  return (
    <section className={styles.container}>
      {/* ILUSTRASI KIRI */}
      <motion.div
        className={styles.imageSection}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/image/class.png" alt="Ilustrasi Pendaftaran" className={styles.image} />
      </motion.div>

      {/* TEKS & STEP KANAN */}
      <div className={styles.textSection}>
        <h2 className={styles.title}>Bagaimana Alur Pendaftarannya?</h2>
        <p className={styles.subtitle}>
          Terdapat beberapa step pendaftaran yang harus dipenuhi agar semua rangkaian
          pendaftaran hingga seleksi berjalan dengan lancar.
        </p>

        <div className={styles.stepsWrapper}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <button
                onClick={() => setActive(step.id)}
                className={`${styles.circle} ${active === step.id ? styles.active : ''}`}
              >
                {step.id}
              </button>
              <p
                className={`${styles.stepTitle} ${
                  active === step.id ? styles.activeText : ''
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
          <div className={styles.line}></div>
        </div>

        {/* ✅ Panah besar untuk navigasi */}
        <div className={styles.arrowNav}>
          <ArrowLeft
            className={`${styles.arrow} ${active === 1 ? styles.disabled : ''}`}
            onClick={prevStep}
          />
          <ArrowRight
            className={`${styles.arrow} ${active === steps.length ? styles.disabled : ''}`}
            onClick={nextStep}
          />
        </div>

        {/* Deskripsi step yang aktif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={styles.descBox}
          >
            <h3 className={styles.descTitle}>{steps[active - 1].title}</h3>
            <ul className={styles.descList}>
              {steps[active - 1].desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

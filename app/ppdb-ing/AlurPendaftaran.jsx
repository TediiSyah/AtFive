'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // ✅ Tambahkan icon arrow
import styles from './AlurPendaftaran.module.css';

const steps = [
  {
    id: 1,
    title: 'Register Account',
    desc: [
      'Click the “Register Now” button on the main page.',
      ' Enter your initial registration data and create your personal account.',
      ' Use the email and password you registered to log in to the system.',
      '💡 The first step to join the best technology school in Malang!'
    ]
  },
  {
    id: 2,
    title: 'Select Registration',
    desc: [
      'Select the registration wave that is currently open and make sure the date is still active.',
      ' 🎯 Every wave is a new opportunity to achieve your dreams.'
    ]
  },
  {
    id: 3,
    title: 'Fill Personal Data',
    desc: [
      'Complete all personal data correctly and honestly.',
      ' 🧾 Complete data = faster and easier process.'
    ]
  },
  {
    id: 4,
    title: 'Upload Documents',
    desc: [
      'Upload files according to the format and size requirements.',
      ' Double check before sending so that nothing is left out.',
      ' 📂Your thoroughness today determines the smoothness of the process tomorrow.'
    ]
  },
  {
    id: 5,
    title: 'Select Jurusan',
    desc: [
      'Choose the most suitable program for your passion and dreams!',
      '🌟 Want to be a programmer, designer, or digital entrepreneur? SMK Telkom Malang is ready to be the beginning of your success story.'
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
        <h2 className={styles.title}>How does the registration <br></br>process work?</h2>
        <p className={styles.subtitle}>
          There are several steps in the registration process that must be fulfilled to ensure that the entire registration process runs smoothly.
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

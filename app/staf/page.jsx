"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './stafPage.module.css';

const Staf = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    token: '',
    gender: '',
    school: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Nama Awal wajib diisi';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nama Akhir wajib diisi';
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email tidak valid';
    if (!formData.confirmEmail.trim()) newErrors.confirmEmail = 'Email Konfirmasi wajib diisi';
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Email tidak cocok';
    if (!formData.phone.trim()) newErrors.phone = 'No Telepon wajib diisi';
    else if (!/^\d{10,12}$/.test(formData.phone)) newErrors.phone = 'No Telepon harus 10-12 angka';
    if (!formData.token.trim()) newErrors.token = 'Token wajib diisi';
    if (formData.token && formData.token.length !== 6) newErrors.token = 'Token harus 6 karakter';
    if (!formData.gender) newErrors.gender = 'Jenis kelamin wajib dipilih';
    if (!formData.school) newErrors.school = 'Sekolah wajib dipilih';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (e) => {
    setFormData(prev => ({ ...prev, gender: e.target.value }));
  };

  return (
    <div className={styles['staf-container']}>
      <div className={styles['staf-form-container']}>
        <div className={styles['staf-left-section']}>
          <div className={styles['staf-header']}>
            <img src="/image/logo_smktelkom.png" alt="SMK Telkom Malang Logo" className={styles['staf-logo']} />
          </div>
          <h2 className={styles['staf-title']}>Bagian Registrasi</h2>
          <p className={styles['staf-login-link']}>Sudah Punya Akun? <span><Link href="/login">Masuk</Link></span></p>
          <form className={styles['staf-registration-form']} onSubmit={handleSubmit}>
            <div className={styles['staf-name-fields']}>
              <div>
                <input 
                  type="text" 
                  placeholder="Nama Awal*" 
                  className={styles['staf-input-field']} 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className={styles['staf-error']}>{errors.firstName}</span>}
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Nama Akhir*" 
                  className={styles['staf-input-field']} 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className={styles['staf-error']}>{errors.lastName}</span>}
              </div>
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Masukkan Email*" 
                className={styles['staf-input-field']} 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className={styles['staf-error']}>{errors.email}</span>}
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Konfirmasi*" 
                className={styles['staf-input-field']} 
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
              />
              {errors.confirmEmail && <span className={styles['staf-error']}>{errors.confirmEmail}</span>}
            </div>
            <div className={styles['staf-contact-fields']}>
              <div>
                <input 
                  type="text" 
                  placeholder="No Telepon*" 
                  className={styles['staf-input-field']} 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className={styles['staf-error']}>{errors.phone}</span>}
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Token*" 
                  className={styles['staf-input-field']} 
                  name="token"
                  value={formData.token}
                  onChange={handleInputChange}
                />
                {errors.token && <span className={styles['staf-error']}>{errors.token}</span>}
              </div>
            </div>
            <div className={styles['staf-gender-school']}>
              <div className={styles['staf-gender']}>
                <input 
                  type="radio" 
                  id="p" 
                  name="gender" 
                  value="P" 
                  className={styles['staf-radio']} 
                  onChange={handleGenderChange}
                  checked={formData.gender === 'P'}
                />
                <label htmlFor="P">P</label>
                <input 
                  type="radio" 
                  id="l" c
                  name="gender" 
                  value="L" 
                  className={styles['staf-radio']} 
                  onChange={handleGenderChange}
                  checked={formData.gender === 'L'}
                />
                <label htmlFor="P">L</label>
                {errors.gender && <span className={styles['staf-error']}>{errors.gender}</span>}
              </div>
              <div>
                <select 
                  className={styles['staf-input-field']}
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Sekolah*</option>
                  <option value="school1">Smk Telkom Malang</option>
                  <option value="school2">Smk Telkom Surabaya</option>
                </select>
                {errors.school && <span className={styles['staf-error']}>{errors.school}</span>}
              </div>
            </div>
            <button type="submit" className={styles['staf-register-button']}>REGISTRASI</button>
          </form>
        </div>
        <div className={styles['staf-right-section']}>
          <img src="/Image/student_regist.png" alt="Students" className={styles['staf-student-image']} />
        </div>
      </div>
    </div>
  );
};

export default Staf;
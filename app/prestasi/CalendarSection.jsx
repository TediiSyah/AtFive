"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function CalendarSection() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  // ✅ Setiap bulan tahun 2025 punya 4 jadwal unik
  const events = {
    // Januari
    "2025-01-10": "Sosialisasi Program PKL Kelas XII",
    "2025-01-20": "Pelatihan Dasar Kepemimpinan Siswa (LDKS)",
    "2025-01-29": "Moklet Tech Sharing #1: Web Development Trends",

    // Februari
    "2025-02-05": "Lomba Desain UI/UX Internal",
    "2025-02-12": "Seminar Kewirausahaan Digital",
    "2025-02-20": "Moklet Career Day 2025",


    // Maret
    "2025-03-03": "Try Out Ujian Sekolah Kelas XII",
    "2025-03-09": "Moklet Expo: Pameran Inovasi Siswa",
    "2025-03-18": "Pelatihan AI & Data Science Dasar",


    // April
    "2025-04-04": "Ujian Sekolah Berbasis Komputer (USBK)",
    "2025-04-10": "Buka Bersama dan Santunan Ramadhan",
    "2025-04-15": "Workshop Fotografi Digital",
    "2025-04-28": "Moklet Coding Competition #2",

    // Mei
    "2025-05-02": "Upacara Hari Pendidikan Nasional",
    "2025-05-10": "Pengumuman Kelulusan Kelas XII",
    "2025-05-18": "Workshop Startup & Inovasi Digital",
   

    // Juni
    "2025-06-06": "Ujian Kenaikan Kelas XI dan X",
    "2025-06-12": "Kunjungan Industri ke Bandung Tech Park",
    "2025-06-21": "Pameran Proyek Akhir Kelas XI",

    // Juli
    "2025-07-08": "Masa Pengenalan Lingkungan Sekolah (MPLS)",
    "2025-07-12": "Sosialisasi Program Startup Moklet",
    "2025-07-20": "Pelatihan Public Speaking",
    "2025-07-29": "Moklet Innovation Camp",

    // Agustus
    "2025-08-09": "Lomba Agustusan & Hari Pramuka",
    "2025-08-14": "Pelatihan UI/UX Design",
    "2025-08-17": "Upacara HUT RI ke-80",
    "2025-08-25": "Hackathon Siswa Moklet 2025",

    // September
    "2025-09-05": "Workshop Robotika Dasar",
    "2025-09-17": "Seminar “Tech for Education”",
    "2025-09-21": "Moklet Talk: Alumni Sharing Session",

    // Oktober
    "2025-10-02": "Sosialisasi MYD",
    "2025-10-10": "Presentasi MYD",
    "2025-10-21": " Workshop MYD",
    "2025-10-28": "Peringatan Hari Sumpah Pemuda",

    // November
    "2025-11-06": "Pelatihan Digital Marketing Dasar",
    "2025-11-12": "Kompetisi Aplikasi Mobile",
    "2025-11-27": "Malam Apresiasi Siswa Berprestasi",

    // Desember
    "2025-12-04": " Ujian Akhir Semester Ganjil",
    "2025-12-10": "Moklet Fest: Expo & Awarding Night",
    "2025-12-18": " Rapat Penetapan Nilai Akhir Semester",
    "2025-12-23": "Family Gathering & Tutup Tahun",
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else setCurrentMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else setCurrentMonth((m) => m + 1);
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentYear, currentMonth);
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);
    return [...blanks, ...days];
  };

  const formatDate = (day) => {
    const m = String(currentMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${currentYear}-${m}-${d}`;
  };

  return (
    <section className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-2xl shadow-md border border-red-100">
      {/* 📅 Kalender */}
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-7 h-7 text-red-700" />
          <h2 className="text-2xl font-bold text-red-700">
            {months[currentMonth]} {currentYear}
          </h2>
          <div className="ml-auto flex gap-2">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-red-50 transition">
              <ChevronLeft className="text-red-700" />
            </button>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-red-50 transition">
              <ChevronRight className="text-red-700" />
            </button>
          </div>
        </div>

        {/* Hari Minggu–Sabtu */}
        <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* 📆 Grid Hari */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMonth + currentYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-7 gap-1"
          >
            {renderDays().map((day, idx) => {
              if (!day) return <div key={idx}></div>;

              const dateKey = formatDate(day);
              const isToday =
                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear();

              const hasEvent = events[dateKey];

              return (
                <div key={idx} className="h-14 flex items-center justify-center relative">
                  <button
                    onClick={() => setSelectedDate(day)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md font-medium transition-all
                      ${
                        selectedDate === day
                          ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
                          : isToday
                          ? "border border-red-400 text-red-700 font-bold"
                          : "hover:bg-red-50 text-gray-700"
                      }`}
                  >
                    {day}
                    {hasEvent && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 📋 Jadwal Bulan Ini */}
      <div className="w-full md:w-1/3 border-l border-red-100 pl-6">
        <h3 className="font-semibold mb-4 text-gray-800 text-lg">Jadwal Bulan Ini</h3>
        <ul className="space-y-4">
          {Object.keys(events).map((date) => {
            const [year, month, day] = date.split("-").map(Number);
            if (year === currentYear && month - 1 === currentMonth) {
              return (
                <motion.li
                  key={date}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="w-12 h-12 flex-shrink-0 flex flex-col items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-red-700 text-white font-bold text-sm leading-tight">
                    {day}
                    <span className="text-[10px] font-normal opacity-80">
                      {months[month - 1].substring(0, 3)}
                    </span>
                  </span>
                  <span className="text-gray-700 group-hover:text-red-700 transition-colors">
                    {events[date]}
                    <span className="block text-sm text-gray-500 group-hover:text-red-500 transition-colors">
                      {`${day} ${months[month - 1]} ${year}`}
                    </span>
                  </span>
                </motion.li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </section>
  );
}

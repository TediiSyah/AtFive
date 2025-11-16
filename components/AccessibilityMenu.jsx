"use client";

import { useState, useEffect } from "react";
import styles from "./AccessibilityMenu.module.css";
import { FaRedoAlt } from "react-icons/fa";
import { MdOutlineContrast } from "react-icons/md";
import { AiOutlineLink, AiOutlineFontSize } from "react-icons/ai";
import { BsPalette, BsStars } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    textSize: 100,
    highContrast: false,
    textSpacing: false,
    colorBlindMode: "none",
    highlightLinks: false
  });

  /* =========================
     📥 LOAD SETTINGS
  ========================= */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("accessibilitySettings");
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        document.documentElement.style.fontSize = `${parsed.textSize}%`;
      }
    } catch (err) {
      console.warn("⚠️ Gagal memuat pengaturan aksesibilitas:", err);
    }
  }, []);

  /* =========================
     ⚙️ APPLY SETTINGS
  ========================= */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      styles.highContrast,
      styles.textSpacing,
      styles.highlightLinks
    );
    root.style.filter = "none";
    root.style.removeProperty("--bg-color");
    root.style.removeProperty("--text-color");

    // === Kontras Tinggi (Dark Mode) ===
    if (settings.highContrast) {
      // Hapus semua class yang tidak diperlukan
      root.classList.remove('light');
      // Tambahkan class darkMode
      root.classList.add('darkMode');
      // Atur properti CSS langsung
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      // Atur filter untuk gambar dan media
      document.querySelectorAll("img, video, .hero, .image-container").forEach((el) => {
        el.style.filter = "brightness(0.9) contrast(1.1)";
      });
    } else {
      // Kembalikan ke mode normal
      root.classList.remove('darkMode');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--text-color');
      // Reset filter
      document.querySelectorAll("img, video, .hero, .image-container").forEach((el) => {
        el.style.filter = "";
      });
    }

    if (settings.textSpacing) root.classList.add(styles.textSpacing);
    if (settings.highlightLinks) root.classList.add(styles.highlightLinks);

    // === Mode Buta Warna ===
    let filters = [];
    switch (settings.colorBlindMode) {
      case "protanopia":
        filters.push("url(#protanopia)");
        break;
      case "deuteranopia":
        filters.push("url(#deuteranopia)");
        break;
      case "tritanopia":
        filters.push("url(#tritanopia)");
        break;
    }
    root.style.filter = filters.join(" ");

    // === Ukuran Teks ===
    root.style.fontSize = `${settings.textSize}%`;

    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
  }, [settings]);

  /* =========================
     🔤 TEXT SIZE
  ========================= */
  const updateTextSize = (delta) => {
    setSettings((prev) => ({
      ...prev,
      textSize: Math.min(150, Math.max(80, prev.textSize + delta)),
    }));
  };

  /* =========================
     🔄 RESET
  ========================= */
  const resetSettings = () => {
    const reset = {
      textSize: 100,
      highContrast: false,
      textSpacing: false,
      colorBlindMode: "none",
      highlightLinks: false
    };
    setSettings(reset);
    document.documentElement.removeAttribute("style");
    document.documentElement.className = "";
    localStorage.removeItem("accessibilitySettings");
    alert("🔄 Pengaturan aksesibilitas telah direset.");
  };

  /* =========================
     🖱️ CLOSE ON OUTSIDE
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector(".accessibility-menu");
      const button = document.querySelector(".accessibility-button");
      if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  /* =========================
     🧠 RENDER
  ========================= */
  return (
    <>
      {/* SVG Filters for Color Blind Simulation */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix
              type="matrix"
              values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix
              type="matrix"
              values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix
              type="matrix"
              values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Floating Button */}
      <div className="fixed bottom-24 right-5 z-50 flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="accessibility-button bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          aria-label="Menu Aksesibilitas"
          aria-expanded={isOpen}
        >
          <HiOutlineAdjustments className="text-2xl" />
        </button>

        {/* Menu Panel */}
        {isOpen && (
          <div
            className="accessibility-menu absolute right-16 bottom-0 bg-white rounded-2xl shadow-xl p-6 w-72 transition-all duration-300"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <h2 className="text-center text-lg font-semibold mb-4 text-gray-800">
              Menu Aksesibilitas
            </h2>

            {/* Text Size */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Ukuran Teks: {settings.textSize}%
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateTextSize(-10)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-yellow-100 rounded-full transition"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => updateTextSize(10)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-yellow-100 rounded-full transition"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: MdOutlineContrast,
                  label: "Mode Gelap / Kontras Tinggi",
                  active: settings.highContrast,
                  toggle: () =>
                    setSettings((p) => ({ ...p, highContrast: !p.highContrast })),
                },
                {
                  icon: AiOutlineFontSize,
                  label: "Spasi Teks Lebar",
                  active: settings.textSpacing,
                  toggle: () =>
                    setSettings((p) => ({ ...p, textSpacing: !p.textSpacing })),
                },
                {
                  icon: AiOutlineLink,
                  label: "Sorot Tautan",
                  active: settings.highlightLinks,
                  toggle: () =>
                    setSettings((p) => ({
                      ...p,
                      highlightLinks: !p.highlightLinks,
                    })),
                },
              ].map(({ icon: Icon, label, active, toggle }, i) => (
                <button
                  key={i}
                  onClick={toggle}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    active
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon className="text-xl mr-3" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Color Blind */}
            <div className="mb-6">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <BsPalette className="text-xl mr-2" />
                Mode Buta Warna
              </label>
              <select
                value={settings.colorBlindMode}
                onChange={(e) =>
                  setSettings((p) => ({
                    ...p,
                    colorBlindMode: e.target.value,
                  }))
                }
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="none">Tidak Aktif</option>
                <option value="protanopia">Protanopia</option>
                <option value="deuteranopia">Deuteranopia</option>
                <option value="tritanopia">Tritanopia</option>
              </select>
            </div>

            <button
              onClick={resetSettings}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <FaRedoAlt />
              Atur Ulang Semua
            </button>
          </div>
        )}
      </div>
    </>
  );
}

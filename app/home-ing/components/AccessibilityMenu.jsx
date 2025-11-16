"use client";

import { useState, useEffect } from "react";
import styles from './AccessibilityMenu.module.css';
import { FaRedoAlt } from "react-icons/fa";


import {
  MdOutlineContrast,
  MdOutlineTextIncrease,
  MdOutlineKeyboard,
} from "react-icons/md";
import { AiOutlineLink, AiOutlineFontSize } from "react-icons/ai";
import { BsDroplet, BsCursor } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    textSize: 100, // percentage
    highContrast: false,
    textSpacing: false,
    largeCursor: false,
    highlightLinks: false,
    grayscale: false,
    reduceMotion: false
  });
  
  // Apply accessibility settings to the document
  useEffect(() => {
    // Text size is handled by the separate effect above
    
    // Toggle classes based on settings
    const classList = document.body.classList;
    
    // High contrast - using a global class that will be defined in globals.css
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--foreground', '#FFFFFF');
      document.documentElement.style.setProperty('--color-background', '#000000');
      document.documentElement.style.setProperty('--color-foreground', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--foreground');
      document.documentElement.style.removeProperty('--color-background');
      document.documentElement.style.removeProperty('--color-foreground');
    }
    
    // Text spacing
    settings.textSpacing 
      ? classList.add(styles.textSpacing) 
      : classList.remove(styles.textSpacing);
    
    // Large cursor
    settings.largeCursor 
      ? classList.add(styles.largeCursor) 
      : classList.remove(styles.largeCursor);
    
    // Highlight links
    settings.highlightLinks 
      ? classList.add(styles.highlightLinks) 
      : classList.remove(styles.highlightLinks);
    
    // Grayscale - apply to document element for full coverage
    if (settings.grayscale) {
      document.documentElement.classList.add('grayscale');
    } else {
      document.documentElement.classList.remove('grayscale');
    }
    
    // Reduce motion - apply to document element for full coverage
    if (settings.reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    // Save settings to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    
    // Cleanup function to remove all accessibility classes when component unmounts
    return () => {
      // Remove all module-based classes
      [
        styles.textSpacing,
        styles.largeCursor,
        styles.highlightLinks
      ].forEach(className => classList.remove(className));
      
      // Remove high contrast styles
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--foreground');
      document.documentElement.style.removeProperty('--color-background');
      document.documentElement.style.removeProperty('--color-foreground');
      
      // Remove grayscale and reduce motion
      document.documentElement.classList.remove('grayscale');
      document.documentElement.classList.remove('reduce-motion');
    };
  }, [settings]);
  
  // Load saved settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);
  
  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const updateTextSize = (delta) => {
    setSettings(prev => ({
      ...prev,
      textSize: Math.min(200, Math.max(80, prev.textSize + delta))
    }));
  };
  
  const resetSettings = () => {
    setSettings({
      textSize: 100,
      highContrast: false,
      textSpacing: false,
      largeCursor: false,
      highlightLinks: false,
      grayscale: false,
      reduceMotion: false
    });
    alert("Pengaturan aksesibilitas telah direset");
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.accessibility-menu');
      const button = document.querySelector('.accessibility-button');
      
      if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Add global styles
  useEffect(() => {
    // Set initial text size
    document.documentElement.style.setProperty('--text-size', `${settings.textSize}%`);
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.removeProperty('--text-size');
    };
  }, [settings.textSize]);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center">
        {/* Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="accessibility-button bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105"
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
              maxHeight: '80vh',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxWidth: 'min(90vw, 400px)',
              right: '60px',
              bottom: '0',
            }}
          >
            <h2 className="text-center text-lg font-semibold mb-4 text-gray-800">
              Menu Aksesibilitas
            </h2>

            {/* Text Size Controls */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Ukuran Teks: {settings.textSize}%</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => updateTextSize(-10)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
                    aria-label="Perkecil teks"
                  >
                    A-
                  </button>
                  <button 
                    onClick={() => updateTextSize(10)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
                    aria-label="Perbesar teks"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>

            {/* Accessibility Toggles */}
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: MdOutlineContrast,
                  label: 'Kontras Tinggi',
                  active: settings.highContrast,
                  toggle: () => toggleSetting('highContrast')
                },
                {
                  icon: AiOutlineFontSize,
                  label: 'Spasi Teks Lebar',
                  active: settings.textSpacing,
                  toggle: () => toggleSetting('textSpacing')
                },
                {
                  icon: AiOutlineLink,
                  label: 'Sorot Tautan',
                  active: settings.highlightLinks,
                  toggle: () => toggleSetting('highlightLinks')
                },
                {
                  icon: BsDroplet,
                  label: 'Skala Abu-abu',
                  active: settings.grayscale,
                  toggle: () => toggleSetting('grayscale')
                },
                {
                  icon: BsCursor,
                  label: 'Kursor Besar',
                  active: settings.largeCursor,
                  toggle: () => toggleSetting('largeCursor')
                },
                {
                  icon: MdOutlineKeyboard,
                  label: 'Kurangi Gerakan',
                  active: settings.reduceMotion,
                  toggle: () => toggleSetting('reduceMotion')
                }
              ].map(({ icon: Icon, label, active, toggle }, i) => (
                <button
                  key={i}
                  onClick={toggle}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    active 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                  aria-pressed={active}
                >
                  <Icon className="text-xl mr-3" />
                  <span className="text-sm font-medium">{label}</span>
                  <div className="ml-auto w-10 h-5 bg-gray-200 rounded-full relative">
                    <div 
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform ${
                        active ? 'bg-yellow-600 transform translate-x-5' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Reset Button */}
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
  );
};

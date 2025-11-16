"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const buttonRef = useRef(null);
  
  const handleChatbotOpen = () => {
    // Check if Voiceflow chat is available
    if (typeof window !== 'undefined' && window.voiceflow?.chat) {
      try {
        // Open the chat widget
        window.voiceflow.chat.open();
      } catch (error) {
        console.error('Error opening chatbot:', error);
      }
    } else {
      console.warn('Voiceflow chat is not available yet');
    }
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  
  // Parallax values for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const floatingShapes = [
    // Left side shapes
    { 
      id: 1, 
      color: "bg-red-600/90", 
      size: "w-12 h-12 sm:w-16 sm:h-16",
      position: "top-1/4 left-4 sm:left-8",
      y: useTransform(scrollYProgress, [0, 1], [0, 120]),
      x: useTransform(scrollYProgress, [0, 1], [0, 20]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
    },
    { 
      id: 2, 
      color: "bg-red-800/90", 
      size: "w-10 h-10 sm:w-14 sm:h-14",
      position: "bottom-1/3 left-6 sm:left-12",
      y: useTransform(scrollYProgress, [0, 1], [0, -100]),
      x: useTransform(scrollYProgress, [0, 1], [0, 30]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
    },
    // Right side shapes
    { 
      id: 3, 
      color: "bg-red-700/90", 
      size: "w-14 h-14 sm:w-18 sm:h-18",
      position: "top-1/3 right-4 sm:right-8",
      y: useTransform(scrollYProgress, [0, 1], [0, 150]),
      x: useTransform(scrollYProgress, [0, 1], [0, -20]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
    },
    { 
      id: 4, 
      color: "bg-red-900/90", 
      size: "w-12 h-12 sm:w-16 sm:h-16",
      position: "bottom-1/4 right-6 sm:right-12",
      y: useTransform(scrollYProgress, [0, 1], [0, -120]),
      x: useTransform(scrollYProgress, [0, 1], [0, -30]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-[150vh] overflow-hidden text-center px-4 bg-transparent"
    >
      {/* Sticky container to keep content in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
        {/* Background elements with parallax */}
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`${shape.size} ${shape.color} rounded-2xl absolute ${shape.position} opacity-80`}
            style={{
              y: shape.y,
              x: shape.x,
              rotate: shape.rotate,
              boxShadow: `0 0 30px ${shape.color}`,
            }}
          />
        ))}

        {/* Main content with subtle parallax */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4"
          style={{
            y: y2,
            opacity: 1,
            scale: 1
          }}
        >
          <motion.div 
            className="inline-block mb-6 dark:block hidden"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-red-700 mx-auto drop-shadow-lg" />
          </motion.div>
          
          <motion.div className="w-full max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ y: y3, color: 'black' }}
            >
              <span style={{color: 'black'}}>
                Tenang aja, Bombi siap bantu
              </span>
              <br className="hidden sm:block" />
              <span className="text-red-600 dark:text-red-500">
                kamu temuin jurusan yang paling cocok!
              </span>
            </motion.h1>
          </motion.div>
          
          <div className="relative">
            <motion.p 
              className="text-xl sm:text-2xl text-gray-800 font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm"
            >
              Jangan khawatir! Temukan jawabannya bersama kami.
            </motion.p>

            <motion.div>
            <motion.button 
              className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold text-lg sm:text-xl shadow-xl z-20 border-2 border-white/20"
              whileHover={{ 
                scale: 1.03,
                background: [
                  'linear-gradient(to right, #dc2626, #b91c1c)',
                  'linear-gradient(to right, #b91c1c, #dc2626)',
                  'linear-gradient(to right, #dc2626, #b91c1c)'
                ],
                transition: {
                  scale: { duration: 0.2 },
                  background: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
                },
                boxShadow: '0 8px 25px -5px rgba(220, 38, 38, 0.4)'
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: '0 2px 10px -2px rgba(220, 38, 38, 0.4)'
              }}
              onClick={handleChatbotOpen}
              aria-label="Tanya Bombi Sekarang"
            >
              <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                Tanya Bombi Sekarang
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ 
                    x: 3,
                    transition: { 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 10 
                    } 
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

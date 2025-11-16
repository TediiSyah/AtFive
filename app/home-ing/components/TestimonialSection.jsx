"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Studying at Moklet is truly amazing! Besides the comprehensive and modern facilities, the teachers are also engaging, experienced, and always ready to guide me. I feel it's been incredibly helpful in helping me pursue my dream college.",
    name: "Hartanto Sumanto",
    detail: "Studying at Universitas Indonesia",
    img: "/image/alumni1.png",
  },
  {
    id: 2,
    text: "Studying at Moklet is truly amazing! Besides the comprehensive and modern facilities, the teachers are also engaging, experienced, and always ready to guide me. I feel it's been incredibly helpful in helping me pursue my dream college.",
    name: "Budi Santoso",
    detail: "Studying at Universitas Gadjah Mada",
    img: "/image/alumni2.png",
  },
  {
    id: 3,
    text: "Studying at Moklet is truly amazing! Besides the comprehensive and modern facilities, the teachers are also engaging, experienced, and always ready to guide me. I feel it's been incredibly helpful in helping me pursue my dream college.",
    name: "Rina Kusuma",
    detail: "Programmer at Google",
    img: "/image/alumni3.png",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10 p-8 bg-white rounded-2xl shadow-md">
          {/* Left Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-black mb-3">
              What they say <br></br>about{' '}
              <span className="text-red-800">Moklet</span>
            </h2>
            <p className="text-gray-600">
           What do they say about Moklet? <br></br>Here are testimonials from alumni who have experienced the quality<br></br> of education at Moklet firsthand.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="md:w-2/3 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-red-100 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="text-red-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-red-100 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="text-red-600" />
              </button>
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-red-100 rounded-2xl shadow-md p-6"
            >
              <MessageSquare className="text-red-600 mb-3" />
              <p className="text-gray-700 mb-4">{testimonials[currentIndex].text}</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[currentIndex].img}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full border-2 border-red-100"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                  <p className="text-red-600 font-medium">
                    {testimonials[currentIndex].detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

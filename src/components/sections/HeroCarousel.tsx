import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroCampus from "@/assets/hero-campus.jpg";
import heroAssembly from "@/assets/hero-assembly.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroActivities from "@/assets/hero-activities.jpg";

const slides = [
  {
    image: heroCampus,
    title: "Discipline Today",
    highlight: "Leaders Tomorrow",
    subtitle: "CBSE School · Nursery to Class 10 · Biharsharif",
  },
  {
    image: heroAssembly,
    title: "Building Character",
    highlight: "Through Values",
    subtitle: "Morning assemblies that instill discipline and unity",
  },
  {
    image: heroClassroom,
    title: "Excellence in",
    highlight: "Every Classroom",
    subtitle: "Experienced faculty committed to student success",
  },
  {
    image: heroActivities,
    title: "Nurturing",
    highlight: "Future Leaders",
    subtitle: "Holistic development through academics and activities",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={`${slides[currentSlide].title} at Vidya Bharti School`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white/90 text-sm font-medium">CBSE Affiliated · Est. 2005</span>
            </motion.div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {slides[currentSlide].title}
              <br />
              <span className="text-primary-light">{slides[currentSlide].highlight}</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl font-light">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button size="xl" className="group bg-primary hover:bg-primary-light text-white shadow-accent">
                  Apply for Admission
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group border-white/30 text-white hover:bg-white/10">
                  <Calendar className="w-5 h-5" />
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation - Minimal */}
        <div className="absolute bottom-16 left-6 md:left-auto md:right-12 flex flex-col items-start md:items-end gap-6">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? "w-12 h-1 bg-white rounded-full"
                    : "w-6 h-1 bg-white/30 hover:bg-white/50 rounded-full"
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

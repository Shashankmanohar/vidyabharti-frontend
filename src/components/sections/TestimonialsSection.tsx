import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent · Class 8",
    content: "The discipline and academic focus has transformed my son. His grades improved significantly and he developed a strong sense of responsibility.",
  },
  {
    name: "Sunita Devi",
    role: "Parent · Class 5",
    content: "The teachers are dedicated and regular parent-teacher meetings keep us informed about our child's progress. Highly satisfied!",
  },
  {
    name: "Amit Singh",
    role: "Parent · Class 10",
    content: "My daughter has been here since nursery. The consistent discipline and quality education prepared her well for board exams.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            What Parents <span className="text-accent">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-soft relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 pt-6 relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {testimonials[currentIndex].name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

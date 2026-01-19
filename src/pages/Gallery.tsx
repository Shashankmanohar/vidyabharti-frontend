import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";
import heroAssembly from "@/assets/hero-assembly.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroActivities from "@/assets/hero-activities.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import annualDay from "@/assets/annual-day.jpg";
import sportsDay from "@/assets/sports-day.jpg";

const galleryImages = [
  { src: heroCampus, title: "School Campus", category: "Campus" },
  { src: heroAssembly, title: "Morning Assembly", category: "Activities" },
  { src: heroClassroom, title: "Classroom Learning", category: "Academics" },
  { src: heroActivities, title: "Student Activities", category: "Activities" },
  { src: computerLab, title: "Computer Lab", category: "Facilities" },
  { src: libraryImg, title: "Library", category: "Facilities" },
  { src: scienceLab, title: "Science Lab", category: "Facilities" },
  { src: annualDay, title: "Annual Day", category: "Events" },
  { src: sportsDay, title: "Sports Day", category: "Events" },
];

const categories = ["All", "Campus", "Academics", "Facilities", "Activities", "Events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="overflow-hidden">
      <Header />
      <PageHero title="Photo Gallery" subtitle="Glimpses of life at Vidya Bharati School" breadcrumb="Gallery" />

      <section className="py-24 bg-background">
        <div className="container">
          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-full font-medium transition-all ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImage(image.src)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-soft hover:shadow-strong"
              >
                <img src={image.src} alt={image.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-accent text-sm font-semibold">{image.category}</span>
                    <h3 className="font-heading font-bold text-xl text-primary-foreground">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 text-background hover:text-accent transition-colors">
            <X className="w-8 h-8" />
          </button>
          <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightboxImage} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl shadow-strong" onClick={(e) => e.stopPropagation()} />
        </motion.div>
      )}

      <Footer />
    </main>
  );
};

export default Gallery;

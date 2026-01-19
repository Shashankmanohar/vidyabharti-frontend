import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { 
  Building, Monitor, Library, TreePine, Camera, Droplets,
  Wifi, Bus, Stethoscope, UtensilsCrossed, Sun, Shield
} from "lucide-react";

import computerLab from "@/assets/computer-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const facilities = [
  {
    icon: Building,
    title: "Smart Classrooms",
    description: "Spacious, well-ventilated classrooms equipped with digital boards, projectors, and modern furniture designed for optimal learning experience.",
    features: ["Digital smart boards", "Projectors", "Ergonomic furniture", "Natural lighting", "Air circulation"],
    image: heroCampus
  },
  {
    icon: Monitor,
    title: "Computer Laboratory",
    description: "State-of-the-art computer lab with latest hardware and software to develop digital literacy and programming skills.",
    features: ["30+ modern computers", "High-speed internet", "Licensed software", "Trained instructors", "Coding programs"],
    image: computerLab
  },
  {
    icon: Library,
    title: "Library & Resource Center",
    description: "Extensive collection of books, journals, and digital resources to encourage reading and research habits.",
    features: ["5000+ books", "Reference section", "Reading corners", "Digital catalogs", "E-resources"],
    image: libraryImg
  },
  {
    icon: Stethoscope,
    title: "Science Laboratories",
    description: "Well-equipped physics, chemistry, and biology labs for hands-on learning and practical experiments.",
    features: ["Modern equipment", "Safety protocols", "Individual workstations", "Expert supervision", "Regular practicals"],
    image: scienceLab
  },
];

const additionalFacilities = [
  { icon: TreePine, title: "Playground", description: "Large sports field for outdoor games, athletics, and physical education" },
  { icon: Camera, title: "CCTV Surveillance", description: "24/7 camera monitoring for complete campus security" },
  { icon: Droplets, title: "RO Water System", description: "Safe, purified drinking water available throughout campus" },
  { icon: Wifi, title: "Wi-Fi Campus", description: "High-speed internet connectivity for digital learning" },
  { icon: Bus, title: "Transport Facility", description: "Safe school buses covering all major routes in Biharsharif" },
  { icon: UtensilsCrossed, title: "Canteen", description: "Hygienic canteen serving nutritious snacks and meals" },
  { icon: Sun, title: "Assembly Hall", description: "Spacious hall for morning prayers, events, and gatherings" },
  { icon: Shield, title: "First Aid Room", description: "Medical room with first aid supplies and trained staff" },
];

const Facilities = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      
      <PageHero
        title="Our Facilities"
        subtitle="Modern infrastructure designed for excellence in education"
        breadcrumb="Facilities"
      />

      {/* Main Facilities */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Campus Infrastructure</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              World-Class <span className="text-primary">Learning Environment</span>
            </h2>
            <p className="text-muted-foreground">
              Our campus is equipped with modern facilities to support both academic excellence and overall development
            </p>
          </motion.div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-3xl overflow-hidden shadow-strong"
                    >
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-strong"
                    >
                      <facility.icon className="w-10 h-10 text-accent-foreground" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{facility.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 p-3 bg-secondary rounded-xl"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities Grid */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">More Amenities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Everything for <span className="text-primary">Holistic Growth</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFacilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:bg-accent transition-colors"
                >
                  <facility.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Safety First</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-6">
                A Safe & Secure <span className="text-accent">Campus</span>
              </h2>
              
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                The safety of our students is our top priority. We have implemented comprehensive 
                security measures to ensure a protected learning environment for all.
              </p>

              <div className="space-y-4">
                {[
                  { title: "24/7 CCTV Surveillance", desc: "All areas monitored by security cameras" },
                  { title: "Trained Security Staff", desc: "Professional guards at all entry points" },
                  { title: "Visitor Management", desc: "Strict verification for all visitors" },
                  { title: "Emergency Protocols", desc: "Regular drills and safety training" },
                  { title: "Fire Safety", desc: "Fire extinguishers and emergency exits" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-foreground">{item.title}</p>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-10 border border-primary-foreground/20">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-6"
                  >
                    <Shield className="w-12 h-12 text-accent-foreground" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">
                    100% Secure Campus
                  </h3>
                  <p className="text-primary-foreground/80">
                    Your child's safety is guaranteed with our multi-layered security system
                  </p>
                  
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { value: "50+", label: "CCTV Cameras" },
                      { value: "24/7", label: "Monitoring" },
                      { value: "100%", label: "Coverage" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-heading font-bold text-2xl text-accent">{stat.value}</p>
                        <p className="text-primary-foreground/60 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Facilities;

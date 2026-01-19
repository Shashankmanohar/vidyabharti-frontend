import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, BookOpen, GraduationCap, Star } from "lucide-react";

import principalImg from "@/assets/principal.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const values = [
  { icon: Target, title: "Excellence", description: "Striving for the highest standards in education and character development" },
  { icon: Heart, title: "Integrity", description: "Building honest, ethical, and morally upright individuals" },
  { icon: Users, title: "Discipline", description: "Fostering self-control and respect for rules and others" },
  { icon: Star, title: "Innovation", description: "Encouraging creative thinking and problem-solving abilities" },
];

const milestones = [
  { year: "2005", event: "School Founded", description: "Vidya Bharati School established with a vision for quality education" },
  { year: "2008", event: "CBSE Affiliation", description: "Received CBSE affiliation for classes up to 8th standard" },
  { year: "2012", event: "Secondary Expansion", description: "Extended to Class 10 with full CBSE board examination facility" },
  { year: "2015", event: "Infrastructure Upgrade", description: "New computer lab, science lab, and library established" },
  { year: "2018", event: "1000 Students Milestone", description: "Crossed 1000 students with 98% board exam pass rate" },
  { year: "2023", event: "Digital Learning", description: "Introduced smart classrooms and digital learning resources" },
];

const About = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      
      <PageHero
        title="About Us"
        subtitle="Building disciplined minds and nurturing future leaders since 2005"
        breadcrumb="About Us"
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={18} suffix="+" label="Years of Excellence" />
            <AnimatedCounter end={1200} suffix="+" label="Students Enrolled" />
            <AnimatedCounter end={50} suffix="+" label="Expert Teachers" />
            <AnimatedCounter end={98} suffix="%" label="Board Pass Rate" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                A Legacy of <span className="text-primary">Excellence</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2005 in the historic town of Biharsharif, Vidya Bharati School was established 
                  with a singular vision: to provide quality education rooted in discipline and moral values 
                  to the children of Nalanda district.
                </p>
                <p>
                  Over the years, we have grown from a small institution to one of the most respected 
                  CBSE-affiliated schools in the region. Our commitment to academic excellence, combined 
                  with a strong emphasis on character building, has helped us produce confident, 
                  responsible, and successful individuals.
                </p>
                <p>
                  Today, we continue to evolve with modern teaching methodologies while staying true to 
                  our core values of discipline, integrity, and excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={heroCampus} 
                  alt="Vidya Bharati School Campus"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-strong"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <Award className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-foreground">18+</p>
                    <p className="text-muted-foreground text-sm">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Vision & Mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Guiding <span className="text-primary">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 shadow-medium hover:shadow-strong transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a premier educational institution that nurtures disciplined, innovative, and 
                morally upright individuals who contribute positively to society. We envision creating 
                future leaders who excel not just academically, but in every sphere of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 shadow-medium hover:shadow-strong transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide holistic education that develops intellectual capabilities, instills 
                strong values, and builds character. We are committed to creating a safe, supportive, 
                and stimulating learning environment where every child can discover and develop their potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Core Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What We <span className="text-primary">Stand For</span>
            </h2>
            <p className="text-muted-foreground">
              Our values form the foundation of everything we do at Vidya Bharati School
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-strong transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors"
                >
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-gradient-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-accent rounded-full opacity-20 animate-pulse" />
                <img
                  src={principalImg}
                  alt="Principal of Vidya Bharati School"
                  className="w-full h-full object-cover rounded-full border-4 border-primary-foreground/20"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-xl px-6 py-3 shadow-strong"
              >
                <p className="font-heading font-bold text-foreground">Dr. Ramesh Kumar Sharma</p>
                <p className="text-muted-foreground text-sm text-center">Principal</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Principal's Message</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-6">
                Welcome to Our <span className="text-accent">School Family</span>
              </h2>
              
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                <p>
                  "Dear Parents and Students, welcome to Vidya Bharati School. As we embark on another 
                  academic year, I am filled with immense pride and gratitude for being part of this 
                  wonderful institution."
                </p>
                <p>
                  "At Vidya Bharati, we believe that true education goes beyond textbooks. It is about 
                  shaping character, instilling values, and preparing young minds to face life's 
                  challenges with confidence and integrity."
                </p>
                <p>
                  "Our dedicated faculty works tirelessly to ensure that every child receives 
                  personalized attention and guidance. Together, let us continue to build a community 
                  of disciplined, responsible, and successful individuals."
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-primary-foreground font-medium italic">
                  "Discipline Today, Leaders Tomorrow"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Milestones of <span className="text-primary">Growth</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-8 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow inline-block">
                    <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    <h3 className="font-heading font-bold text-foreground text-lg mt-1">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-border" />
                  )}
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;

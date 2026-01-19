import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, School, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const academicPrograms = [
  {
    icon: Baby,
    level: "Pre-Primary",
    grades: "Nursery - KG",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BookOpen,
    level: "Primary",
    grades: "Class 1 - 5",
    color: "from-primary to-primary-light",
  },
  {
    icon: School,
    level: "Middle School",
    grades: "Class 6 - 8",
    color: "from-accent to-accent-light",
  },
  {
    icon: GraduationCap,
    level: "Secondary",
    grades: "Class 9 - 10",
    color: "from-rose-600 to-pink-500",
  },
];

export const AcademicsSection = () => {
  return (
    <section id="academics" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Academics</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            Structured Learning for
            <br />
            <span className="text-accent">Every Stage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive CBSE curriculum from nursery to Class 10
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {academicPrograms.map((program, index) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to="/academics" 
                className="block bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-soft`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                
                <p className="text-primary font-medium text-sm mb-1">{program.grades}</p>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{program.level}</h3>
                
                <div className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Check, Target, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Academic Excellence", description: "Rigorous curriculum for critical thinking" },
  { icon: Heart, title: "Character Building", description: "Values of integrity and responsibility" },
  { icon: BookOpen, title: "Disciplined Learning", description: "Structured environment for focus" },
];

const highlights = [
  "Consistent academic performance",
  "Regular parent-teacher interaction",
  "Holistic co-curricular activities",
  "Safe & nurturing environment",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Shaping Minds,
              <br />
              <span className="text-accent">Building Character</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Vidya Bharti School, we nurture disciplined minds that grow into responsible leaders. 
              Our CBSE-affiliated institution combines academic excellence with character development.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

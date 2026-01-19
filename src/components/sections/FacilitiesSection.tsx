import { motion } from "framer-motion";
import { 
  Building, 
  Monitor, 
  Library, 
  TreePine, 
  Camera, 
  Droplets,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const facilities = [
  { icon: Building, title: "Spacious Classrooms" },
  { icon: Monitor, title: "Computer Lab" },
  { icon: Library, title: "Library" },
  { icon: TreePine, title: "Playground" },
  { icon: Camera, title: "CCTV Security" },
  { icon: Droplets, title: "RO Water" },
];

export const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Facilities</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
              Modern Infrastructure
              <br />
              <span className="text-accent">For Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our campus is equipped with modern facilities to support academic excellence and holistic development.
            </p>
            
            <Link to="/facilities">
              <Button size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
                View All Facilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <facility.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="font-medium text-foreground text-sm">{facility.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

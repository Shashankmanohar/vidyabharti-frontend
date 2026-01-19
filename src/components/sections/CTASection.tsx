import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-primary-dark to-accent rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Admissions Open 2024-25
            </motion.div>
            
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Limited Seats Available
            </h2>
            
            <p className="text-white/75 text-lg mb-8">
              Give your child the foundation for success. Join the Vidya Bharti family today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium group w-full sm:w-auto">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, breadcrumb, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6"
        >
          <Link to="/" className="hover:text-primary-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-foreground">{breadcrumb}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

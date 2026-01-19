import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon background */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6"
        >
          <Icon className="w-8 h-8 text-accent-foreground" />
        </motion.div>
        
        <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

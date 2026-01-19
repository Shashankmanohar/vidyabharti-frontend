import { motion } from "framer-motion";
import { Award, Globe, Shield, Users } from "lucide-react";

const trustItems = [
  { icon: Award, label: "CBSE Affiliated" },
  { icon: Globe, label: "English Medium" },
  { icon: Shield, label: "Safe Campus" },
  { icon: Users, label: "Expert Faculty" },
];

export const TrustStrip = () => {
  return (
    <section className="relative -mt-16 z-10 pb-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-medium border border-border/50 p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const StickyApplyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  // Don't show on admissions page
  const isAdmissionsPage = location.pathname === "/admissions";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
        setIsDismissed(false); // Reset dismiss when back at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isAdmissionsPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed right-4 bottom-24 z-40 flex flex-col items-end gap-2"
        >
          {/* Dismiss button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-full bg-card shadow-soft hover:bg-secondary transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.button>

          {/* Apply Now Button */}
          <Link to="/admissions">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Pulsing ring animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-primary"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <Button 
                size="lg" 
                className="relative shadow-strong hover:shadow-accent flex items-center gap-2 rounded-2xl px-6 py-6 text-base font-bold"
              >
                <GraduationCap className="w-5 h-5" />
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </Button>
            </motion.div>
          </Link>

          {/* Limited seats badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-medium"
          >
            Limited Seats!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Branches", href: "/branches" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const headerBg = isScrolled || !isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg
            ? "bg-card/98 backdrop-blur-md shadow-medium py-2"
            : "bg-transparent py-4"
          }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="Vidya Bharti School Logo"
              className="w-14 h-14 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight transition-colors ${headerBg ? "text-primary" : "text-primary-foreground"
                }`}>
                Vidya Bharti
              </span>
              <span className={`text-xs font-medium tracking-wide transition-colors ${headerBg ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}>
                School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold text-black hover:text-white transition-colors relative group ${headerBg
                      ? isActive ? "text-primary" : "text-foreground hover:text-primary"
                      : isActive ? "text-secondary" : "text-primary-foreground/90 hover:text-primary-foreground"
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    } ${headerBg ? "bg-primary" : "bg-secondary"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919934763185"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${headerBg ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-secondary"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 9934763185</span>
            </a>
            <Link to="/admissions">
              <Button variant={headerBg ? "default" : "heroSolid"} size="sm">
                Admission Open
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${headerBg
                ? "text-foreground bg-secondary hover:bg-primary hover:text-primary-foreground"
                : "text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
              }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-50 lg:hidden bg-card shadow-strong border-l border-border overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-border bg-secondary/50">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-heading font-bold text-primary">Vidya Bharti</p>
                    <p className="text-xs text-muted-foreground">School</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-5 flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 py-3.5 px-4 rounded-xl font-medium transition-all ${isActive
                            ? "bg-primary text-primary-foreground shadow-accent"
                            : "text-foreground hover:bg-secondary hover:text-primary"
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 rounded-full bg-secondary"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Contact & CTA */}
              <div className="p-5 mt-auto border-t border-border bg-secondary/30">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-all mb-3"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" size="lg">
                    Admission Open
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Welcome", href: "#welcome" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Let's Connect", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const navHeight = navRef.current?.offsetHeight ?? 80;
      const scrollPos = window.scrollY + navHeight + 120;

      const sectionElements = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; top: number }[];

      sectionElements.sort((a, b) => a.top - b.top);

      let current = sectionElements[0]?.id || "welcome";
      for (const section of sectionElements) {
        if (scrollPos >= section.top) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: scrollIntoView ignores the fixed navbar, so sections used to end up
  // hidden/"touching" behind it. We now scroll to an offset that subtracts
  // the navbar's real (measured) height instead.
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const navHeight = navRef.current?.offsetHeight ?? 100;
      const buffer = 12; // small breathing room below the navbar
      const top =
        el.getBoundingClientRect().top + window.scrollY - navHeight - buffer;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-navy-950/90 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#welcome")}
          className="flex items-center gap-2 group relative py-1"
        >
          <img
            src="/images/MainLogo.png"
            alt="The Serene Collective"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-navy-900 font-semibold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("#contact")}
          className="hidden md:flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-navy-800 hover:shadow-glow-navy transition-all duration-300 btn-shine"
        >
          Get Started
          <ArrowRight size={14} />
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-sm"
          aria-label="Toggle menu"
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
                <X size={22} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/10 text-white"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-navy-900 bg-white font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={() => scrollToSection("#contact")}
                className="bg-navy-900 text-white px-6 py-3.5 rounded-full text-sm font-medium mt-4 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp, Shield, MapPin } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -60]);
  const imageY = useTransform(scrollY, [0, 600], [0, -40]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <motion.div
          animate={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: mousePosition.x * -0.3, y: mousePosition.y * -0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-[100px]"
        />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />

      {/* Floating Side Cards */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-[20%] left-[3%] md:left-[8%] z-[2] hidden md:block"
      >
        <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
          <TrendingUp className="w-5 h-5 text-amber-400 mb-2" />
          <p className="text-white/70 text-xs font-medium">Growth Rate</p>
          <p className="text-white text-lg font-bold">+24.8%</p>
        </div>
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "1.5s" }}
        className="absolute top-[25%] right-[3%] md:right-[8%] z-[2] hidden md:block"
      >
        <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
          <Shield className="w-5 h-5 text-emerald-400 mb-2" />
          <p className="text-white/70 text-xs font-medium">Trust Score</p>
          <p className="text-white text-lg font-bold">4.9/5</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 flex flex-col items-center text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-6 sm:mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Premier Real Estate Collective
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="overflow-hidden mb-2">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              <span className="italic font-light text-amber-400">smart</span> Real Estate
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="overflow-hidden mb-6 sm:mb-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              Investments
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-3 font-light leading-relaxed px-2"
          >
            Expert guidance. Real results. A clear path to build wealth with peace of mind.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-amber-500/80 font-semibold mb-8 sm:mb-10"
          >
            With Peace of Mind
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0"
          >
            <button
              onClick={scrollToContact}
              className="group bg-amber-500 text-slate-950 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]"
            >
              Get a FREE Consultation
              <span className="w-7 h-7 rounded-full bg-slate-950/20 flex items-center justify-center">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
            
            <button
              onClick={scrollToAbout}
              className="group text-white/90 bg-white/5 backdrop-blur-md w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-14 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg sm:max-w-xl w-full px-4"
          >
            {[
              { value: "$2B+", label: "Assets Managed" },
              { value: "500+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* House Image Showcase */}
      <motion.div
        style={{ y: imageY }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 md:mt-8 pb-8 sm:pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Glow Behind Image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-amber-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          
          {/* Image Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <img
              src="/images/Real State imges01.jpg"
              alt="Premium Real Estate Property"
              className="w-full h-auto object-cover max-h-[280px] sm:max-h-[380px] md:max-h-[450px] lg:max-h-[500px]"
            />
            
            {/* Bottom Gradient Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            {/* Property Tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <MapPin size={14} className="text-amber-400" />
              <span className="text-white text-xs sm:text-sm font-medium">Featured Property</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-[5]" />
    </section>
  );
}
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="relative bg-white py-28 md:py-36 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Why Serene */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gold-500" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">
                Why Serene
              </p>
            </div>
            <h3 className="text-2xl font-display font-semibold text-navy-900 leading-snug mb-6">
              Elevating real estate through trust, clarity, & dedicated guidance.
            </h3>

            {/* House Image under left text */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-card border border-gray-100 bg-gradient-to-b from-gray-50/80 to-navy-50/30 p-4 group"
            >
              <img
                src="/images/house.png"
                alt="Modern Architecture"
                className="w-full h-auto max-h-[300px] sm:max-h-[360px] object-contain mx-auto block group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-radial from-gold-500/20 to-transparent blur-2xl pointer-events-none" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 leading-tight mb-6">
              Your life's changing.{" "}
              <span className="text-gray-300">Don't just find a place — find what's next.</span>{" "}
              We help you move forward with clarity, confidence, and the right agent by your side.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Video Section with enhanced styling */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] md:aspect-[21/8] shadow-elegant"
        >
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          {/* Play indicator */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
            </div>
            <span className="text-white/80 text-xs tracking-[0.15em] uppercase font-medium">Watch Our Story</span>
          </div>
        </motion.div>
      </div>

      {/* Identity Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold-500" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">Our Identity</p>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-4">
            This isn't just <span className="text-gray-300">about real estate.</span>
          </motion.h2>
        </motion.div>

        {/* Diagonal Images with enhanced hover */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { src: "/images/standing girl greay shot.jpg", alt: "Professional Agent", delay: 0 },
            { src: "/images/badroom.jpg", alt: "Modern Interior", delay: 0.1 },
            { src: "/images/men standing.jpg", alt: "Real Estate Professional", delay: 0.2, reverse: true },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`${img.reverse ? 'clip-diagonal-reverse' : 'clip-diagonal'} h-64 md:h-80 overflow-hidden relative group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed"
        >
          It's about identity. Progress. Getting unstuck. You're not just looking for a place. 
          You're looking for alignment. That's what we help you find. At our core, we're more than 
          investors — we're neighbors, problem solvers, and stewards of growth. With every project, 
          we aim to serve with the same commitment and care that defined our military service.
        </motion.p>
      </div>
    </section>
  );
}

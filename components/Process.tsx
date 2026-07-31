"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Talk to a Real Human.",
    desc: "We match you with an expert who actually listens. Understanding your goals is our first priority.",
  },
  {
    num: "02",
    title: "Get Clarity.",
    desc: "We define what you really need, not just what's available. Strategic planning for your investment journey.",
  },
  {
    num: "03",
    title: "Move Forward.",
    desc: "We find what fits — and make it happen. From acquisition to management, we handle it all.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="relative bg-gray-50 py-28 md:py-36 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-gold-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gold-500" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">Process</p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 leading-tight mb-8">
              Real Estate,<br />
              <span className="text-gray-300">Rewired.</span>
            </h2>

            <p className="text-gray-500 mb-10 max-w-md leading-relaxed">
              Three simple steps to transform your real estate journey. We've streamlined the entire process for clarity and confidence.
            </p>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-navy-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-navy-800 hover:shadow-glow-navy transition-all duration-500 flex items-center gap-3 btn-shine"
            >
              Start Your Search
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Right - Steps */}
          <div>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex gap-6 py-8 border-b border-gray-200 last:border-b-0 cursor-default hover:pl-2 transition-all duration-500"
                >
                  {/* Step number with accent line */}
                  <div className="relative flex flex-col items-center">
                    <span className="text-xs font-bold text-gold-500 tracking-wider">{step.num}</span>
                    {i < steps.length - 1 && (
                      <div className="absolute top-6 w-px h-full bg-gradient-to-b from-gold-500/30 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Hover arrow */}
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <ArrowRight size={18} className="text-gold-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

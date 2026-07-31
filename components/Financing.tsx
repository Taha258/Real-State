"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const supportCards = [
  {
    title: "Mortgage Services",
    subtitle: "Flexible financing solutions",
    image: "/images/mortgage-services.jpg",
  },
  {
    title: "Property Management",
    subtitle: "Complete oversight & care",
    image: "/images/property-management.jpg",
  },
  {
    title: "Construction & Development",
    subtitle: "From blueprint to reality",
    image: "/images/development.jpg",
  },
];

const stats = [
  { number: "250+", label: "Properties Managed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "$50M+", label: "Portfolio Value" },
];

export default function Financing() {
  return (
    <section className="relative bg-navy-900 text-white py-28 md:py-36 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-20 right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Financing Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gold-500" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-500">Financing</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Flexible Financing,<br />
              <span className="text-gray-500">More Opportunities!</span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center md:text-left"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold-500 font-display mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              At The Serene Collective, we don't believe financing should stand in the way of opportunity. 
              That's why we offer in-house financing options for qualified buyers and investors, giving sellers 
              access to a larger pool of potential purchasers and helping investors secure their next deal with 
              greater flexibility.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              The real estate market never stands still — and neither do we. Our experts offer continued support 
              beyond the sale, helping you maximize your investment.
            </p>
          </motion.div>
        </div>

        {/* Support Beyond */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Support Beyond
              </h3>
              <p className="text-gray-500">Buying and Selling</p>
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-gray-500 tracking-[0.15em] uppercase">Explore All →</p>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {supportCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer card-lift"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400 mb-2 font-medium">
                  {card.subtitle}
                </p>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {card.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors group/btn">
                  <span className="border-b border-white/20 group-hover/btn:border-gold-500 pb-0.5 transition-colors">
                    Learn More
                  </span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

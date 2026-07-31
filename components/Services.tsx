"use client";

import { motion } from "framer-motion";
import { Home, FolderOpen, Handshake, DoorOpen, ArrowUpRight } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Buy",
    subtitle: "PROPERTY ACQUISITION",
    desc: "Buy smarter with expert agents backed by market analysis, legal, and appraisal pros—dedicated to getting you the best deal, fast. We've done this over countless times, and we know what wins.",
    image: "/images/men standing.jpg",
    objectPos: "object-top",
  },
  {
    icon: FolderOpen,
    title: "Sell",
    subtitle: "PORTFOLIO MANAGEMENT",
    desc: "Manage with precision. Your portfolio gets pro analysis, strategic planning, constant oversight, and agents who never stop working until your assets perform at their peak.",
    image: "/images/sell.jpg",
    objectPos: "object-center",
  },
  {
    icon: Handshake,
    title: "Partner",
    subtitle: "STRATEGIC PARTNERSHIPS",
    desc: "Access hidden opportunities before they hit the market through our network. With decades of experience, we unlock the best deals you won't find anywhere else.",
    image: "/images/room.jpg",
    objectPos: "object-center",
  },
  {
    icon: DoorOpen,
    title: "Exit",
    subtitle: "EXIT STRATEGIES",
    desc: "Plan your exit with confidence. We help you maximize returns and transition smoothly, ensuring every investment concludes with optimal results.",
    image: "/images/rent.jpg",
    objectPos: "object-center",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-950 text-white py-28 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Floating gradient orbs */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-navy-800/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold-500" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-500">
              Services
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              How Serene<br />
              <span className="text-gray-600">Can Help You</span>
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
              From acquisition to exit, we provide end-to-end real estate solutions tailored to your goals and timeline.
            </p>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="space-y-20 md:space-y-32">
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Text */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-700/50 bg-white/5 backdrop-blur-sm text-sm font-medium text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gray-700 to-transparent" />
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
                      {service.subtitle}
                    </p>
                  </div>

                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-5 text-white leading-[1.1]">
                    {service.title}
                    <span className="text-gold-500">.</span>
                  </h3>

                  <p className="text-gray-400 leading-relaxed max-w-md mb-8">
                    {service.desc}
                  </p>

                  <button className="group flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-all duration-300">
                    <span className="border-b border-white/20 group-hover:border-gold-500 transition-colors pb-0.5">
                      Learn More
                    </span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Image */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden group shadow-elegant"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover ${service.objectPos || "object-center"} group-hover:scale-110 transition-transform duration-1000 ease-out`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                    
                    {/* Corner icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <Icon size={18} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 pt-12 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed font-display italic">
              Our certified agents guide you through every stage of real estate with expert knowledge and reliable support.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-navy-900 transition-all duration-500 flex items-center gap-3 whitespace-nowrap btn-shine"
            >
              Get Started with Serene
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:text-white transition-all duration-500">
                <ArrowUpRight size={12} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

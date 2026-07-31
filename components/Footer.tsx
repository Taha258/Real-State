"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Search", href: "#welcome" },
  { name: "Agents", href: "#about" },
  { name: "Join", href: "#contact" },
  { name: "About Us", href: "#about" },
  { name: "Agent Portal", href: "#services" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Youtube", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 to-navy-950/90" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold-500 font-medium mb-6">Ready to Begin?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Find You. We'll Help<br className="hidden md:block" /> You Get There.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
              Take the first step towards your real estate goals. Our team is ready to guide you every step of the way.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-white text-navy-900 px-10 py-4.5 rounded-full text-sm font-semibold hover:bg-gold-500 hover:text-white hover:shadow-glow-gold transition-all duration-500 flex items-center gap-3 mx-auto btn-shine"
          >
            Let's Get Started
            <span className="w-7 h-7 rounded-full bg-navy-900/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-500 text-sm mb-6">Subscribe for market insights and exclusive opportunities.</p>
            <div className="flex border border-gray-700 rounded-full overflow-hidden group focus-within:border-gold-500 transition-colors duration-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 py-3.5 px-5 text-white text-sm placeholder:text-gray-500 focus:outline-none"
              />
              <button className="px-6 bg-white/5 hover:bg-gold-500 text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6 font-medium">Quick Links</h4>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1.5"
              >
                <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                {link.name}
              </button>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6 font-medium">Follow Us</h4>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center justify-between text-gray-400 hover:text-white transition-all duration-300 py-1.5"
              >
                <span className="flex items-center gap-2">
                  <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300" />
                  {link.name}
                </span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-gray-800/50 text-sm text-gray-400">
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-gray-600 mb-1.5">Head Office</p>
            <p className="text-gray-300">Texas, United States</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-gray-600 mb-1.5">Email Us</p>
            <p className="text-gray-300">info@theserenecollective.com</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-gray-600 mb-1.5">Call Us</p>
            <p className="text-gray-300">(346)-698-3786</p>
          </div>
        </div>

        {/* Big Logo */}
        <div className="pt-12 border-t border-gray-800/50 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.06, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[100px] md:text-[160px] lg:text-[200px] font-bold leading-none tracking-tighter text-white select-none text-center"
          >
            SERENE
          </motion.h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600">
          <p>© 2026 The Serene Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Fair Housing Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

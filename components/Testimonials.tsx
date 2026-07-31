"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%.",
    name: "Bernadette Hogan",
    role: "Home Buyer",
    rating: 5,
    image: "/images/couple.jpg",
  },
  {
    quote: "The Serene Collective transformed our investment strategy completely. Their market analysis and guidance helped us secure properties that have already appreciated significantly. A truly professional team.",
    name: "James Rodriguez",
    role: "Property Investor",
    rating: 5,
    image: "/images/room.jpg",
  },
  {
    quote: "From our first consultation to closing day, the experience was seamless. They understood our needs perfectly and delivered beyond our expectations. The best real estate team in Texas.",
    name: "Sarah Mitchell",
    role: "First-time Buyer",
    rating: 5,
    image: "/images/badroom.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="relative bg-gray-50 py-28 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200/30 to-transparent" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gold-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gold-500" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">Testimonials</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900">
              Don't Take Our<br />
              <span className="text-gray-300">Word for It.</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-navy-900/30 bg-navy-50/60 text-navy-900 flex items-center justify-center hover:bg-navy-900 hover:border-navy-900 hover:text-white shadow-sm transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-navy-900/30 bg-navy-50/60 text-navy-900 flex items-center justify-center hover:bg-navy-900 hover:border-navy-900 hover:text-white shadow-sm transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-sm text-navy-900 ml-2 font-semibold tracking-wider font-mono">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pagination dots */}
            <div className="flex gap-2 mb-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-gold-500"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Quote className="w-12 h-12 text-gold-500/30 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-xl md:text-2xl text-navy-900 leading-relaxed mb-10 font-display italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-gold-500" />
                  <div>
                    <p className="font-semibold text-navy-900 text-sm tracking-wide uppercase">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{testimonial.role}</p>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

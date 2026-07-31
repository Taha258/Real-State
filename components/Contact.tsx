"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "info@theserenecollective.com" },
    { icon: Phone, label: "Call Us", value: "(346)-698-3786" },
    { icon: MapPin, label: "Visit Us", value: "Texas, United States" },
  ];

  return (
    <section id="contact" className="relative bg-white py-28 md:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-40 -left-20 w-40 h-40 bg-navy-100/30 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gold-500" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold-600">Contact</p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-6">
              Let's Talk
              <span className="text-gold-500">.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-md">
              Ready to start your real estate journey? Fill out the form and our team will reach out 
              to discuss your investment goals within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center group-hover:bg-navy-900 group-hover:shadow-glow-navy transition-all duration-500">
                      <Icon className="w-5 h-5 text-navy-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 tracking-wider uppercase">{item.label}</p>
                      <p className="font-medium text-navy-900 text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Phone Mockup */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-56 h-[420px] border-2 border-gray-300/80 rounded-[40px] p-3 mx-auto shadow-card"
                style={{ backgroundColor: "rgb(244, 245, 247)" }}
              >
                <div 
                  className="w-full h-full rounded-[32px] p-4 flex flex-col gap-3 overflow-hidden border border-gray-200/60 shadow-inner"
                  style={{ backgroundColor: "rgb(244, 245, 247)" }}
                >
                  {/* Notch */}
                  <div className="w-20 h-5 bg-gray-300/60 rounded-full mx-auto mb-2" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-navy-100 p-3 rounded-2xl rounded-tl-none text-xs text-navy-900"
                  >
                    Hi, I'm interested in learning more about your investment opportunities.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-gold-100 p-3 rounded-2xl rounded-tr-none text-xs text-navy-900 self-end"
                  >
                    We'd love to help! Let's schedule a consultation.
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="bg-navy-100 p-3 rounded-2xl rounded-tl-none text-xs text-navy-900"
                  >
                    That sounds great. When are you available?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="bg-gold-100 p-3 rounded-2xl rounded-tr-none text-xs text-navy-900 self-end"
                  >
                    How about this Thursday at 2 PM? 🗓️
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Form card with prominent gray background and shadow */}
            <div className="bg-gray-100/90 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl shadow-navy-900/5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-2">Thank You!</h3>
                  <p className="text-gray-500">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "firstName", label: "First name", type: "text" },
                      { name: "lastName", label: "Last name", type: "text" },
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === field.name || formData[field.name as keyof typeof formData]
                            ? "text-[10px] top-1.5 text-gold-600 tracking-wider uppercase font-semibold"
                            : "text-sm top-3.5 text-gray-500 font-medium"
                        }`}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white border border-gray-300 rounded-xl px-4 pt-6 pb-2.5 text-navy-900 text-sm font-medium focus:outline-none focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 shadow-sm transition-all duration-300"
                          required
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { name: "email", label: "Email", type: "email" },
                    { name: "phone", label: "Phone", type: "tel" },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === field.name || formData[field.name as keyof typeof formData]
                          ? "text-[10px] top-1.5 text-gold-600 tracking-wider uppercase font-semibold"
                          : "text-sm top-3.5 text-gray-500 font-medium"
                      }`}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 pt-6 pb-2.5 text-navy-900 text-sm font-medium focus:outline-none focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 shadow-sm transition-all duration-300"
                        required
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "text-[10px] top-1.5 text-gold-600 tracking-wider uppercase font-semibold"
                        : "text-sm top-3.5 text-gray-500 font-medium"
                    }`}>
                      Let's Talk About Your Investment Goals
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 pt-6 pb-2.5 text-navy-900 text-sm font-medium focus:outline-none focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 shadow-sm transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy-900 text-white py-4 rounded-full text-sm font-semibold hover:bg-navy-800 shadow-md hover:shadow-glow-navy transition-all duration-500 flex items-center justify-center gap-3 group btn-shine mt-2"
                  >
                    Submit Inquiry
                    <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                    By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

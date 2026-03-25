"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaShareAlt, FaExternalLinkAlt, FaClock, FaUsers, FaHandshake, FaRocket, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSubmitMessage("✅ Message sent successfully! We'll get back to you within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage("❌ Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setSubmitMessage("❌ Network error. Please check your connection and try again.");
    }

    setIsSubmitting(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "066ad15a-2f3a-4c38-84ef-66544dc04620");
    formData.append("subject", "Newsletter Subscription - OmniSolve AI");
    formData.append("from_name", "Newsletter Subscriber");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("✅ Successfully subscribed to our newsletter!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("❌ Network error. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden contact-bg"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>

        <motion.div
          className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your business with AI? Book a free demo and see results in 48 hours.
          </p>
          <motion.button
            className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('consultation-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Book Free Demo
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              SECP-registered, NICAT-backed, and delivering AI solutions that actually work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaRocket,
                title: "48hr Deployment",
                description: "Get your AI agent live in as little as 48 hours"
              },
              {
                icon: FaUsers,
                title: "NICAT Cohort 7",
                description: "Backed by Pakistan's premier tech incubator"
              },
              {
                icon: FaHandshake,
                title: "Free 2-Week Pilot",
                description: "Try before you commit — no risk, no obligation"
              },
              {
                icon: FaClock,
                title: "24/7 AI Support",
                description: "Your AI agents work round the clock, every day"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-2xl text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Reach us via WhatsApp, email, or fill out the form below
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* WhatsApp Contact */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">WhatsApp Us</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Quick questions? Send a WhatsApp message for instant response.
                    </p>
                    <a
                      href="https://wa.me/525547000330?text=Hi%20OmniSolve%20AI%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                    >
                      <span>+52 5547000330</span>
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">Email Us</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Send us your project details and we&apos;ll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:amina@omnisolveai.org"
                      className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors group"
                    >
                      <span>amina@omnisolveai.org</span>
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaShareAlt className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">Follow Us</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Stay updated with our latest AI innovations.
                    </p>
                    <div className="flex gap-3">
                      {[
                        { icon: FaLinkedin, href: "https://www.linkedin.com/company/omnisolveai/", color: "hover:bg-[#0077B5]" },
                        { icon: FaInstagram, href: "https://www.instagram.com/omnisolveai?igsh=c3QzMGF1a2psd2Nm&utm_source=qr", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500" },
                        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61588014185736", color: "hover:bg-[#1877F2]" },
                        { icon: FaYoutube, href: "https://www.youtube.com/@OmniSolveAI", color: "hover:bg-[#FF0000]" }
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <social.icon className="text-lg" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Anchor Point */}
      <div id="consultation-form" className="pt-20"></div>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0.3, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="lg:sticky lg:top-8">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Office</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Based at NICAT, Pakistan&apos;s premier government-backed tech incubator in Islamabad. We serve clients across Pakistan and internationally.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl mb-2">Office Location</h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="font-medium">OMNISOLVEAI (SMC-PRIVATE) LIMITED</p>
                      <p>ALPHA Square Chaklala Old Airport</p>
                      <p>Chaklala Road Rawalpindi, Punjab</p>
                      <p className="text-sm text-gray-500 mt-2">SECP Corp ID: 0315980</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 p-6 rounded-2xl border-l-4 border-accent">
                  <h4 className="font-semibold text-primary mb-2">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (PKT)</p>
                    <p>AI Agents: 24/7 Available</p>
                    <p className="text-sm text-gray-500 mt-2">We accommodate all time zones for client meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0.3, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Start Your AI Journey</h2>
                <p className="text-gray-600">Book a free demo — we&apos;ll get back to you within 24 hours</p>
              </div>

              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="066ad15a-2f3a-4c38-84ef-66544dc04620" />

                {/* Honeypot field for spam protection */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                {/* Custom subject line */}
                <input type="hidden" name="subject" value="New AI Inquiry - OmniSolve AI Website" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company & Role</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. TechCorp, CEO"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service Interested In</label>
                  <select
                    name="project_type"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="ai-voice-agents">AI Voice Agents</option>
                    <option value="whatsapp-ai-agent">WhatsApp AI Agent</option>
                    <option value="ai-lead-generation">AI Lead Generation</option>
                    <option value="ai-sdr-agent">AI SDR Agent</option>
                    <option value="business-automation">Business Process Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tell us about your project *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your current challenges, goals, and how AI could help transform your business..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Success/Error Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center font-medium ${submitMessage.includes('✅')
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold text-lg py-4 rounded-xl shadow-lg transition-all duration-300 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-accent text-white hover:bg-accent/90 hover:shadow-xl'
                    }`}
                  whileHover={!isSubmitting ? { y: -1 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message & Book Demo'
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map - Islamabad */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us in Islamabad</h2>
            <p className="text-gray-600 text-lg">NICAT — National Incubation Center, H-9, Islamabad</p>
          </motion.div>

          <motion.div
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[450px]">
              <iframe
                title="OmniSolve AI Location - NICAT Islamabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8833779768!2d73.0387!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb86e6e9e1b%3A0x5e3e43cc99a7c6a1!2sNational%20Incubation%20Center%20Islamabad!5e0!3m2!1sen!2spk!4v1709657629384!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="text-center">
                <a
                  href="https://maps.google.com/?q=National+Incubation+Center+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-accent font-semibold hover:text-primary transition-colors duration-300 text-sm"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  View in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead with AI
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get exclusive insights on AI trends, case studies, and product updates from OmniSolve AI — delivered monthly.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your business email"
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent border-0 shadow-lg"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </form>

            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
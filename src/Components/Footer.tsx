"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/company/omnisolveai/", 
      icon: FaLinkedin, 
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077B5]"
    },
    { 
      href: "https://x.com/omnisolveai", 
      icon: FaTwitter, 
      label: "Twitter/X",
      hoverColor: "hover:text-[#1DA1F2]"
    },
    { 
      name: "Instagram",
      icon: FaInstagram, 
      href: "https://www.instagram.com/omnisolveai?igsh=c3QzMGF1a2psd2Nm&utm_source=qr",
      hoverColor: "hover:text-[#E4405F]"
    },
    {
      name: "Facebook",
      icon: FaFacebook, 
      href: "https://www.facebook.com/profile.php?id=61588014185736",
      hoverColor: "hover:text-[#1877F2]"
    },
    { 
      href: "https://www.youtube.com/@OmniSolveAI", 
      icon: FaYoutube, 
      label: "YouTube",
      hoverColor: "hover:text-[#FF0000]"
    }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Left Section - Logo & Tagline */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link href="/" className="inline-block mb-6">
                <div className="text-3xl font-bold">
                  <span className="text-white">Omnisolve</span>
                  <span className="text-accent ml-1">AI</span>
                </div>
              </Link>
              
              {/* Tagline */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-xs mb-4">
                Pakistan&apos;s AI Agency — Built for the World.
              </p>
              <p className="text-gray-400 text-sm">
                OMNISOLVEAI (SMC-PRIVATE) LIMITED
              </p>
              <p className="text-gray-400 text-sm">
                Global HQ: Islamabad
              </p>
            </motion.div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="block text-gray-300 hover:text-accent transition-colors duration-300 text-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Right Section - Contact & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
              
              {/* Contact Email */}
              <div className="mb-4">
                <a 
                  href="mailto:amina@omnisolveai.org"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <HiMail 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-base">amina@omnisolveai.org</span>
                </a>
              </div>

              {/* Secondary Email */}
              <div className="mb-4">
                <a 
                  href="mailto:info@omnisolveai.org"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <HiMail 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-base">info@omnisolveai.org</span>
                </a>
              </div>

              {/* WhatsApp Number */}
              <div className="mb-8">
                <a 
                  href="https://wa.me/525547000330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <FaWhatsapp 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-base">+52 5547000330</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white/10 rounded-full text-gray-300 transition-all duration-300 ${social.hoverColor} hover:bg-accent/20 hover:scale-110`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Address */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Our Location</h3>
              
              {/* Company Address */}
              <div className="mb-8">
                <div className="text-gray-300 space-y-1">
                  <p className="font-medium">OMNISOLVEAI (SMC-PRIVATE) LIMITED</p>
                  <p>ALPHA Square Chaklala Old Airport</p>
                  <p>Chaklala Road Rawalpindi, Punjab</p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Achievements</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Enterprise Grade Security & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>NICAT Cohort 7 — Selected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>FAO AMR Competition Winner 2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-center md:text-left">
              © 2026 OMNISOLVEAI (SMC-PRIVATE) LIMITED. All rights reserved.
            </p>
            
            {/* Verify Link */}
            <div className="flex space-x-6 text-sm">
              {/* Global compliance removed link */}
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = (path: string) =>
    `transition-all duration-300 ${
      isActive(path)
        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold'
        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-light">
      <div className="max-w-7xl mx-auto px-1 lg:px-2">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Image
              src="/logo.png"
              alt="Omnisolve AI Logo"
              width={80}
              height={80}
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="text-primary">Omni</span>
              <span className="text-accent">solve</span>
              <span className="text-primary"> AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass(link.href)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <Link href="/contact">
              <button className="flex items-center gap-1 px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 bg-accent text-white font-medium md:font-semibold text-xs md:text-sm lg:text-base rounded-md lg:rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-sm md:shadow-md hover:shadow-lg border border-accent">
                Book Free Demo
                <HiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-light">
              <span className="text-xl font-bold">
                <span className="text-primary">Omni</span>
                <span className="text-accent">solve</span>
                <span className="text-primary"> AI</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-text-primary hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6">
              <ul className="space-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block ${linkClass(link.href)}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA */}
              <div className="mt-8">
                <Link href="/contact">
                  <button 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-md border border-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book Free Demo
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

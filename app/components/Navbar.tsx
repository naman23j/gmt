'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Our Office', href: '#office' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md py-5 border-b border-sand-200/50'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Header */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-charcoal-900 group-hover:text-earth-accent transition-colors">
              Dr. Maya Reynolds
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-charcoal-500 font-sans font-medium mt-0.5">
              Psychologist • Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation Links - Generous Horizontal Spacing */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.12em] font-medium text-charcoal-800 hover:text-earth-accent transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTA - Understated Minimal Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="text-xs uppercase tracking-[0.12em] font-medium text-sand-50 bg-charcoal-900 hover:bg-earth-accent transition-colors px-6 py-3 rounded-none"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-b border-sand-200 px-6 pt-6 pb-8 space-y-5 animate-in fade-in duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-charcoal-900 hover:text-earth-accent border-b border-sand-200/40 pb-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-block text-center text-xs uppercase tracking-[0.12em] font-medium text-sand-50 bg-charcoal-900 py-3.5"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

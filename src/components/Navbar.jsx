import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../assets/logo';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Our Mission', href: '#mission' },
    { title: 'Our Team', href: '#team' },
    { title: 'Success Stories', href: '#success-stories' },
    { title: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <Logo className="h-10 w-10 text-primary" />
            <div className="text-primary font-serif">
              <h1 className="text-lg font-semibold leading-tight">Aravali</h1>
              <p className="text-xs leading-tight">Entrepreneurship Foundation</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="px-3 py-2 text-sm rounded-md text-primary hover:bg-primary-lighter hover:bg-opacity-10 transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block px-3 py-2 text-primary hover:bg-primary-lighter hover:bg-opacity-10 rounded-md transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
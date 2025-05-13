import { Logo } from '../assets/logo';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-light bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10 text-primary" />
              <div className="text-primary font-serif">
                <h1 className="text-lg font-semibold leading-tight">Aravali</h1>
                <p className="text-xs leading-tight">Entrepreneurship Foundation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering entrepreneurs to build innovative, sustainable businesses that create economic opportunities and address local challenges.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-primary hover:text-primary-light" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-primary hover:text-primary-light" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-primary hover:text-primary-light" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-primary hover:text-primary-light" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-primary hover:text-primary-light" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#mission" className="text-gray-600 hover:text-primary transition-colors duration-300">Our Mission</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-primary transition-colors duration-300">Our Team</a></li>
              <li><a href="#success-stories" className="text-gray-600 hover:text-primary transition-colors duration-300">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Startup Incubation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Mentorship Network</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Seed Funding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Entrepreneurship Workshops</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Rural Innovation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Women Entrepreneurs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  Aravali Entrepreneurship Foundation,<br />
                  Udaipur,<br />
                  Rajasthan - 313001 , India
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                <span className="text-gray-600">aravali.entrepreneurship@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {year} Aravali Entrepreneurship Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
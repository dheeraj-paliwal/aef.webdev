import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Logo } from '../assets/logo';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-background flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary leading-tight mb-6">
                Nurturing Dreams,<br />
                <span className="text-primary-light">Growing Futures</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0"
            >
              Aravali Entrepreneurship Foundation empowers aspiring entrepreneurs with 
              the skills, resources, and support needed to turn innovative ideas into 
              successful, sustainable businesses.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#about" 
                className="bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Get Involved
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            <Logo className="w-64 h-64 sm:w-80 sm:h-80 text-primary" />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <a href="#about" className="text-primary hover:text-primary-light">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import hostelHero from '../assets/images/hostel_hero.jpg';

const Hero = ({ content, onOpenModal }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-16">
      {/* Background Image with Solid Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hostelHero} 
          alt="Gurukul Boys Hostel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-white font-600 mb-6 leading-tight">
              {content.hero.title}
            </h1>
            
            <p className="text-lg text-white/90 mb-10 font-400 leading-relaxed">
              {content.hero.tagline}
            </p>

            <motion.a
              href="tel:+917775928111"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2563eb] text-white rounded-[4px] font-600 text-[16px] hover:bg-[#1d4ed8] transition-all duration-300"
            >
              <Phone className="mr-2" size={18} />
              {content.hero.ctaMain}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-5 h-9 border border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

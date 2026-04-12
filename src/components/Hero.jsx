import React from 'react';
import { motion } from 'framer-motion';
import { Phone, UserPlus } from 'lucide-react';
import hostelHero from '../assets/images/hostel_hero.jpg';

const Hero = ({ content, onOpenModal }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hostelHero} 
          alt="Gurukul Boys Hostel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
              {content.hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+917775928111"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-none font-bold text-lg shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                {content.hero.ctaMain}
              </motion.a>
              
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 rounded-none font-bold text-lg shadow-xl hover:bg-gray-50 transition-colors"
              >
                {content.nav.register}
                <UserPlus className="ml-2" size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-none flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

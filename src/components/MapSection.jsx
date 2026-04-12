import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = ({ content }) => {
  // Reliable Google Maps Embed URL
  const addressQuery = encodeURIComponent("Omkar Nagar, opp. SBI Bank, Taroda (Bk) Road, Nanded");
  const mapSrc = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative h-[600px] w-full mt-24">
      {/* Map Background layered with primary dark color to make map look aesthetic */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <iframe
          title="Gurukul Hostel Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover mix-blend-luminosity opacity-70 hover:opacity-100 hover:mix-blend-normal transition-all duration-1000"
        ></iframe>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Floating Glassmorphic Info Card */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center px-4 md:left-20 md:right-auto md:bottom-1/2 md:translate-y-1/2 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/50 w-full max-w-[400px] rounded-3xl"
        >
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-primary-600/40 transform -mt-16 ring-8 ring-white/90">
             <MapPin size={32} />
          </div>
          <h3 className="font-extrabold text-3xl text-gray-900 mb-3 tracking-tight">Our Location</h3>
          <div className="w-12 h-1.5 bg-primary-600 rounded-full mb-6" />
          
          <p className="text-gray-600 font-semibold leading-relaxed text-lg mb-8">
            {content.footer.address}
          </p>
          
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-full space-x-3 bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl hover:bg-primary-600 hover:scale-[1.02] transition-all duration-300 shadow-2xl"
          >
            <Navigation size={20} />
            <span className="tracking-wide">GET DIRECTIONS</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;

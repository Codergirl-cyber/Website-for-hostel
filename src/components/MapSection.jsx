import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = ({ content }) => {
  const addressQuery = encodeURIComponent("Omkar Nagar, opp. SBI Bank, Taroda (Bk) Road, Nanded");
  const mapSrc = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative h-[600px] w-full">
      {/* Map Background */}
      <div className="absolute inset-0 bg-[#f8f9fc]">
        <iframe
          title="Gurukul Hostel Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-300"
        ></iframe>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Info Card */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center px-4 md:left-16 md:right-auto md:bottom-1/2 md:translate-y-1/2 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 sm:p-10 shadow-2xl border border-[#e5e7eb] w-full max-w-[400px]"
        >
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 bg-[#2563eb] rounded-[4px] flex-shrink-0 flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-600 text-[18px] text-[#1a1a2e]">Our Location</h3>
            </div>
          </div>
          
          <p className="text-[16px] text-[#6b7280] leading-[1.7] mb-8 font-400">
            {content.footer.address}
          </p>
          
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-full gap-2 bg-[#2563eb] text-white font-600 py-3 px-6 rounded-[4px] hover:bg-[#1d4ed8] transition-all duration-300"
          >
            <Navigation size={18} />
            <span>Get Directions</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;

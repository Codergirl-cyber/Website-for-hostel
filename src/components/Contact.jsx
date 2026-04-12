import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

const Contact = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.contact.title}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions or facilities? Feel free to reach out to us. Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Call Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-10 bg-white shadow-xl shadow-gray-200/50 group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
              <Phone size={32} />
            </div>
            <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Call Us</p>
            <div className="space-y-2">
              <a href="tel:7775928111" className="block text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">+91 77759 28111</a>
              <a href="tel:7721887073" className="block text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">+91 77218 87073</a>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-10 bg-white shadow-xl shadow-gray-200/50 group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
              <MessageSquare size={32} />
            </div>
            <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">WhatsApp</p>
            <div className="space-y-2">
              <a href="https://wa.me/917775928111" target="_blank" rel="noreferrer" className="block text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                {content.contact.whatsapp}
              </a>
              <span className="block text-gray-500 mt-2 text-sm">Available 24/7 for messages</span>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-10 bg-white shadow-xl shadow-gray-200/50 group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <MapPin size={32} />
            </div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Location</p>
            <address className="not-italic text-lg font-bold text-gray-900 leading-relaxed max-w-xs mx-auto">
              {content.footer.address}
            </address>
          </motion.div>

          {/* QR Code */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center text-center p-6 bg-[#630f0f] shadow-xl shadow-gray-200/50 group hover:-translate-y-2 transition-all duration-300 rounded overflow-hidden"
          >
            <img 
              src="/visit-qr.png" 
              alt="Scan to visit Gurukul Boys Hostel" 
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

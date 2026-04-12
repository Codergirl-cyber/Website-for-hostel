import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary-600 tracking-tight">GURUKUL HOSTEL</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              Providing a second home for students since 2014. Excellence in comfort, study environment, and student growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Facilities', 'Rooms', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary-600 transition-colors font-medium flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-3 group-hover:w-3 group-hover:bg-primary-600 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-500 font-medium hover:text-gray-900 transition-colors">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:7775928111">+91 77759 28111</a>
              </div>
              <div className="flex items-center space-x-4 text-gray-500 font-medium hover:text-gray-900 transition-colors">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@gurukulhostel.com" className="break-all">info@gurukulhostel.com</a>
              </div>
              <div className="flex items-start space-x-4 text-gray-500 font-medium hover:text-gray-900 transition-colors">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>{content.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Google Maps link CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Get Directions</h4>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" 
                alt="Map Preview" 
                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Gurukul+Boys+Hostel+Omkar+Nagar+SBI+Bank+Taroda+Nanded" 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/20 transition-colors flex items-center justify-center text-white"
              >
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Open Maps</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium gap-4">
          <p>© {currentYear} Gurukul Boys Hostel. {content.footer.allRights}.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

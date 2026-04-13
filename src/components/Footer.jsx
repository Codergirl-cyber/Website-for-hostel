import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-[18px] font-600 mb-6 leading-tight">
              Gurukul Hostel
            </h3>
            <p className="text-[16px] text-white/70 leading-[1.7] font-400">
              Providing a second home for students since 2014. Excellence in comfort, study environment, and student growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-600 mb-6 uppercase tracking-[0.1em]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Facilities', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-[15px] text-white/70 hover:text-white font-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-[15px] font-600 mb-6 uppercase tracking-[0.1em]">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={18} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+917775928111" className="text-[15px] text-white hover:text-[#2563eb] font-400 transition-colors block">
                    +91 77759 28111
                  </a>
                  <a href="tel:+917721887073" className="text-[15px] text-white hover:text-[#2563eb] font-400 transition-colors block">
                    +91 77218 87073
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@gurukulhostel.com" className="text-[15px] text-white hover:text-[#2563eb] font-400 transition-colors">
                  info@gurukulhostel.com
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <address className="not-italic text-[15px] text-white/70 font-400">
                  {content.footer.address}
                </address>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[14px]">
          <p className="text-white/60 font-400">
            © {currentYear} Gurukul Boys Hostel. {content.footer.allRights}.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white font-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white font-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

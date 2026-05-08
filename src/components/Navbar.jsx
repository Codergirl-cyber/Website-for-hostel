import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ lang, setLang, content, onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu on scroll or resize
    const handleClose = () => setIsOpen(false);
    window.addEventListener('scroll', handleClose);
    window.addEventListener('resize', handleClose);
    return () => {
      window.removeEventListener('scroll', handleClose);
      window.removeEventListener('resize', handleClose);
    };
  }, []);

  const navLinks = [
    { name: content.nav.home, href: "#home" },
    { name: content.nav.about, href: "#about" },
    { name: content.nav.facilities, href: "#facilities" },
    { name: content.nav.gallery, href: "#gallery" },
    { name: content.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-[#e5e7eb] transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Gurukul Boys Hostel Logo" 
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 max-h-10 max-w-10"
              />
              <span className="text-lg font-600 text-[#1a1a2e] transition-colors duration-300 hidden sm:block">
                GURUKUL
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] color-[#374151] font-400 transition-colors duration-300 hover:text-[#2563eb]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side - Language + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className="text-[15px] text-[#374151] font-400 hover:text-[#2563eb] transition-colors duration-300"
            >
              {lang === 'mr' ? 'English' : 'मराठी'}
            </button>
            <button
              onClick={onOpenModal}
              className="px-8 py-2.5 bg-[#2563eb] text-white rounded-[4px] font-600 text-[15px] transition-all duration-300 hover:bg-[#1d4ed8] active:transform active:scale-95"
            >
              {content.nav.register}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className="text-[13px] text-[#374151] font-400 hover:text-[#2563eb]"
            >
              {lang === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a1a2e] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-[#e5e7eb] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-[15px] text-[#374151] font-400 hover:text-[#2563eb] hover:bg-[#f8f9fc] rounded-[4px] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onOpenModal();
              setIsOpen(false);
            }}
            className="w-full mt-4 px-8 py-2.5 bg-[#2563eb] text-white rounded-[4px] font-600 text-[15px] hover:bg-[#1d4ed8] transition-colors"
          >
            {content.nav.register}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

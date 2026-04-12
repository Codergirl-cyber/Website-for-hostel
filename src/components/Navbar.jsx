import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, content, onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, href: "#home" },
    { name: content.nav.about, href: "#about" },
    { name: content.nav.facilities, href: "#facilities" },
    { name: content.nav.gallery, href: "#gallery" },
    { name: content.nav.contact, href: "#contact" },
  ];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Gurukul Boys Hostel Logo" 
                className={`h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 ${isScrolled ? 'shadow-md shadow-gray-200' : 'shadow-none bg-white/90 p-1'}`} 
              />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'} transition-colors duration-300 hidden sm:block`}>
                GURUKUL
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full border transition-all duration-300 ${
                isScrolled 
                ? 'border-primary-600 text-primary-600 hover:bg-primary-50' 
                : 'border-white text-white hover:bg-white/10'
              }`}
            >
              <Globe size={16} />
              <span className="text-sm font-semibold">{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </button>
            <button
              onClick={onOpenModal}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/20 hover:shadow-lg' 
                : 'bg-white text-primary-900 hover:bg-gray-50 shadow-lg'
              }`}
            >
              {content.nav.register}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setLang(lang === 'mr' ? 'en' : 'mr');
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg font-semibold"
            >
              <Globe size={18} />
              <span>{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </button>
            <button
              onClick={() => {
                onOpenModal();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-white rounded-lg font-bold shadow-lg shadow-primary-600/20"
            >
              {content.nav.register}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

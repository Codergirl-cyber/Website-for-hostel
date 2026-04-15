import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';

import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Admin from './components/Admin';
import { content as translations } from './data/content';

function App() {
  const [lang, setLang] = useState('mr');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const content = translations[lang];

  // Simple routing for admin
  if (window.location.pathname.replace(/\/$/, '') === '/admin') {
    return <Admin />;
  }

  // Logic to open modal from other components if needed
  useEffect(() => {
    // We can expose this via context or simple props
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-[#dbeafe] selection:text-[#2563eb] overflow-x-hidden w-full max-w-full relative">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        content={content} 
        onOpenModal={() => setIsModalOpen(true)} 
      />
      
      <main>
        <Hero content={content} onOpenModal={() => setIsModalOpen(true)} />
        
        <About content={content} />
        
        <Facilities content={content} />
        

        
        <Gallery content={content} />
        
        <VideoSection content={content} />
        
        <MapSection content={content} />
      </main>


      <Footer content={content} />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        content={content} 
      />

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <a 
          href="tel:+917775928111"
          className="w-16 h-16 bg-[#2563eb] text-white rounded-full shadow-lg flex items-center justify-center animate-bounce hover:animate-none hover:bg-[#1d4ed8] transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;

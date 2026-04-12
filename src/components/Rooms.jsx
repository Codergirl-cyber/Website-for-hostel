import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, ArrowRight } from 'lucide-react';

const Rooms = ({ content }) => {
  const roomCards = [
    {
      id: 'single',
      type: content.rooms.types.single,
      icon: User,
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      features: ["Personal Desk", "Single Bed", "Attached Balcony"]
    },
    {
      id: 'double',
      type: content.rooms.types.double,
      icon: Users,
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      features: ["Shared Desk", "Separate Beds", "Spacious Wardrobe"]
    },
    {
      id: 'triple',
      type: content.rooms.types.triple,
      icon: Users,
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
      features: ["Group Desk", "Personal Lockers", "Cross Ventilation"]
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{content.rooms.title}</h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roomCards.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-none overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={room.img} 
                  alt={room.type} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full flex items-center space-x-2 shadow-sm">
                  <room.icon size={16} className="text-primary-600" />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{room.id}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{room.type}</h3>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-none font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center group">
                  {content.nav.contact}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;

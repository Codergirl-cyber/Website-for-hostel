import React from 'react';
import { motion } from 'framer-motion';
import { Users, User } from 'lucide-react';

const Rooms = ({ content }) => {
  const roomCards = [
    {
      id: 'single',
      type: content.rooms?.types?.single || 'Single Room',
      icon: User,
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      features: ["Personal Desk", "Single Bed", "Attached Balcony"]
    },
    {
      id: 'double',
      type: content.rooms?.types?.double || 'Double Room',
      icon: Users,
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      features: ["Shared Desk", "Separate Beds", "Spacious Wardrobe"]
    },
    {
      id: 'triple',
      type: content.rooms?.types?.triple || 'Triple Room',
      icon: Users,
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
      features: ["Group Desk", "Personal Lockers", "Cross Ventilation"]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[#1a1a2e] mb-6 leading-tight">
            {content.rooms?.title || 'Our Rooms'}
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400 max-w-2xl">
            Choose the perfect room that fits your needs and preferences.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomCards.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-[#e5e7eb] overflow-hidden flex flex-col h-full hover:border-[#2563eb] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden group aspect-video">
                <img 
                  src={room.img} 
                  alt={room.type} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[20px] font-600 text-[#1a1a2e] mb-6">{room.type}</h3>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#6b7280] text-[15px]">
                      <div className="w-1.5 h-1.5 bg-[#2563eb] flex-shrink-0 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full py-3 bg-[#f8f9fc] border border-[#2563eb] text-[#2563eb] rounded-[4px] font-600 text-[15px] hover:bg-[#2563eb] hover:text-white transition-all duration-300">
                  {content.nav?.contact || 'Inquire Now'}
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

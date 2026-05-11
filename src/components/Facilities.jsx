import React from 'react';
import { motion } from 'framer-motion';
import studyPointImg from '../assets/images/study_point_main.jpg';
import studyPoint2 from '../assets/images/study_point_2.jpg';
import studyPoint3 from '../assets/images/study_point_3.jpg';

const Facilities = ({ content }) => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[#1a1a2e] mb-6 leading-tight">
            {content.facilities.title}
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400 max-w-2xl">
            We provide all essential amenities to make your transition from home to hostel as smooth and comfortable as possible.
          </p>
        </motion.div>

        {/* 2-Column Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {content.facilities.items.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="pl-8 border-l-4 border-[#2563eb] transition-all duration-300 group-hover:border-[#1d4ed8]">
                <h3 className="text-[18px] font-600 text-[#1a1a2e] mb-3 leading-tight">
                  {facility.title}
                </h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Study Point Section - Alternating Layout */}
        {content.facilities.studyPoint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8 border-t border-[#e5e7eb]"
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
              {/* Left: Content */}
              <div className="lg:w-1/2 order-2 lg:order-1 w-full">
                <h3 className="text-[28px] font-600 text-[#1a1a2e] mb-6 leading-tight">
                  {content.facilities.studyPoint.title}
                </h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.7] mb-8 font-400">
                  {content.facilities.studyPoint.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.facilities.studyPoint.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-[#1a1a2e] font-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image Grid - Responsive */}
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="col-span-1 sm:col-span-2 relative overflow-hidden group h-64 sm:h-80 md:h-96">
                    <img 
                      src={studyPointImg} 
                      alt="Gurukul Study Point Area" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-[#e5e7eb]" />
                  </div>
                  <div className="col-span-1 relative overflow-hidden group h-64 sm:h-72">
                    <img 
                      src={studyPoint2} 
                      alt="Study Area" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-[#e5e7eb]" />
                  </div>
                  <div className="col-span-1 relative overflow-hidden group h-64 sm:h-72">
                    <img 
                      src={studyPoint3} 
                      alt="Office Area" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-[#e5e7eb]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Facilities;

import React from 'react';
import { motion } from 'framer-motion';
import {
  Utensils,
  Droplets,
  Waves,
  ShieldCheck,
  BookOpen,
  Shirt,
  Sparkles
} from 'lucide-react';
import studyPointImg from '../assets/images/study_point_main.jpg';
import studyPoint2 from '../assets/images/study_point_2.jpg';
import studyPoint3 from '../assets/images/study_point_3.jpg';

const facilityConfig = [
  { icon: Utensils, color: 'from-amber-400 to-orange-500', bgColor: 'bg-amber-500/10' },
  { icon: Waves, color: 'from-blue-400 to-indigo-500', bgColor: 'bg-blue-500/10' },
  { icon: Droplets, color: 'from-cyan-400 to-blue-500', bgColor: 'bg-cyan-500/10' },
  { icon: ShieldCheck, color: 'from-rose-400 to-red-500', bgColor: 'bg-red-500/10' },
  { icon: BookOpen, color: 'from-emerald-400 to-teal-500', bgColor: 'bg-emerald-500/10' },
  { icon: Shirt, color: 'from-purple-400 to-fuchsia-500', bgColor: 'bg-purple-500/10' }
];

const Facilities = ({ content }) => {
  return (
    <section id="facilities" className="relative py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary-100/30 blur-[120px] rounded-full -z-0 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50/50 blur-[80px] rounded-full -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6 tracking-wide uppercase">
              <Sparkles size={14} className="mr-2" />
              Premium Amenities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              {content.facilities.title}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-xl leading-relaxed font-light">
              We provide all essential amenities to make your transition from home to hostel as smooth and comfortable as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {content.facilities.items.map((facility, index) => {
            const config = facilityConfig[index % facilityConfig.length];
            const Icon = config.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card Main Body */}
                <div className="relative bg-white/70 backdrop-blur-xl p-10 h-full border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 rounded-2xl overflow-hidden group-hover:bg-white group-hover:border-primary-100">
                  {/* Decorative corner glow on hover */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className={`w-16 h-16 ${config.bgColor} rounded-2xl flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 shadow-lg shadow-primary-200/50`} />
                    <Icon
                      size={32}
                      className={`relative z-10 transition-colors duration-500 text-gray-700 group-hover:text-white`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[17px] font-light">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Study Point Section */}
        {content.facilities.studyPoint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Grid Column */}
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[400px]">
                  <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl group">
                    <img 
                      src={studyPointImg} 
                      alt="Gurukul Study Point Area" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors shadow-inner" />
                  </div>
                  <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
                    <img 
                      src={studyPoint2} 
                      alt="Study Area" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors shadow-inner" />
                  </div>
                  <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
                     <img 
                      src={studyPoint3} 
                      alt="Office Area" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center text-primary-600 font-bold mb-3 tracking-wider uppercase text-sm">
                    <span className="w-8 h-px bg-primary-600 mr-3" />
                    {content.facilities.studyPoint.subtitle}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                    {content.facilities.studyPoint.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {content.facilities.studyPoint.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {content.facilities.studyPoint.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
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

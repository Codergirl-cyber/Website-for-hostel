import React from 'react';
import { motion } from 'framer-motion';
import studentsGroup from '../assets/images/students_group.jpg';

const About = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {content.about.title}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {content.hero.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 italic">
              "{content.about.description}"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-none overflow-hidden shadow-2xl relative z-10 group">
              <img
                src={studentsGroup}
                alt="Gurukul Boys Hostel Students"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100 rounded-none -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-0 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About;

import React from 'react';
import { motion } from 'framer-motion';
import studentsGroup from '../assets/images/students_group.jpg';

const About = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="text-[#1a1a2e] mb-8 leading-tight">
              {content.hero.title}
            </h2>
            <p className="text-[16px] text-[#1a1a2e] leading-[1.7] mb-8 font-400">
              {content.about.description}
            </p>
            <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400">
              We believe in creating an environment where students thrive both academically and personally. With our commitment to safety, cleanliness, and comfort, we provide the perfect foundation for your educational journey.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative overflow-hidden group">
              <img
                src={studentsGroup}
                alt="Gurukul Boys Hostel Students"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-[#e5e7eb]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

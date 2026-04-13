import React from 'react';
import { motion } from 'framer-motion';
import { videos, images } from '../data/media';

const VideoSection = ({ content }) => {
  return (
    <section id="daily-life" className="py-20 bg-white">
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
            {content.videos.title}
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400 max-w-2xl">
            Watch our highlight videos to experience student life at Gurukul.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Prayer Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="aspect-[4/3] md:aspect-video rounded-[4px] overflow-hidden border border-[#e5e7eb] mb-6 group bg-[#1a1a2e]">
              <video 
                src={videos[0].url} 
                controls 
                className="w-full h-full object-cover"
                poster={images[2].url}
              />
            </div>
            <h3 className="text-[20px] font-600 text-[#1a1a2e]">{content.videos.prayer}</h3>
          </motion.div>

          {/* Yoga Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="aspect-[4/3] md:aspect-video rounded-[4px] overflow-hidden border border-[#e5e7eb] mb-6 group bg-[#1a1a2e]">
              <video 
                src={videos[1].url} 
                controls 
                className="w-full h-full object-cover"
                poster={images[1].url}
              />
            </div>
            <h3 className="text-[20px] font-600 text-[#1a1a2e]">{content.videos.yoga}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

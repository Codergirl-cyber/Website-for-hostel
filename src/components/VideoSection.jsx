import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { videos, images } from '../data/media';

const VideoSection = ({ content }) => {
  return (
    <section id="daily-life" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.videos.title}
            </h2>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full mb-6" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Prayer Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="aspect-[4/3] md:aspect-video rounded-none overflow-hidden shadow-2xl border-4 border-gray-50 mb-6 group bg-gray-900">
              <video 
                src={videos[0].url} 
                controls 
                className="w-full h-full object-cover"
                poster={images[2].url} // Using existing dining image as poster
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center">{content.videos.prayer}</h3>
          </motion.div>

          {/* Yoga Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="aspect-[4/3] md:aspect-video rounded-none overflow-hidden shadow-2xl border-4 border-gray-50 mb-6 group bg-gray-900">
              <video 
                src={videos[1].url} 
                controls 
                className="w-full h-full object-cover"
                poster={images[1].url} // Using existing prayer image as poster
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center">{content.videos.yoga}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default VideoSection;

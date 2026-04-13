import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[#1a1a2e] mb-6 leading-tight">
            {content.contact.title}
          </h2>
          <p className="text-[16px] text-[#6b7280] leading-[1.7] font-400 max-w-2xl">
            Have questions about admissions or facilities? Feel free to reach out to us. Our team is here to help you.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Address */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <MapPin size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-[18px] font-600 text-[#1a1a2e] mb-2">Address</h3>
                <address className="not-italic text-[16px] text-[#6b7280] leading-[1.7] font-400">
                  {content.footer.address}
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <Phone size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-[18px] font-600 text-[#1a1a2e] mb-2">Phone</h3>
                <div className="space-y-2">
                  <a href="tel:+917775928111" className="block text-[16px] text-[#2563eb] font-500 hover:text-[#1d4ed8] transition-colors">
                    +91 77759 28111
                  </a>
                  <a href="tel:+917721887073" className="block text-[16px] text-[#2563eb] font-500 hover:text-[#1d4ed8] transition-colors">
                    +91 77218 87073
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <Mail size={24} className="text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-[18px] font-600 text-[#1a1a2e] mb-2">Email</h3>
                <a href="mailto:info@gurukulhostel.com" className="text-[16px] text-[#2563eb] font-500 hover:text-[#1d4ed8] transition-colors">
                  info@gurukulhostel.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-[15px] font-600 text-[#1a1a2e] mb-2">
                  {content.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-[15px] font-600 text-[#1a1a2e] mb-2">
                  {content.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400"
                  placeholder="Your phone number"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-[15px] font-600 text-[#1a1a2e] mb-2">
                  {content.contact.form.message}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-[#2563eb] text-white rounded-[4px] font-600 text-[16px] hover:bg-[#1d4ed8] transition-all duration-300 active:transform active:scale-95"
              >
                {content.contact.form.submit}
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="text-[14px] text-[#10b981] font-500">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

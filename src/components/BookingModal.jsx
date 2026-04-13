import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

const BookingModal = ({ isOpen, onClose, content }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!supabase) {
      alert("Database is not configured. Please check your Supabase settings in the .env file.");
      setLoading(false);
      return;
    }
    
    if (formData.phone.length !== 10) {
      alert("Please enter exactly 10 digits for the phone number.");
      setLoading(false);
      return;
    }
    
    const { error } = await supabase
      .from('Bookings')
      .insert([{
        name: formData.name,
        phone: formData.phone,
        age: formData.age
      }]);

    setLoading(false);
    if (error) {
      alert("Error: " + error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', phone: '', age: '' });
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[8px] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-28 bg-[#2563eb] flex items-center justify-center">
            <h3 className="text-[22px] font-600 text-white tracking-tight">{content.nav.admission}</h3>
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 text-white rounded-[4px] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form / Success State */}
          <div className="p-8">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-[4px] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h4 className="text-[18px] font-600 text-[#1a1a2e] mb-2">Registration Successful!</h4>
                  <p className="text-[15px] text-[#6b7280] leading-relaxed">
                    We have received your admission request. Our team will contact you within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <p className="text-[15px] text-[#6b7280] font-400">Quick Inquiry Form</p>
                  <p className="text-[13px] text-[#9ca3af] mt-1">We'll get back to you within 24 hours.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[14px] font-600 text-[#1a1a2e] mb-2">
                      Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[14px] font-600 text-[#1a1a2e] mb-2">
                      Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      pattern="[0-9]{10}"
                      maxLength="10"
                      title="Phone number must be exactly 10 digits"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      placeholder="10 digit phone number"
                      className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[14px] font-600 text-[#1a1a2e] mb-2">
                      Age
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="Your age"
                      className="w-full px-4 py-3 text-[16px] text-[#1a1a2e] bg-[#f8f9fc] border border-[#e5e7eb] rounded-[4px] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all font-400"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading || !supabase}
                  className="w-full py-3 bg-[#2563eb] text-white rounded-[4px] font-600 text-[15px] hover:bg-[#1d4ed8] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Submitting...
                    </>
                  ) : !supabase ? "Missing Database Config" : "Submit Request"}
                </button>

                <div className="pt-4 border-t border-[#e5e7eb] text-center">
                  <p className="text-[13px] font-500 text-[#6b7280] mb-3">OR CALL IMMEDIATELY:</p>
                  <a href="tel:7775928111" className="text-[#2563eb] font-600 text-[15px] hover:text-[#1d4ed8] transition-colors">
                    +91 77759 28111
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;

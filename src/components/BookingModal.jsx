import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Calendar, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
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
          className="absolute inset-0 bg-primary-950/60 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.9, y: 20 }}
           className="relative w-full max-w-lg bg-white rounded-none shadow-2xl overflow-hidden"
           onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-32 bg-primary-600 flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{content.nav.admission}</h3>
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form / Success State */}
          <div className="p-10">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h4>
                  <p className="text-gray-500">We have received your admission request. Our team will contact you within 24 hours.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center">
                  <p className="text-gray-500 font-medium">Quick Inquiry Form</p>
                  <p className="text-sm text-gray-400 mt-1">We'll get back to you within 24 hours.</p>
                </div>

                <div className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={content.contact.form.name}
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-0 rounded-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="tel" 
                      pattern="[0-9]{10}"
                      maxLength="10"
                      title="Phone number must be exactly 10 digits"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      placeholder={content.contact.form.phone}
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-0 rounded-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="text" 
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="Your Age"
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-0 rounded-none focus:ring-2 focus:ring-primary-600 transition-all font-medium"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading || !supabase}
                  className="w-full py-5 bg-primary-600 text-white rounded-none font-black text-lg hover:shadow-xl hover:shadow-primary-600/30 transition-all uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Submitting...
                    </>
                  ) : !supabase ? "Missing Database Config" : "Submit Request"}
                </button>

                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-400">OR CALL IMMEDIATELY:</p>
                  <a href="tel:7775928111" className="text-primary-600 font-extrabold">+91 77759 28111</a>
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

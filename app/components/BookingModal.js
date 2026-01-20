'use client';

import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    phone: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowThankYou(true);
    setFormData({ name: '', eventDate: '', phone: '' });
  };

  const handleClose = () => {
    setShowThankYou(false);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      <AnimatePresence mode="wait">
        {!showThankYou ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1a1a1a] border-2 border-[#b38b59]/30 rounded-2xl max-w-lg w-full p-8 shadow-2xl shadow-[#b38b59]/20"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#b38b59] hover:text-[#d4af6a] transition"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="serif-heading text-3xl font-bold text-[#b38b59] mb-2">Book Your Appointment</h2>
              <p className="text-[#8B7355]">Fill in your details and we&apos;ll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-[#b38b59]/40 focus:border-[#b38b59] outline-none text-[#b38b59] placeholder-[#8B7355]/60 py-3 text-base transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label className="block text-[#8B7355] text-sm mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#1a1a1a]/50 border-0 border-b-2 border-[#b38b59]/40 focus:border-[#b38b59] outline-none text-[#b38b59] py-3 px-2 text-base transition-colors duration-300 rounded-t-lg
                  [&::-webkit-calendar-picker-indicator]:cursor-pointer 
                  [&::-webkit-calendar-picker-indicator]:opacity-70
                  [&::-webkit-calendar-picker-indicator]:hover:opacity-100
                  [&::-webkit-calendar-picker-indicator]:filter-[invert(0.6)sepia(1)saturate(3)hue-rotate(5deg)]"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-[#b38b59]/40 focus:border-[#b38b59] outline-none text-[#b38b59] placeholder-[#8B7355]/60 py-3 text-base transition-colors duration-300"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#b38b59] text-black rounded-full font-semibold text-base hover:bg-[#d4af6a] transition-all duration-300"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", damping: 20 }}
            className="relative bg-[#1a1a1a] border-2 border-[#b38b59]/30 rounded-2xl max-w-md w-full p-12 shadow-2xl shadow-[#b38b59]/30"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-[#b38b59]/10 rounded-full"
              >
                <CheckCircle size={60} className="text-[#b38b59]" strokeWidth={2} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="serif-heading text-4xl font-bold text-[#b38b59] mb-4"
              >
                Thank You!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#8B7355] text-lg mb-8 leading-relaxed"
              >
                Your booking request has been received. We&apos;ll contact you shortly to confirm your appointment.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleClose}
                className="px-8 py-3 bg-[#b38b59] text-black rounded-full font-semibold text-base hover:bg-[#d4af6a] transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

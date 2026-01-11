'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', eventDate: '', phone: '' });
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
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#1a1a1a] border-2 border-[#b38b59]/30 rounded-2xl max-w-lg w-full p-8 shadow-2xl shadow-[#b38b59]/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b38b59] hover:text-[#d4af6a] transition"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="serif-heading text-3xl font-bold text-[#b38b59] mb-2">Book Your Appointment</h2>
          <p className="text-[#8B7355]">Fill in your details and we'll get back to you shortly</p>
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
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b-2 border-[#b38b59]/40 focus:border-[#b38b59] outline-none text-[#b38b59] placeholder-[#8B7355]/60 py-3 text-base transition-colors duration-300"
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
      </div>
    </div>
  );
}

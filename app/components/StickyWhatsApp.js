'use client';

import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  const whatsappNumber = '8801234567890';
  const message = 'Hi! I would like to inquire about your henna services.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#b38b59]/50 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="text-black" size={28} />
      
      <span className="absolute left-full ml-4 px-4 py-2 bg-[#1a1a1a] text-[#b38b59] text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-[#b38b59]/30">
        Chat with us!
      </span>
    </button>
  );
}

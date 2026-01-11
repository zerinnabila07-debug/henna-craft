'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar({ onBookNowClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#home" className="flex items-center">
              <Image 
                src="/logo.png/ideogram-v3.0_A_modern_HC_monogram_logo._The_color_of_the_vines_and_letters_should_be_Antique_-0 (1).jpg" 
                alt="Henna Craft Logo" 
                width={195}
                height={65}
                className="h-[65px] w-auto object-contain"
                priority
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#b38b59] hover:text-[#d4af6a] transition-colors duration-300 font-normal text-base tracking-wide">Home</a>
            <a href="#services" className="text-[#b38b59] hover:text-[#d4af6a] transition-colors duration-300 font-normal text-base tracking-wide">Services</a>
            <a href="#gallery" className="text-[#b38b59] hover:text-[#d4af6a] transition-colors duration-300 font-normal text-base tracking-wide">Gallery</a>
            <button 
              onClick={onBookNowClick}
              className="px-6 py-2 bg-[#b38b59] text-black rounded-full font-semibold text-sm hover:bg-[#d4af6a] transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#b38b59] hover:text-[#d4af6a] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#home" className="block px-4 py-3 text-[#b38b59] hover:bg-[#1a1a1a] rounded-lg font-normal transition-colors duration-300">Home</a>
            <a href="#services" className="block px-4 py-3 text-[#b38b59] hover:bg-[#1a1a1a] rounded-lg font-normal transition-colors duration-300">Services</a>
            <a href="#gallery" className="block px-4 py-3 text-[#b38b59] hover:bg-[#1a1a1a] rounded-lg font-normal transition-colors duration-300">Gallery</a>
            <button 
              onClick={() => { setIsOpen(false); onBookNowClick(); }}
              className="block w-full text-left px-4 py-3 text-[#b38b59] hover:bg-[#1a1a1a] rounded-lg font-normal transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'WE ARE COLORING\nTHE FUTURE';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#b38b59] rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B6F47] rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent rounded-full mb-6 border border-[#b38b59]/40">
          <Sparkles className="text-[#b38b59]" size={18} />
          <span className="text-[#b38b59] font-normal text-sm tracking-wide">Premium Henna Artistry</span>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-full mb-10 border border-[#b38b59]/40 shadow-lg">
          <span className="text-2xl">🌿</span>
          <span className="text-[#b38b59] font-semibold text-sm sm:text-base">
            100% Organic & Chemical-Free Henna - Safe for All Skin Types
          </span>
        </div>
        
        <h1 className="serif-heading text-4xl md:text-6xl font-black text-[#b38b59] mb-10 leading-tight tracking-tight min-h-[120px] md:min-h-[180px]">
          {displayedText.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < displayedText.split('\n').length - 1 && <br />}
            </span>
          ))}
          {!isTypingComplete && (
            <span className="animate-blink">|</span>
          )}
        </h1>
        
        <p className="text-lg sm:text-xl text-[#8B7355] mb-14 max-w-3xl mx-auto leading-relaxed">
          Experience the beauty of traditional henna artistry with modern elegance. 
          Creating stunning designs for your special moments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="px-10 py-4 bg-[#b38b59] text-black rounded-full font-semibold text-base hover:bg-[#d4af6a] transition-all duration-300 transform hover:scale-105 text-center">
            Book Now
          </a>
          <a href="#gallery" className="px-10 py-4 bg-transparent text-[#b38b59] rounded-full font-semibold text-base hover:bg-[#b38b59]/10 transition-all duration-300 transform hover:scale-105 text-center border-2 border-[#b38b59]">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ onBookNowClick }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const allImages = [
    { id: 1, category: 'Bridal', src: '/gallery/bridal.jpg', title: 'Bridal Design 1' },
    { id: 2, category: 'Bridal', src: '/gallery/bridal-2.jpg', title: 'Bridal Design 2' },
    { id: 3, category: 'Bridal', src: '/gallery/bridal-3.jpg', title: 'Bridal Design 3' },
    { id: 4, category: 'Bridal', src: '/gallery/bridal-4.jpg', title: 'Bridal Design 4' },
    { id: 5, category: 'Bridal', src: '/gallery/bridal-5.jpg', title: 'Bridal Design 5' },
    { id: 6, category: 'Bridal', src: '/gallery/bridal-6.jpg', title: 'Bridal Design 6' },
    { id: 7, category: 'Traditional', src: '/gallery/trad.jpg', title: 'Traditional Design 1' },
    { id: 8, category: 'Traditional', src: '/gallery/trad-1.jpg', title: 'Traditional Design 2' },
    { id: 9, category: 'Traditional', src: '/gallery/trad-2.jpg', title: 'Traditional Design 3' },
    { id: 10, category: 'Traditional', src: '/gallery/trad-3.jpg', title: 'Traditional Design 4' },
    { id: 11, category: 'Modern', src: '/gallery/modern.jpg', title: 'Modern Design 1' },
    { id: 12, category: 'Modern', src: '/gallery/modern-1.jpg', title: 'Modern Design 2' },
    { id: 13, category: 'Modern', src: '/gallery/modern-2.jpg', title: 'Modern Design 3' },
    { id: 14, category: 'Festival', src: '/gallery/fest.jpg', title: 'Festival Design 1' },
    { id: 15, category: 'Festival', src: '/gallery/fest-1.jpg', title: 'Festival Design 2' },
    { id: 16, category: 'Festival', src: '/gallery/fest-2.jpg', title: 'Festival Design 3' },
    { id: 17, category: 'Custom', src: '/gallery/custom.jpg', title: 'Custom Design 1' },
    { id: 18, category: 'Custom', src: '/gallery/custom-1.jpg', title: 'Custom Design 2' },
    { id: 19, category: 'Elegant', src: '/gallery/elegant.jpg', title: 'Elegant Design 1' },
    { id: 20, category: 'Elegant', src: '/gallery/elegant-1.jpg', title: 'Elegant Design 2' },
  ];

  const categories = ['All', 'Bridal', 'Traditional', 'Modern', 'Festival', 'Custom', 'Elegant'];

  const filteredImages = activeCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">Our Masterpieces</h2>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto mb-8">
            Explore our collection of stunning henna designs and artistry
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#b38b59] text-black'
                    : 'bg-[#1a1a1a] text-[#b38b59] border border-[#b38b59]/30 hover:bg-[#b38b59]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(179,139,89,0.4)] cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <p className="text-lg font-semibold text-[#b38b59] mb-2">{image.title}</p>
                <p className="text-xs text-[#8B7355] mb-4">{image.category} Collection</p>
                <button 
                  onClick={onBookNowClick}
                  className="px-6 py-2 bg-[#b38b59] text-black rounded-full font-semibold hover:bg-[#d4af6a] transition text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8B7355] text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

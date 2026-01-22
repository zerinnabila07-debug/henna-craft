'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import SectionTransition from './SectionTransition';

export default function Gallery({ onBookNowClick }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBookNowFromModal = () => {
    setSelectedImage(null);
    onBookNowClick();
  };

  return (
    <>
      <SectionTransition variant="bronze" />
      
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">The Vision</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">Our Masterpieces</h2>
            <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Explore our collection of stunning henna designs and artistry
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto mb-12"></div>

            <ScrollReveal delay={0.2} className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#b38b59] to-[#8B6F47] text-black shadow-lg shadow-[#b38b59]/30'
                      : 'bg-[#1a1a1a]/60 text-[#b38b59] border border-[#b38b59]/30 hover:bg-[#b38b59]/10 hover:border-[#b38b59]/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </ScrollReveal>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                onClick={() => handleImageClick(image)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-[#b38b59]/20 hover:border-[#b38b59]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#b38b59]/20"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <p className="text-sm font-semibold text-[#b38b59]">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#8B7355] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </ParallaxSection>
      
      <SectionTransition variant="gradient" />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-[#b38b59] text-black rounded-full hover:bg-[#d4af6a] transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#b38b59]/40">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#b38b59] mb-2">{selectedImage.title}</h3>
                <p className="text-[#8B7355] mb-6">{selectedImage.category} Collection</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-3 bg-[#1a1a1a] text-[#b38b59] border-2 border-[#b38b59]/40 rounded-full font-semibold hover:bg-[#b38b59]/10 transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleBookNowFromModal}
                    className="px-8 py-3 bg-[#b38b59] text-black rounded-full font-semibold hover:bg-[#d4af6a] transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';

export default function InstagramSection() {
  const instagramPosts = [
    { id: 1, image: '/gallery/bridal-3.jpg' },
    { id: 2, image: '/gallery/modern-1.jpg' },
    { id: 3, image: '/gallery/trad-2.jpg' },
    { id: 4, image: '/gallery/fest-2.jpg' },
    { id: 5, image: '/gallery/elegant.jpg' },
    { id: 6, image: '/gallery/custom.jpg' },
  ];

  return (
    <>
      <SectionTransition variant="bronze" />
      
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">Connect With Us</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">
              Follow Our Journey
            </h2>
            <p className="text-xl md:text-2xl text-[#8B7355] leading-relaxed font-light mb-10">
              Join our community and get inspired by our latest designs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto mb-10"></div>
            
            <motion.a
              href="https://instagram.com/hennacraft"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#b38b59] to-[#8B6F47] text-black rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#b38b59]/40 transition-all duration-300"
            >
              <Instagram size={24} />
              Follow @hennacraft
            </motion.a>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            {instagramPosts.map((post, index) => (
              <ScrollReveal 
                key={post.id}
                delay={0.2 + (index * 0.08)}
              >
                <a
                  href="https://instagram.com/hennacraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-[#b38b59]/30 border-2 border-[#b38b59]/20 hover:border-[#b38b59]/60"
                >
                  <Image
                    src={post.image}
                    alt="Instagram Post"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Instagram className="text-[#b38b59]" size={32} />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
      
      <SectionTransition variant="gradient" />
    </>
  );
}

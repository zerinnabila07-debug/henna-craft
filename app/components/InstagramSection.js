'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';

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
    <section className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-[#8B7355] mb-8">
            Join our community and get inspired by our latest designs
          </p>
          
          <a
            href="https://instagram.com/hennacraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#b38b59] to-[#8B6F47] text-black rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#b38b59]/30 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={24} />
            Follow @hennacraft
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/hennacraft"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,139,89,0.4)]"
            >
              <Image
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

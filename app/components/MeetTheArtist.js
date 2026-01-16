'use client';

import Image from 'next/image';

export default function MeetTheArtist() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/gallery/bridal-5.jpg"
              alt="The Artist"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-6">
              The Hands Behind the Art
            </h2>
            
            <p className="text-lg text-[#8B7355] leading-relaxed">
              With over <span className="text-[#b38b59] font-semibold">5+ years of dedicated experience</span>, our master artist has transformed countless special moments into timeless memories through the ancient art of henna.
            </p>

            <p className="text-lg text-[#8B7355] leading-relaxed">
              What began as a childhood fascination with traditional mehndi patterns has blossomed into a passionate profession. Each design is crafted with meticulous attention to detail, blending <span className="text-[#b38b59] font-semibold">traditional techniques with contemporary elegance</span>.
            </p>

            <p className="text-lg text-[#8B7355] leading-relaxed">
              From intimate family gatherings to grand bridal celebrations, we believe every occasion deserves the perfect touch of artistry. Our commitment to using only <span className="text-[#b38b59] font-semibold">100% organic, chemical-free henna</span> ensures that beauty and safety go hand in hand.
            </p>

            <div className="pt-6 border-t border-[#b38b59]/20">
              <p className="text-[#b38b59] font-semibold text-lg mb-2">
                Specializations:
              </p>
              <ul className="space-y-2">
                {['Bridal Mehndi', 'Traditional Patterns', 'Modern Fusion Designs', 'Festival & Occasional Henna'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#8B7355]">
                    <span className="w-2 h-2 bg-[#b38b59] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

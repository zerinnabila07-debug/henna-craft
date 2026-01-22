'use client';

import { Star, User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import SectionTransition from './SectionTransition';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      review: 'The most intricate bridal design I have ever seen! Every detail was perfect and exceeded my expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayesha Khan',
      review: 'Absolutely professional and stunning work. The henna lasted beautifully and the color was rich and deep.',
      rating: 5
    },
    {
      id: 3,
      name: 'Fatima Rahman',
      review: 'Incredible artistry and attention to detail. Made my special day even more memorable with their beautiful designs.',
      rating: 5
    }
  ];

  return (
    <>
      <SectionTransition variant="bronze" />
      
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">Testimonials</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">Client Stories</h2>
            <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed font-light">
              Hear what our valued clients have to say about their experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto mt-8"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal 
                key={testimonial.id}
                delay={0.2 + (index * 0.15)}
              >
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#b38b59]/30 hover:border-[#b38b59]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#b38b59]/20 h-full"
                >
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#2a2a2a] border-2 border-[#b38b59]/40 flex items-center justify-center mb-4">
                  <User className="text-[#b38b59]" size={32} />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#D4AF37] fill-[#D4AF37]"
                      size={20}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[#8B7355] text-center leading-relaxed mb-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <p className="text-[#b38b59] text-center font-semibold">
                {testimonial.name}
              </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
      
      <SectionTransition variant="gradient" />
    </>
  );
}

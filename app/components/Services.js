'use client';

import { Heart, Calendar, Palette } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import SectionTransition from './SectionTransition';

export default function Services({ onBookNowClick }) {
  const services = [
    {
      icon: Heart,
      title: 'Bridal Henna',
      description: 'Intricate and elaborate designs for your special wedding day. Traditional patterns with modern elegance.',
      features: ['Full hand & feet', 'Custom designs', 'Premium quality'],
      image: '/gallery/bridal-2.jpg',
      price: 'Starts from 1500 BDT',
      note: ''
    },
    {
      icon: Calendar,
      title: 'Occasional Henna',
      description: 'Beautiful designs for festivals, parties, and celebrations. Perfect for any special occasion.',
      features: ['Quick application', 'Elegant patterns', 'Affordable pricing'],
      image: '/gallery/fest-1.jpg',
      price: 'Starts from 800 BDT',
      note: ''
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Personalized henna art tailored to your preferences. Bring your vision to life with unique patterns.',
      features: ['Unique artwork', 'Your style', 'Creative freedom'],
      image: '/gallery/custom-1.jpg',
      price: 'Starts from 1000 BDT',
      note: '(Final price depends on design complexity)'
    }
  ];

  return (
    <>
      <SectionTransition variant="bronze" />
      
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">The Craft</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">Our Services</h2>
            <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed font-light">
              Discover our range of professional henna services designed for every occasion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto mt-8"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <ScrollReveal 
                key={index}
                delay={0.2 + (index * 0.2)}
                className="h-full"
              >
                <div className="group bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#b38b59]/20 transition-all duration-500 transform hover:-translate-y-3 border border-[#b38b59]/20 h-full flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 -mt-16 relative z-10 shadow-lg">
                      <service.icon className="text-black" size={32} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#b38b59] mb-4">{service.title}</h3>
                    <p className="text-[#8B7355] mb-6 leading-relaxed">{service.description}</p>
                  
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#8B7355]/90">
                          <span className="w-2 h-2 bg-[#b38b59] rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-[#b38b59]/30 pt-6 mb-6 mt-auto">
                      <p className="text-2xl font-bold text-[#b38b59] mb-2">
                        {service.price}
                      </p>
                      {service.note && (
                        <p className="text-sm text-[#8B7355]/70 italic">
                          {service.note}
                        </p>
                      )}
                    </div>

                    <button 
                      onClick={onBookNowClick}
                      className="w-full py-4 bg-gradient-to-r from-[#b38b59] to-[#8B6F47] text-black rounded-full font-semibold hover:shadow-lg hover:shadow-[#b38b59]/30 transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
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

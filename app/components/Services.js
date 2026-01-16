'use client';

import { Heart, Calendar, Palette } from 'lucide-react';
import Image from 'next/image';

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
    <section id="services" className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">Our Services</h2>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            Discover our range of professional henna services designed for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a]/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#b38b59]/10 transition-all duration-300 transform hover:-translate-y-2 border border-[#b38b59]/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="w-16 h-16 bg-[#b38b59] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform -mt-16 relative z-10">
                  <service.icon className="text-black" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#b38b59] mb-4">{service.title}</h3>
                <p className="text-[#8B7355] mb-6 leading-relaxed">{service.description}</p>
              
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#8B7355]/80">
                      <span className="w-2 h-2 bg-[#b38b59] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#b38b59]/20 pt-6 mb-6">
                  <p className="text-xl sm:text-2xl font-bold text-[#b38b59] mb-2">
                    {service.price}
                  </p>
                  {service.note && (
                    <p className="text-xs sm:text-sm text-[#8B7355]/70 italic">
                      {service.note}
                    </p>
                  )}
                </div>

                <button 
                  onClick={onBookNowClick}
                  className="w-full py-3 bg-[#b38b59] text-black rounded-full font-semibold hover:bg-[#d4af6a] transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Heart, Calendar, Palette } from 'lucide-react';

export default function Services({ onBookNowClick }) {
  const services = [
    {
      icon: Heart,
      title: 'Bridal Henna',
      description: 'Intricate and elaborate designs for your special wedding day. Traditional patterns with modern elegance.',
      features: ['Full hand & feet', 'Custom designs', 'Premium quality']
    },
    {
      icon: Calendar,
      title: 'Occasional Henna',
      description: 'Beautiful designs for festivals, parties, and celebrations. Perfect for any special occasion.',
      features: ['Quick application', 'Elegant patterns', 'Affordable pricing']
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Personalized henna art tailored to your preferences. Bring your vision to life with unique patterns.',
      features: ['Unique artwork', 'Your style', 'Creative freedom']
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
              className="group bg-[#1a1a1a]/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#b38b59]/10 transition-all duration-300 transform hover:-translate-y-2 border border-[#b38b59]/20"
            >
              <div className="w-16 h-16 bg-[#b38b59] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-black" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#b38b59] mb-4">{service.title}</h3>
              <p className="text-[#8B7355] mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[#8B7355]/80">
                    <span className="w-2 h-2 bg-[#b38b59] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onBookNowClick}
                className="mt-6 w-full py-3 bg-[#b38b59] text-black rounded-full font-semibold hover:bg-[#d4af6a] transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

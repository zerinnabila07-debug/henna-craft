'use client';

import { Clock, Flame, Droplets } from 'lucide-react';

export default function Aftercare() {
  const tips = [
    {
      icon: Clock,
      title: 'The 8-Hour Rule',
      description: 'Leave it on for at least 8 hours',
      detail: 'For the best results, keep the henna paste on your skin for a minimum of 8 hours. The longer it stays, the deeper and richer the stain will be.'
    },
    {
      icon: Flame,
      title: 'The Heat Method',
      description: 'Use clove steam for a deeper stain',
      detail: 'Gently warm your hands over clove steam or use a heat lamp. The warmth helps the henna penetrate deeper into your skin for a darker color.'
    },
    {
      icon: Droplets,
      title: 'No Soap Zone',
      description: 'Avoid soap/water for the first 24 hours',
      detail: 'Keep your henna design away from water and soap for at least 24 hours. This allows the color to fully develop and last longer.'
    }
  ];

  return (
    <section className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">
            Secrets to a Darker Stain
          </h2>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            Follow these expert tips to achieve the richest, longest-lasting henna color
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#b38b59]/20 hover:border-[#b38b59]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#b38b59]/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] rounded-full flex items-center justify-center mb-6">
                <tip.icon className="text-black" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#b38b59] mb-3">{tip.title}</h3>
              <p className="text-[#d4af6a] font-semibold mb-4">{tip.description}</p>
              <p className="text-[#8B7355] leading-relaxed">{tip.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

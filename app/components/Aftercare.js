'use client';

import { Clock, Flame, Droplets } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import SectionTransition from './SectionTransition';

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
    <>
      <SectionTransition variant="bronze" />
      
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">Expert Guidance</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">
              Aftercare Secrets
            </h2>
            <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed font-light">
              Follow these expert tips to achieve the richest, longest-lasting henna color
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto mt-8"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {tips.map((tip, index) => (
              <ScrollReveal 
                key={index}
                delay={0.2 + (index * 0.2)}
              >
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#b38b59]/20 hover:border-[#b38b59]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#b38b59]/20 transform hover:-translate-y-2 h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <tip.icon className="text-black" size={32} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#b38b59] mb-3">{tip.title}</h3>
                  <p className="text-[#d4af6a] font-semibold mb-4 text-lg">{tip.description}</p>
                  <p className="text-[#8B7355] leading-relaxed">{tip.detail}</p>
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

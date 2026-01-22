'use client';

import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';

export default function About() {
  return (
    <>
      <ParallaxSection className="py-32 md:py-40 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#b38b59]/60 text-sm uppercase tracking-[0.3em] font-light">The Story</span>
            </div>
            <h2 className="serif-heading text-5xl md:text-7xl font-black text-[#b38b59] mb-8 leading-tight">
              About Henna Craft
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b38b59] to-transparent mx-auto"></div>
          </ScrollReveal>

          <div className="space-y-24 md:space-y-32">
            <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
              <div className="text-center space-y-8">
                <p className="text-2xl md:text-3xl text-[#d4af6a] leading-relaxed font-light">
                  Welcome to Henna Craft, your destination for beautiful henna designs and artistry.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="space-y-6 text-[#8B7355] text-lg leading-relaxed order-2 md:order-1">
                  <p className="text-xl">
                    We specialize in creating intricate and stunning henna patterns for all occasions, 
                    from weddings to festivals and special celebrations.
                  </p>
                  <p>
                    Our passion is to bring traditional art into the modern world, creating memorable 
                    experiences for our clients.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#b38b59]/20 to-[#8B6F47]/10 border border-[#b38b59]/30 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🌿</div>
                      <p className="text-[#b38b59] text-lg font-semibold">100% Organic</p>
                      <p className="text-[#8B7355] text-sm mt-2">Chemical-Free Henna</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#b38b59]/20">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-3">
                    <div className="text-4xl font-bold text-[#b38b59]">5+</div>
                    <div className="text-[#8B7355] text-sm uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-4xl font-bold text-[#b38b59]">500+</div>
                    <div className="text-[#8B7355] text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-4xl font-bold text-[#b38b59]">100%</div>
                    <div className="text-[#8B7355] text-sm uppercase tracking-wider">Organic & Safe</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}

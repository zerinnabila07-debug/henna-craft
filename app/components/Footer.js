'use client';

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer({ onBookNowClick }) {
  return (
    <footer id="contact" className="bg-black text-white mb-16 md:mb-0 border-t border-[#b38b59]/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b38b59' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <ScrollReveal delay={0}>
            <div>
            <h3 className="serif-heading text-3xl font-bold mb-4 text-[#b38b59]">Henna Craft</h3>
            <p className="text-[#8B7355] mb-6 leading-relaxed">
              Creating beautiful henna art for your special moments. 
              Traditional craftsmanship with modern elegance.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#b38b59]/20 border border-[#b38b59]/40 rounded-full flex items-center justify-center hover:bg-[#b38b59] transition-all duration-300 group"
              >
                <Instagram size={18} className="text-[#b38b59] group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#b38b59]/20 border border-[#b38b59]/40 rounded-full flex items-center justify-center hover:bg-[#b38b59] transition-all duration-300 group"
              >
                <Facebook size={18} className="text-[#b38b59] group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#b38b59]/20 border border-[#b38b59]/40 rounded-full flex items-center justify-center hover:bg-[#b38b59] transition-all duration-300 group"
              >
                <Mail size={18} className="text-[#b38b59] group-hover:text-black transition-colors" />
              </a>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-[#b38b59]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-[#8B7355] hover:text-[#b38b59] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#8B7355] hover:text-[#b38b59] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#8B7355] hover:text-[#b38b59] transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <button 
                  onClick={onBookNowClick}
                  className="text-[#8B7355] hover:text-[#b38b59] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-[#b38b59]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#8B7355]">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#b38b59]" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-start gap-3 text-[#8B7355]">
                <Mail size={18} className="mt-1 flex-shrink-0 text-[#b38b59]" />
                <span>info@hennacraft.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#8B7355]">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#b38b59]" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="border-t border-[#b38b59]/20 pt-8 text-center mt-12">
            <p className="text-[#8B7355] text-sm">
              © 2026 Henna Craft. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

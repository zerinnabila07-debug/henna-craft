'use client';

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onBookNowClick }) {
  return (
    <footer id="contact" className="bg-black text-white mb-16 md:mb-0 border-t border-[#b38b59]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
        </div>

        <div className="border-t border-[#b38b59]/20 pt-8 text-center">
          <p className="text-[#8B7355] text-sm">
            © 2026 Henna Craft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

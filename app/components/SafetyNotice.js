'use client';

import { Shield, CheckCircle } from 'lucide-react';

export default function SafetyNotice() {
  return (
    <section className="py-16 relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 md:p-12 border-2 border-[#b38b59]/30 shadow-2xl shadow-[#b38b59]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <Shield className="text-black" size={40} />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="serif-heading text-3xl font-bold text-[#b38b59] mb-4">
                Safety First - Your Skin Matters
              </h3>
              
              <p className="text-[#8B7355] text-lg leading-relaxed mb-6">
                Our henna is <span className="text-[#b38b59] font-semibold">100% PPD-free</span> and contains zero harmful chemicals. We use only natural, organic ingredients that are safe for all skin types, including sensitive skin, pregnant women, and children.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#b38b59] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#8B7355]">Free Patch Test Available</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#b38b59] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#8B7355]">Dermatologically Tested</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#b38b59] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#8B7355]">No Artificial Colors</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#b38b59] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#8B7355]">Certified Organic Henna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

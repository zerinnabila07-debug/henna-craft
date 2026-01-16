'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide home service?',
      answer: 'Yes! We offer convenient home service across Dhaka. Our artists will come to your location with all necessary materials. Additional charges may apply based on your location.'
    },
    {
      question: 'Is your henna 100% organic and safe?',
      answer: 'Absolutely! We use only 100% organic, chemical-free henna that is safe for all skin types, including sensitive skin and pregnant women. Our henna is sourced from trusted suppliers and contains no harmful additives.'
    },
    {
      question: 'How much advance notice do you need for booking?',
      answer: 'We recommend booking at least 3-5 days in advance for regular occasions and 1-2 weeks for bridal services. However, we do our best to accommodate last-minute requests based on availability.'
    },
    {
      question: 'How long does the henna color last?',
      answer: 'With proper care, henna typically lasts 1-3 weeks. The color is darkest in the first few days and gradually fades. Following our aftercare tips will help maximize the longevity and richness of your design.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#8B7355]">
            Everything you need to know about our henna services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl border border-[#b38b59]/20 overflow-hidden transition-all duration-300 hover:border-[#b38b59]/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 hover:bg-[#1a1a1a]/80"
              >
                <span className="text-lg font-semibold text-[#b38b59] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-[#b38b59] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-[#8B7355] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

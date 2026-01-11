'use client';

import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      review: 'The most intricate bridal design I have ever seen! Every detail was perfect and exceeded my expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayesha Khan',
      review: 'Absolutely professional and stunning work. The henna lasted beautifully and the color was rich and deep.',
      rating: 5
    },
    {
      id: 3,
      name: 'Fatima Rahman',
      review: 'Incredible artistry and attention to detail. Made my special day even more memorable with their beautiful designs.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">Client Stories</h2>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#b38b59]/30 hover:border-[#b38b59]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b38b59]/10"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#2a2a2a] border-2 border-[#b38b59]/40 flex items-center justify-center mb-4">
                  <User className="text-[#b38b59]" size={32} />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#D4AF37] fill-[#D4AF37]"
                      size={20}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[#8B7355] text-center leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              <p className="text-[#b38b59] text-center font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

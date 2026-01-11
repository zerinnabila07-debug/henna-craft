'use client';

export default function Gallery() {
  const images = [
    { id: 1, category: 'Bridal Henna' },
    { id: 2, category: 'Traditional Design' },
    { id: 3, category: 'Modern Art' },
    { id: 4, category: 'Festival Special' },
    { id: 5, category: 'Custom Pattern' },
    { id: 6, category: 'Elegant Style' },
  ];

  return (
    <section id="gallery" className="py-20 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl sm:text-5xl font-bold text-[#b38b59] mb-4">Our Masterpieces</h2>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            Explore our collection of stunning henna designs and artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(179,139,89,0.4)] cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#b38b59]/10 backdrop-blur-sm border border-[#b38b59]/30 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#b38b59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-[#b38b59]">{image.category}</p>
                  <p className="text-sm text-[#8B7355] mt-2">High Quality Henna Art</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full text-center">
                  <button className="px-6 py-2 bg-[#b38b59] text-black rounded-full font-semibold hover:bg-[#d4af6a] transition text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-transparent text-[#b38b59] rounded-full font-semibold text-base hover:bg-[#b38b59]/10 transition-all duration-300 transform hover:scale-105 border-2 border-[#b38b59]">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

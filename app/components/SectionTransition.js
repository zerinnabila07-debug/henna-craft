'use client';

export default function SectionTransition({ variant = 'gradient' }) {
  if (variant === 'gradient') {
    return (
      <div className="relative h-32 md:h-48 -my-16 md:-my-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1410] to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b38b59]/10 to-transparent" />
      </div>
    );
  }

  if (variant === 'bronze') {
    return (
      <div className="relative h-32 md:h-48 -my-16 md:-my-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#b38b59]/20 to-black" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #b38b59 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    );
  }

  return null;
}

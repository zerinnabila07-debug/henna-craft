'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ParallaxBackground from './components/ParallaxBackground';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <main className="min-h-screen relative">
      <ParallaxBackground />
      <Navbar onBookNowClick={handleBookNowClick} />
      <div className="pt-16 relative z-10">
        <Hero />
        <About />
        <Services onBookNowClick={handleBookNowClick} />
        <Gallery />
        <Testimonials />
        <Footer onBookNowClick={handleBookNowClick} />
      </div>
      <MobileBottomNav />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

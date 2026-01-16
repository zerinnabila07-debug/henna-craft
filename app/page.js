'use client';

'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import MeetTheArtist from './components/MeetTheArtist';
import SafetyNotice from './components/SafetyNotice';
import Aftercare from './components/Aftercare';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InstagramSection from './components/InstagramSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import StickyWhatsApp from './components/StickyWhatsApp';
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
      <div className="pt-24 relative z-10">
        <Hero />
        <div className="py-10"></div>
        <About />
        <div className="py-10"></div>
        <Services onBookNowClick={handleBookNowClick} />
        <div className="py-10"></div>
        <Gallery onBookNowClick={handleBookNowClick} />
        <div className="py-10"></div>
        <MeetTheArtist />
        <div className="py-10"></div>
        <SafetyNotice />
        <div className="py-10"></div>
        <Aftercare />
        <div className="py-10"></div>
        <Testimonials />
        <div className="py-10"></div>
        <FAQ />
        <div className="py-10"></div>
        <InstagramSection />
        <div className="py-10"></div>
        <Footer onBookNowClick={handleBookNowClick} />
      </div>
      <MobileBottomNav />
      <StickyWhatsApp />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

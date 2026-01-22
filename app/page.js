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
import ParallaxBackground from './components/ParallaxBackground';
import AIChatbot from './components/AIChatbot';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <ParallaxBackground />
      <Navbar onBookNowClick={handleBookNowClick} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services onBookNowClick={handleBookNowClick} />
        <Gallery onBookNowClick={handleBookNowClick} />
        <MeetTheArtist />
        <SafetyNotice />
        <Aftercare />
        <Testimonials />
        <FAQ />
        <InstagramSection />
        <Footer onBookNowClick={handleBookNowClick} />
      </div>
      <MobileBottomNav />
      <AIChatbot />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

import React from 'react';
import Countdown from './Countdown';
import useFadeIn from '../hooks/useFadeIn';

function Hero() {
  const heroRef = useFadeIn();

  return (
    <section ref={heroRef} className="hero-section fade-in">
      <div className="container">
        <h2>Unlock India's Future: The Countdown Begins!</h2>
        <p>Join an exclusive movement shaping a developed India. Connect with visionary innovators, founders, and enablers. Your journey to impact starts now.</p>
        <Countdown targetDate="2026-12-31T23:59:59" />
      </div>
    </section>
  );
}

export default Hero;
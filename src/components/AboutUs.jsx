import React from 'react';
import OmImage from '/Om.jpg';
import useFadeIn from '../hooks/useFadeIn';

function AboutUs() {
  const aboutUsRef = useFadeIn();

  return (
    <section ref={aboutUsRef} className="about-us-section fade-in">
      <div className="container">
        <div className="profile-card">
          <div className="profile-image-container">
            <img src={OmImage} alt="Om Patil" className="profile-image" />
          </div>
          <div className="profile-name">
            Om Patil
          </div>
          <div className="profile-title">
            Founder of ViksitHub
          </div>
          <a href="https://www.linkedin.com/in/om-patil19" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4V8zM8.5 8h3.6v2.2h.1c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.56 2.55 4.56 5.87V24h-4v-7.56c0-1.8-.04-4.12-2.51-4.12-2.51 0-2.89 1.95-2.89 3.98V24h-4V8z" />
            </svg>
          </a>
        </div>
        <div className="about-us-content">
          <h2>Our Vision: Igniting India's Future</h2>
          <p>
            ViksitHub isn't just a platform; it's a movement. Founded by Om Patil with a burning passion for India's progress, we're building a vibrant ecosystem where innovation thrives and dreams take flight. Inspired by the vision of Viksit Bharat 2047, we believe in the boundless potential of young minds to shape a stronger, more dynamic nation.
          </p>
          <p>
            This isn't just about a launch; it's about unlocking a new era of collaboration, creativity, and impact. We're here to connect the brightest innovators, visionary founders, and dedicated enablers, forging a path towards a developed India, together.
          </p>
          <p>
            Join us as we embark on this extraordinary journey. Be part of something bigger, something transformative. The future is being built now, and you have a crucial role to play.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
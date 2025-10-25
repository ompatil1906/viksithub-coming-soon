import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

function Footer() {
  const footerRef = useFadeIn();

  return (
    <footer ref={footerRef} className="fade-in">
      <div className="container">
        <p>&copy; 2025 ViksitHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
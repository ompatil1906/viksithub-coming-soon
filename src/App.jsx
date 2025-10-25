import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Social from './components/Social';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'; // Added Footer import
// import ProductPreview from './components/ProductPreview'; // Removed
// import MysteryBox from './components/MysteryBox'; // Removed
// import Testimonials from './components/Testimonials'; // Removed
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            {/* <ProductPreview /> Removed */}
            {/* <MysteryBox /> Removed */}
            {/* <Testimonials /> Removed */}
            <Subscribe />
            <Social />
            <Footer /> {/* Added Footer component */}
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

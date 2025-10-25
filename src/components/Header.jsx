import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
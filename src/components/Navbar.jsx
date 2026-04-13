import React, { useState } from 'react';
import { useWorkshop } from '../context/WorkshopContext';
import { Menu, X, Sun, Moon, BookOpen, User } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenDashboard, onGoHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, bookings } = useWorkshop();
  
  const isDarkMode = theme === 'dark';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo" onClick={onGoHome} style={{ cursor: 'pointer' }}>
          <BookOpen className="logo-icon" size={28} />
          <span>FOSSEE</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-links">
          <button onClick={onGoHome} className="nav-link-btn">Workshops</button>
          <button onClick={onOpenDashboard} className="nav-link-btn">
            My Bookings
            {bookings.length > 0 && <span className="booking-count">{bookings.length}</span>}
          </button>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary" onClick={onOpenDashboard}>
            <User size={18} />
            <span>Profile</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <a href="#workshops" onClick={toggleMenu} className="mobile-link">Workshops</a>
        <a href="#about" onClick={toggleMenu} className="mobile-link">About</a>
        <button className="btn-primary w-full mt-4">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

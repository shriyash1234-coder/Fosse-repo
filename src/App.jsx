import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WorkshopListing from './pages/WorkshopListing';
import Dashboard from './pages/Dashboard';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('listing'); // 'listing' | 'dashboard'

  return (
    <div className="app">
      <div className="mesh-bg"></div>
      <Navbar onOpenDashboard={() => setCurrentPage('dashboard')} onGoHome={() => setCurrentPage('listing')} />
      <Toast />
      <div className="content">
        {currentPage === 'listing' ? (
          <WorkshopListing onOpenDashboard={() => setCurrentPage('dashboard')} />
        ) : (
          <Dashboard onBack={() => setCurrentPage('listing')} />
        )}
      </div>
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2026 FOSSEE, IIT Bombay. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

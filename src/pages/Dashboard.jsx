import React from 'react';
import { useWorkshop } from '../context/WorkshopContext';
import { 
  Calendar, Trash2, Award, ArrowLeft, ExternalLink, 
  Target, Zap, Clock, ShieldCheck, Map
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ onBack }) => {
  const { bookings, removeBooking } = useWorkshop();
  
  const skillCredits = bookings.length * 4;
  const progressPercent = Math.min((bookings.length / 4) * 100, 100);

  return (
    <div className="dashboard-elite animate-fade-in">
      <div className="mesh-bg"></div>
      
      <div className="container">
        <header className="dash-nav">
          <button onClick={onBack} className="btn-back-elite">
            <ArrowLeft size={18} />
            Explore Catalog
          </button>
          <div className="user-profile-small">
            <div className="avatar">JD</div>
            <span>John Doe</span>
          </div>
        </header>

        <div className="bento-grid dashboard-bento">
          {/* Tile 1: Greeting (2x1) */}
          <div className="bento-item bento-glass tile-welcome span-2">
            <div className="tile-content">
              <Zap className="accent-icon" size={24} />
              <h1>Welcome back, John!</h1>
              <p>You've earned <strong>{skillCredits} Skill Credits</strong> this month. Keep going!</p>
              <div className="ai-recommendation">
                <ShieldCheck size={16} />
                <span>AI Suggestion: Based on your Python interest, try <strong>Data Science with R</strong>.</span>
              </div>
            </div>
          </div>

          {/* Tile 2: Certification Progress (1x2) */}
          <div className="bento-item bento-glass tile-progress row-span-2">
            <div className="tile-header">
              <Award size={20} />
              <h3>Certifications</h3>
            </div>
            <div className="progress-visual">
              <div className="circle-progress" style={{ '--progress': `${progressPercent}%` }}>
                <span className="percent">{progressPercent}%</span>
              </div>
              <p>FOSSEE Master Track</p>
            </div>
            <button className="btn-link-elite">View Portfolio</button>
          </div>

          {/* Tile 3: Skill Map (1x1) */}
          <div className="bento-item bento-glass tile-skills">
            <div className="tile-header">
              <Map size={20} />
              <h3>Skill Map</h3>
            </div>
            <div className="skill-chips-mini">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Web</span>
              <span className="skill-tag">IoT</span>
            </div>
          </div>

          {/* Tile 4: Detailed Bookings (2x2) */}
          <div className="bento-item bento-glass tile-bookings span-2 row-span-2">
            <div className="tile-header">
              <Calendar size={20} />
              <h3>Academic Track ({bookings.length})</h3>
            </div>
            
            {bookings.length > 0 ? (
              <div className="booking-list-elite">
                {bookings.map(workshop => (
                  <div key={workshop.id} className="booking-item-elite">
                    <div className="booking-main">
                      <h4>{workshop.title}</h4>
                      <p>{workshop.date} • Interactive Session</p>
                    </div>
                    <div className="booking-actions-elite">
                      <button className="btn-icon-elite success" title="Join Link">
                        <Zap size={16} />
                      </button>
                      <button 
                        className="btn-icon-elite danger" 
                        onClick={() => removeBooking(workshop.id)}
                        title="Cancel"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state-mini">
                <p>No active sessions.</p>
                <button className="btn-primary-small" onClick={onBack}>Enroll Now</button>
              </div>
            )}
          </div>

          {/* Tile 5: Next Session (1x1) */}
          <div className="bento-item bento-glass tile-next">
            <div className="tile-header">
              <Clock size={20} />
              <h3>Upcoming</h3>
            </div>
            <div className="next-countdown">
              {bookings.length > 0 ? (
                <>
                  <span className="time">2d : 14h</span>
                  <span className="label">Next Workshop</span>
                </>
              ) : (
                <span className="label">Nothing scheduled</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

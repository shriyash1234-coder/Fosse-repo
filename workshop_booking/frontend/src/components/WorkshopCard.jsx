import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import './WorkshopCard.css';

const WorkshopCard = ({ workshop, onRegister }) => {
  const { title, date, description, status, participants } = workshop;

  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'open': return 'var(--status-open)';
      case 'closing soon': return 'var(--status-closing)';
      case 'full': return 'var(--status-full)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div className="workshop-card animate-fade-in">
      <div className="card-image-top">
        <div className="category-badge">{workshop.category}</div>
        <div className="status-badge-elite" style={{ backgroundColor: getStatusColor() }}>
          {status}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title-elite">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="meta-item">
            <Users size={16} />
            <span>{participants} registered</span>
          </div>
        </div>
      </div>
      
      <div className="card-footer-elite">
        <button 
          className={`btn-details-elite ${status.toLowerCase() === 'full' ? 'disabled' : ''}`}
          onClick={() => onRegister(workshop)}
        >
          {status.toLowerCase() === 'full' ? 'Sold Out' : 'View Details & Enroll'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;

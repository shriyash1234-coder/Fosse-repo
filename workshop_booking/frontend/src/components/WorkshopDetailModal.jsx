import React, { useState } from 'react';
import { X, Calendar, Clock, User, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import RegistrationForm from './RegistrationForm';
import './WorkshopDetailModal.css';

const WorkshopDetailModal = ({ workshop, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'syllabus' | 'register'

  if (!workshop) return null;

  return (
    <div className="modal-overlay detail-modal-overlay">
      <div className="modal-content detail-modal animate-fade-in">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={28} />
        </button>

        <div className="detail-layout">
          {/* Sidebar / Info */}
          <aside className="detail-sidebar">
            <div className="sidebar-badge">{workshop.category}</div>
            <h2>{workshop.title}</h2>
            <div className="quick-stats">
              <div className="stat-item">
                <Calendar size={18} />
                <span>{workshop.date}</span>
              </div>
              <div className="stat-item">
                <Clock size={18} />
                <span>{workshop.duration}</span>
              </div>
              <div className="stat-item">
                <User size={18} />
                <span>{workshop.participants} enrolled</span>
              </div>
            </div>

            <div className="instructor-card-mini">
              <div className="instructor-avatar">
                <GraduationCap size={24} />
              </div>
              <div className="instructor-info">
                <span className="label">Instructor</span>
                <span className="name">{workshop.instructor}</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="detail-main">
            <nav className="detail-tabs">
              <button 
                className={activeTab === 'overview' ? 'active' : ''} 
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={activeTab === 'syllabus' ? 'active' : ''} 
                onClick={() => setActiveTab('syllabus')}
              >
                Syllabus
              </button>
              <button 
                className={`btn-tab-register ${activeTab === 'register' ? 'active' : ''}`} 
                onClick={() => setActiveTab('register')}
              >
                Register Now
              </button>
            </nav>

            <div className="tab-body">
              {activeTab === 'overview' && (
                <div className="tab-pane animate-fade-in">
                  <h3>About this Workshop</h3>
                  <p>{workshop.description}</p>
                  <div className="features-grid">
                    <div className="feature-item">
                      <CheckCircle size={16} />
                      <span>Hands-on Lab Sessions</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} />
                      <span>Industry Certification</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} />
                      <span>Expert Mentorship</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} />
                      <span>Post-workshop Support</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div className="tab-pane animate-fade-in">
                  <h3>Curriculum</h3>
                  <div className="syllabus-list">
                    {workshop.syllabus ? workshop.syllabus.map((item, index) => (
                      <div key={index} className="syllabus-row">
                        <div className="day-index">{index + 1}</div>
                        <div className="day-content">
                          <h4>Module {index + 1}</h4>
                          <p>{item}</p>
                        </div>
                      </div>
                    )) : <p>Syllabus coming soon...</p>}
                  </div>
                </div>
              )}

              {activeTab === 'register' && (
                <div className="tab-pane registration-pane animate-fade-in">
                  <RegistrationForm workshop={workshop} onClose={onClose} isInline={true} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetailModal;

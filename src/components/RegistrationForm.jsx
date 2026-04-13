import React, { useState } from 'react';
import { useWorkshop } from '../context/WorkshopContext';
import { X, Send, User, Mail, Phone, Book, Calendar } from 'lucide-react';
import './RegistrationForm.css';

const RegistrationForm = ({ workshop, onClose, isInline = false }) => {
  const { addBooking } = useWorkshop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Invalid email address';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.department) newErrors.department = 'Department is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const success = addBooking(workshop);
      setIsSubmitting(false);
      if (success) {
        setIsSuccess(true);
        setTimeout(onClose, 3000);
      }
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  if (isSuccess) {
    const successContent = (
      <div className="success-state animate-fade-in">
        <div className="success-icon">✓</div>
        <h2>Registration Successful!</h2>
        <p>You have been registered for <strong>{workshop.title}</strong>.</p>
        <div className="success-actions mt-4">
          <button className="btn-secondary">
            <Calendar size={18} />
            Add to Google Calendar
          </button>
        </div>
      </div>
    );
    return isInline ? successContent : (
      <div className="modal-overlay">
        <div className="modal-content">{successContent}</div>
      </div>
    );
  }

  const formContent = (
    <div className={isInline ? "registration-form-container" : "modal-content animate-fade-in"}>
      {!isInline && <button className="modal-close" onClick={onClose}><X size={24} /></button>}
      
      {!isInline && (
        <header className="modal-header">
          <h2>Register for Workshop</h2>
          <p className="subtitle">{workshop.title}</p>
        </header>
      )}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <label><User size={16} /> Full Name</label>
          <input 
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="input-group">
          <label><Mail size={16} /> Email Address</label>
          <input 
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="grid-2">
          <div className="input-group">
            <label><Phone size={16} /> Phone Number</label>
            <input 
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <label><Book size={16} /> Department</label>
            <select 
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={errors.department ? 'error' : ''}
            >
              <option value="">Select Dept</option>
              <option value="CS">Computer Science</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
            {errors.department && <span className="error-text">{errors.department}</span>}
          </div>
        </div>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? <span className="loader"></span> : 'Complete Registration'}
          {!isSubmitting && <Send size={18} />}
        </button>
      </form>
    </div>
  );

  return isInline ? formContent : <div className="modal-overlay">{formContent}</div>;
};

export default RegistrationForm;

import React from 'react';
import { useWorkshop } from '../context/WorkshopContext';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = () => {
  const { notifications } = useWorkshop();

  if (notifications.length === 0) return null;

  return (
    <div className="toast-container">
      {notifications.map((n) => (
        <div key={n.id} className={`toast toast-${n.type} animate-slide-in`}>
          <div className="toast-icon">
            {n.type === 'success' && <CheckCircle size={20} />}
            {n.type === 'error' && <XCircle size={20} />}
            {n.type === 'info' && <AlertCircle size={20} />}
          </div>
          <div className="toast-message">{n.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Toast;

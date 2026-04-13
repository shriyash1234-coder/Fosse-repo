/**
 * WorkshopContext
 * 
 * Centralized state management for enrollment logic, notifications, 
 * and persistent user preferences (Theme).
 * 
 * Uses localStorage to ensure a persistent, industry-standard UX 
 * for academic registrations.
 */
const WorkshopContext = createContext();

export const WorkshopProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('user_bookings');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('user_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addBooking = (workshop) => {
    if (bookings.find(b => b.id === workshop.id)) {
      addNotification('You are already registered for this workshop!', 'error');
      return false;
    }
    setBookings([...bookings, workshop]);
    addNotification(`Successfully registered for ${workshop.title}`, 'success');
    return true;
  };

  const removeBooking = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
    addNotification('Booking cancelled successfully', 'info');
  };

  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <WorkshopContext.Provider value={{ 
      bookings, 
      addBooking, 
      removeBooking, 
      notifications, 
      addNotification,
      theme,
      toggleTheme 
    }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (!context) throw new Error('useWorkshop must be used within a WorkshopProvider');
  return context;
};

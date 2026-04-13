import { useState, useMemo } from 'react';

const CATEGORIES = ['All', 'Python', 'IoT', 'Web', 'VLSI', 'Scilab'];

const MOCK_WORKSHOPS = [
  {
    id: 1,
    title: 'Python for Beginners',
    category: 'Python',
    date: 'Oct 24, 2026',
    duration: '12 Hours',
    instructor: 'Dr. Sameer Sahasrabudhe',
    description: 'Learn the fundamentals of Python programming including data types, control structures, and basic algorithms. Perfect for students starting their journey in open-source software.',
    syllabus: [
      'Python Installation & Environment Setup',
      'Data Structures: Lists, Tuples, Dictionaries',
      'Functions, Modules and File I/O',
      'Introduction to OOP in Python'
    ],
    status: 'Open',
    participants: 145
  },
  {
    id: 2,
    title: 'Arduino & IoT Fundamentals',
    category: 'IoT',
    date: 'Oct 28, 2026',
    duration: '16 Hours',
    instructor: 'Prof. Rajesh Zele',
    description: 'A hands-on workshop covering microcontrollers, sensors, and connecting devices to the internet using open hardware platforms.',
    syllabus: [
      'Introduction to Microcontrollers',
      'Interfacing Sensors and Actuators',
      'Wi-Fi Connectivity with ESP8266',
      'Cloud Integration and Data Logging'
    ],
    status: 'Closing Soon',
    participants: 88
  },
  {
    id: 3,
    title: 'Advanced Scilab for Engineers',
    category: 'Scilab',
    date: 'Nov 02, 2026',
    duration: '10 Hours',
    instructor: 'Prof. Kannan Moudgalya',
    description: 'Master numerical computation and scientific visualization using Scilab. Ideal for engineering students and research professionals.',
    syllabus: [
      'Matrix Operations and Functions',
      'Solving Differential Equations',
      'Xcos: Graphic System Simulator',
      'Data Plotting and Signal Processing'
    ],
    status: 'Full',
    participants: 120
  },
  {
    id: 4,
    title: 'Full-Stack Web Development',
    category: 'Web',
    date: 'Nov 15, 2026',
    duration: '24 Hours',
    instructor: 'Elite Web Team, IITB',
    description: 'Build modern responsive websites using React, Node.js, and PostgreSQL. Focuses on production-ready patterns and clean architecture.',
    syllabus: [
      'Frontend Architecture with React',
      'State Management & API Integration',
      'Node.js Backend & SQL Database',
      'Deployment and CI/CD Pipelines'
    ],
    status: 'Open',
    participants: 62
  },
  {
    id: 5,
    title: 'VLSI Design & Fabrication',
    category: 'VLSI',
    date: 'Nov 20, 2026',
    duration: '20 Hours',
    instructor: 'Prof. Madhav Desai',
    description: 'Introduction to VLSI design flows, CMOS layout, and fabrication technologies using industry-standard open-source EDA tools.',
    syllabus: [
      'VLSI Design Flow Overview',
      'Circuit Simulation with Ngspice',
      'Physical Design & Layout with Magic',
      'Standard Cell Characterization'
    ],
    status: 'Open',
    participants: 40
  },
  {
    id: 6,
    title: 'Data Science with Python',
    category: 'Python',
    date: 'Nov 25, 2026',
    duration: '18 Hours',
    instructor: 'Data Analytics Group, FOSSEE',
    description: 'Explore Pandas, Matplotlib, and Scikit-Learn for data analysis.',
    syllabus: [
      'Data Cleaning with Pandas',
      'Visualization with Seaborn',
      'The Machine Learning Pipeline',
      'Model Evaluation and Tuning'
    ],
    status: 'Open',
    participants: 75
  }
];

export const useWorkshops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date'); // 'date' | 'popularity'

  const filteredWorkshops = useMemo(() => {
    let result = [...MOCK_WORKSHOPS];

    // Filter by search
    if (searchQuery) {
      result = result.filter(w => 
        w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(w => w.category === activeCategory);
    }

    // Sort
    if (sortBy === 'popularity') {
      result.sort((a, b) => b.participants - a.participants);
    } else {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return {
    workshops: filteredWorkshops,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    categories: CATEGORIES,
    sortBy,
    setSortBy
  };
};

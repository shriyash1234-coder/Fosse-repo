import React, { useState } from 'react';
import WorkshopCard from '../components/WorkshopCard';
import WorkshopDetailModal from '../components/WorkshopDetailModal'; // Updated import
import { useWorkshops } from '../hooks/useWorkshops';
import { useWorkshop } from '../context/WorkshopContext';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import './WorkshopListing.css';

const WorkshopListing = ({ onOpenDashboard }) => {
  const { 
    workshops: filteredWorkshops, 
    searchQuery, 
    setSearchQuery, 
    activeCategory, 
    setActiveCategory, 
    categories,
    sortBy,
    setSortBy
  } = useWorkshops();

  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className="container page-listing">
      <header className="listing-header">
        <div className="badge-new animate-fade-in">New Workshop: VLSI Design</div>
        <h1>Explore Workshops</h1>
        <p>Advance your career with hands-on FLOSS training from industry experts.</p>
      </header>

      <section className="controls-section">
        <div className="search-row">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by topic or technology..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="sort-dropdown">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Sort by: Date</option>
              <option value="popularity">Sort by: Popularity</option>
            </select>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {loading ? (
        <div className="loading-grid">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      ) : filteredWorkshops.length > 0 ? (
        <div className="workshop-grid">
          {filteredWorkshops.map(workshop => (
            <WorkshopCard 
              key={workshop.id} 
              workshop={workshop} 
              onRegister={setSelectedWorkshop}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Filter size={48} />
          <h3>No workshops found</h3>
          <p>Try adjusting your search query or filters.</p>
          <button className="btn-primary mt-4" onClick={() => setSearchQuery('')}>Clear Search</button>
        </div>
      )}

      {selectedWorkshop && (
        <WorkshopDetailModal 
          workshop={selectedWorkshop} 
          onClose={() => setSelectedWorkshop(null)} 
        />
      )}
    </main>
  );
};

export default WorkshopListing;

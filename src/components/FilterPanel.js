import React from 'react';

import '../styles/FilterPanel.css'; // path should match your project structure


const FilterPanel = ({ filters, setFilters, allSpecialties }) => {
  const handleSpecialtyChange = (event) => {
    const value = event.target.value;
    const updatedSpecialties = filters.specialties.includes(value)
      ? filters.specialties.filter((s) => s !== value)
      : [...filters.specialties, value];

    setFilters({ ...filters, specialties: updatedSpecialties });
  };

  const handleConsultationChange = (event) => {
    setFilters({ ...filters, consultationMode: event.target.value });
  };

  const handleSortChange = (event) => {
    setFilters({ ...filters, sortBy: event.target.value });
  };

  const handleRemoveAllFilters = () => {
    setFilters({
      specialties: [],
      consultationMode: 'All',
      sortBy: '',
      searchQuery: filters.searchQuery // Preserve search query
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-section">
        <h3>Specialties</h3>
        <div className="specialties-container">
          {allSpecialties.map((specialty) => (
            <label key={specialty} className="specialty-item">
              <input
                type="checkbox"
                value={specialty}
                checked={filters.specialties.includes(specialty)}
                onChange={handleSpecialtyChange}
              />
              <span className="specialty-label">{specialty}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Consultation Mode</h3>
        <div className="radio-group">
          {['All', 'Video Consultation', 'In Clinic'].map((mode) => (
            <label key={mode} className="radio-label">
              <input
                type="radio"
                name="consultationMode"
                value={mode}
                checked={filters.consultationMode === mode}
                onChange={handleConsultationChange}
              />
              <span className="radio-label-text">{mode}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Sort By</h3>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="sortBy"
              value="fees"
              checked={filters.sortBy === 'fees'}
              onChange={handleSortChange}
            />
            <span className="radio-label-text">Fees (Low to High)</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="sortBy"
              value="experience"
              checked={filters.sortBy === 'experience'}
              onChange={handleSortChange}
            />
            <span className="radio-label-text">Experience (High to Low)</span>
          </label>
        </div>
      </div>

      <button 
        className="remove-filters-btn"
        onClick={handleRemoveAllFilters}
        disabled={!filters.specialties.length && filters.consultationMode === 'All' && !filters.sortBy}
      >
        Remove All Filters
      </button>
    </div>
  );
};

export default FilterPanel;

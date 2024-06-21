import React from 'react';

interface FiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="filters">
      <div className="filters-left">
        <button
          className={selectedFilter === 'latest' ? 'active' : ''}
          onClick={() => onFilterChange('latest')}
        >
          Latest
        </button>
        <button
          className={selectedFilter === 'popular' ? 'active' : ''}
          onClick={() => onFilterChange('popular')}
        >
          Popular
        </button>
      </div>
      <div className="filters-right">
        <span>Show:</span>
        <button className="show-all">All</button>
        <span className="dropdown-icon">&#9662;</span>
      </div>
    </div>
  );
};

export default Filters;

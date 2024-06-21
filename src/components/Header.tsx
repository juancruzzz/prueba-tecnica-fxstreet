import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="skeleton skeleton-circle-blue"></div>
        <div className="skeleton skeleton-blue"></div>
      </div>
      <div className="header-right">
        <div className="skeleton skeleton-orange"></div>
        <div className="skeleton-wrapper">
          <div className="skeleton skeleton-circle"></div>
        </div>
        <div className="skeleton-wrapper">
          <div className="skeleton skeleton-circle"></div>
        </div>
        <div className="skeleton-wrapper">
          <div className="skeleton skeleton-circle-gray"></div>
          <div className="skeleton skeleton-gray"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

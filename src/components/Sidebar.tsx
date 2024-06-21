import React from 'react';
import fxstreetLogo from '../assets/images/fxstreet-logo.png';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={ fxstreetLogo } alt='FXStreet Premium' width={ 163 } height={ 54 } />
      </div>
      <ul className="sidebar-links">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;

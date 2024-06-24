import React from 'react';
import fxstreetMobileLogo from '../assets/images/fxstreet-logo-mobile.png';
import fxstreetLogo from '../assets/images/fxstreet-logo.png';

interface SidebarProps {
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {


  return (
    <nav className={ `sidebar ${ isMobile ? 'mobile' : '' }` }>
      <div className="sidebar-logo">
        { isMobile ? (
          <img src={ fxstreetMobileLogo } alt='FXStreet Premium' width={ 147 } height={ 26 } />
        ) : (
          <img src={ fxstreetLogo } alt='FXStreet Premium' width={ 163 } height={ 54 } />
        ) }
      </div>
      <ul className="sidebar-links">
        <li><div></div></li>
        <li><div></div></li>
        { !isMobile && (
          <>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li></>
        ) }
      </ul>
    </nav>
  );
};

export default Sidebar;

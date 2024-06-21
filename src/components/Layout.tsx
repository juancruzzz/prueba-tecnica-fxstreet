import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout-content">
                <Header />
                { children }
            </div>
        </div>
    );
};

export default Layout;

import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = useIsMobile(768);

    return (
        <div className="layout">
            <Sidebar isMobile={isMobile}/>
            <div className="layout-content">
                <Header />
                { children }
            </div>
        </div>
    );
};

export default Layout;

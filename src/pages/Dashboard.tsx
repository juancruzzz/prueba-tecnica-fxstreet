import React, { useState } from 'react';
import Filters from '../components/Filters';
import Posts from '../components/Posts/Posts';
import useIsMobile from '../hooks/useIsMobile';

const Dashboard: React.FC = () => {
    const isMobile = useIsMobile(768);
    const [selectedFilter, setSelectedFilter] = useState('latest');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="content-column">
                    <Filters selectedFilter={ selectedFilter } onFilterChange={ handleFilterChange } isMobile={ isMobile } />
                    <Posts filter={ selectedFilter } />
                </div>

                { !isMobile && (
                    <div className="sidebar-column">
                        <div className="additional-content">
                            <div className="additional-title"></div>
                            <div className="additional-bar"></div>
                        </div>

                        <div className="sidebar-container">
                            <div className="sidebar-content">
                                <div className="sidebar-title"></div>
                                <div className="sidebar-circle"></div>
                            </div>
                        </div>

                    </div>
                ) }
            </div>
        </div>
    );
};

export default Dashboard;

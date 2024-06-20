import React, { useState } from 'react';
import '../assets/styles/components/_dashboard.scss';
import Filters from '../components/Filters';
import Posts from '../components/Posts';

const Dashboard: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState('latest');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <Filters selectedFilter={ selectedFilter } onFilterChange={ handleFilterChange } />
                { selectedFilter === 'latest' && (
                    <div className="content latest">
                        <h1>Latest</h1>
                    </div>
                ) }
                { selectedFilter === 'popular' && (
                    <div className="content popular">
                        <h1>Popular</h1>
                    </div>
                ) }

                <Posts />
            </div>
        </div>
    );
};

export default Dashboard;

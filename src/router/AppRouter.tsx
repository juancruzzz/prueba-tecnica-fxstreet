import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';

const AppRouter: React.FC = () => {
    return (
        <Router basename="/prueba-tecnica-fxstreet">
            <Layout>
                <Routes>
                    <Route path="/" element={ <Dashboard /> } />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
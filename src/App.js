import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import OverviewCard from './Components/OverviewCard';
import ActivityChart from './Components/ActivityChart';
import RecentOrders from './Components/RecentOrders';
import CustomerFeedback from './Components/CustomerFeedback';
import OptionsCard from './Components/OptionsCard';

import './App.css';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <div className="app">
            <Sidebar isOpen={sidebarOpen} />
            <div className="main-content">
                <Header />
                <div className="sidebar-toggle" onClick={toggleSidebar}>
                    <img src={'./path/to/sidebar-toggle-icon.png'} alt="Toggle Sidebar" />
                </div>
                <div className="dashboard">
                    <h3 className='dashboardName'>Dashboard</h3>
                    <div className="main-section">
                        <div className="left-section">
                            <div className="overview">
                                <OverviewCard title="Total Orders" count="75" image="shopping-bag.png" percentage="3" />
                                <OverviewCard title="Total Delivered" count="70" image="delivery-truck_1005026.png" percentage="100" />
                                <OverviewCard title="Total Cancelled" count="05" image="shopping-bag_6815046.png" percentage="-3"/>
                                <OverviewCard title="Total Revenue" count="$12k" image="depreciation_8520691.png" percentage="16"/>
                            </div>
                            <div className="activity-section">
                                <ActivityChart className="activity-chart" />
                            </div>
                            <div className="additional-sections">
                                <RecentOrders />
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="right-overviewcard">
                                <div className="card-body">
                                    <div className="left-content">
                                        <h2 className="card-title">Net Profit</h2>
                                        <p className="card-count">$6759.25</p>
                                        <p className="card-description">This is the net profit for the current period.</p>
                                    </div>
                                    <div className="arrow-container">
                                        <div className="arrow"></div>
                                    </div>
                                    <div className="percentage-wrapper">
                                        <div className="percentage-circle">
                                            <svg width="60" height="60" viewBox="0 0 60 60">
                                                <circle 
                                                    cx="30" 
                                                    cy="30" 
                                                    r="25" 
                                                    stroke="#e0e0e0" 
                                                    strokeWidth="6" 
                                                    fill="none"
                                                />
                                                <circle 
                                                    cx="30" 
                                                    cy="30" 
                                                    r="25" 
                                                    stroke="#4caf50" 
                                                    strokeWidth="6" 
                                                    fill="none" 
                                                    strokeDasharray="157"  
                                                    strokeDashoffset={(1 - 0.8) * 157} 
                                                    transform="rotate(-90 30 30)"
                                                />
                                                <text 
                                                    x="50%" 
                                                    y="50%" 
                                                    dominantBaseline="middle" 
                                                    textAnchor="middle" 
                                                    fontSize="12"  
                                                    fill="#4caf50"
                                                >
                                                    80%
                                                </text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-card">
                                <OptionsCard />
                            </div>
                            <div className="right-card">
                                <CustomerFeedback />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

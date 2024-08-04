import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-icon">
                <img src="four-circle.png" alt="Home" />
            </div>
            <div className="sidebar-icon">
                <img src="/house-window.png" alt="Home" />
            </div>
            <div className="sidebar-icon">
                <img src="statistic.png" alt="Chart" />
            </div>
            <div className="sidebar-icon">
                <img src="to-do-list.png" alt="Bell" />
            </div>
            <div className="sidebar-icon">
                <img src="wallet.png" alt="Settings" />
            </div>
        </div>
    );
};

export default Sidebar;

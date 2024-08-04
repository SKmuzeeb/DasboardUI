import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <input type="text" className="search-bar" placeholder="Search..." />
            <div className="user-info">
                <div className="icon">🔔</div>
                <div className="icon">📧</div>
                <div className="user-avatar">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" />
                </div>
            </div>
        </div>
    );
}; 

export default Header;

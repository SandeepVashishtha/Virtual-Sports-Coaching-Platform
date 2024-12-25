// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Optional CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Virtual Sports Coaching Platform</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/coaching">Coaching</a></li>
                    <li><a href="/performance">Performance</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

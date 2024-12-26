// src/components/Header.js
import React, { useEffect, useState } from 'react';
import '../styles/Header.css'; // Optional CSS file for styling

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
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
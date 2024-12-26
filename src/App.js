// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './index.css'; // Make sure to import the CSS file

const App = () => {
    return (
        <div className="app-wrapper">
            <Router>
                <div className="app">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
import React from 'react';
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <section className="intro">
                <h1>Welcome to Virtual Sports Coaching</h1>
                <p>Accessible Training: Remote coaching for all.</p>
                <p>Live Feedback: AI-driven performance analysis.</p>
                <p>Improved Skills: Personalized coaching plans.</p>
                <p>Affordable Coaching: Lower costs for young athletes.</p>
                <p>Broader Reach: Expand access to professional coaching.</p>
            </section>
            <section className="features">
                <h2>Our Features</h2>
                <ul>
                    <li>Interactive Coaching Sessions</li>
                    <li>Real-time Performance Tracking</li>
                    <li>Personalized Training Programs</li>
                    <li>Expert Coaches</li>
                    <li>Community Support</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>
                    "This platform has transformed my training routine. The AI feedback is incredibly helpful!"
                </blockquote>
                <cite>- Alex, Young Athlete</cite>
            </section>
        </div>
    );
};

export default Home;
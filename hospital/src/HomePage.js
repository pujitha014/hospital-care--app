import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  // State for toggling detailed info
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the details on click
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="header-links">
          <Link to="/login" className="header-link">Login</Link>
          <Link to="/signup" className="header-link">Sign Up</Link>
        </div>

        <h1 className="homepage-title">Welcome to Hospital Care App</h1>
        <p className="homepage-subtitle">Your health, our priority</p>
      </header>

      <nav className="homepage-nav">
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </nav>

      <section className="homepage-main">
        <div className="homepage-intro">
          <h2>Empowering Your Health Journey</h2>
          <p>
            At Hospital Care App, we offer cutting-edge solutions to predict diseases, provide detailed
            descriptions, suggest medications, and connect you with the best nearby hospitals and doctors.
          </p>
        </div>

        <div className="homepage-highlights">
          <div
            className="highlight-item clickable"
            onClick={handleToggleDetails}
          >
            <h3>Accurate Predictions</h3>
            <p>Our advanced algorithms provide precise disease predictions based on your symptoms.</p>
            {/* {showDetails && (
              <div className="detailed-info">
                <p>
                  Using cutting-edge machine learning algorithms and extensive datasets, our system delivers 
                  unparalleled accuracy in predicting potential health issues. This enables early intervention and
                  improved outcomes for patients.
                </p>
              </div>
            )} */}
          </div>
          <div className="highlight-item">
            <h3>Personalized Care</h3>
            <p>Receive tailored treatment plans and medication suggestions for your condition.</p>
          </div>
          <div className="highlight-item">
            <h3>Comprehensive Support</h3>
            <p>Find nearby hospitals, book appointments, and access detailed reports effortlessly.</p>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        {/* <div className="footer-links">
          <Link to="/login" className="footer-link">Login</Link>
          <Link to="/signup" className="footer-link">Sign Up</Link>
        </div> */}
        <p>&copy; 2024 Hospital Care App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

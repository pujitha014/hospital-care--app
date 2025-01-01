import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'; // Import Features.css

function Features() {
  return (
    <div className="features-container">
      <header className="features-header">
        <h1>Our Features</h1>
        <p>Explore the cutting-edge features of the Hospital Care App</p>
      </header>

      <section className="features-list">
        <div className="feature-item">
          <h2>Accurate Disease Prediction</h2>
          <p>
            Utilizing advanced machine learning algorithms, we predict diseases with high accuracy based on user inputs and medical data.
          </p>
        </div>
        <div className="feature-item">
          <h2>Personalized Treatment Plans</h2>
          <p>
            Get tailored treatment suggestions, including medication and lifestyle adjustments, to suit your specific needs.
          </p>
        </div>
        <div className="feature-item">
          <h2>Nearby Hospital Finder</h2>
          <p>
            Locate nearby hospitals and doctors, view ratings, and book appointments conveniently through our app.
          </p>
        </div>
        <div className="feature-item">
          <h2>Health Monitoring Dashboard</h2>
          <p>
            Track your health stats, view detailed reports, and monitor your progress over time.
          </p>
        </div>
      </section>

      <footer className="features-footer">
        <Link to="/" className="footer-link">Back to Home</Link>
        <p>&copy; 2024 Hospital Care App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Features;

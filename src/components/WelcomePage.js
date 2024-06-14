import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Simple Pizza Order Calculator 🍕</h1>
      <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="Pizza" />
      <Link to="/calculator" className="start-button">Start Calculating</Link>
    </div>
  );
};

export default WelcomePage;

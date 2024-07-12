

import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="character-list">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="loader-card">
            <div className="loader-avatar"></div>
            <div className="loader-line short"></div>
            <div className="loader-line long"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;

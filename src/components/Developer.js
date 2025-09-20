import React from 'react';
import '../css/Developer.css';
import developerImage from '../assets/dev.jpg'; // Placeholder image

const Developer = () => {
  return (
    <div className="developer-container">
      <div className="developer-card">
        <img src={developerImage} alt="Mahesh Shinde" className="developer-image" />
        <h2>Mahesh Shinde</h2>
        <p className="developer-title">BTech in Computer Engineering (3rd Year)</p>
        <p>
          <strong>Portfolio:</strong>{' '}
          <a href="https://maheshshinde-dev.vercel.app" target="_blank" rel="noopener noreferrer">
            maheshshinde-dev.vercel.app
          </a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:contact.shindemahesh2112@gmail.com">
            contact.shindemahesh2112@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/maheshshinde9100" target="_blank" rel="noopener noreferrer">
            maheshshinde9100
          </a>
        </p>
      </div>
    </div>
  );
};

export default Developer;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Task Tracker &copy; 2024</p>
      <p><Link to="/developer" className="footer-link">About Developer</Link></p>
    </footer>
  );
};

export default Footer;

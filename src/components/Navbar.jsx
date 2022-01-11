import React from 'react';
import { BrowserRouter as Router, Route, Link, Outlet } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>Hotel Grande</h1>
      <div className="navLinks">
        <Link to="/about">About</Link>
        <Link to="/location">Location</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

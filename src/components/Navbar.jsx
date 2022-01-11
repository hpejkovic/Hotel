import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navigation">
          <h1>Hotel Grande</h1>
          <div className="navLinks">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? 'activeLink' : 'link';
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? 'activeLink' : 'link';
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/location"
              className={({ isActive }) => {
                return isActive ? 'activeLink' : 'link';
              }}
            >
              Location
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? 'activeLink' : 'link';
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

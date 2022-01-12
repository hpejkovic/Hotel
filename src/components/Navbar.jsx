import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <h1 data-aos="fade-down-right">Hotel Grande</h1>
      <div className="navLinks">
        <NavLink
          to="/home"
          data-aos="fade-down-left"
          className={({ isActive }) => {
            return isActive ? 'link activeLink' : 'link';
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          data-aos="fade-down-left"
          className={({ isActive }) => {
            return isActive ? 'link activeLink' : 'link';
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/location"
          data-aos="fade-down-left"
          className={({ isActive }) => {
            return isActive ? 'link activeLink' : 'link';
          }}
        >
          Location
        </NavLink>
        <NavLink
          to="/contact"
          data-aos="fade-down-left"
          className={({ isActive }) => {
            return isActive ? 'link activeLink' : 'link';
          }}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

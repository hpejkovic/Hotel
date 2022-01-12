import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components';
import { Outlet } from 'react-router-dom';
import 'animate.css/animate.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 10, // values from 0 to 3000, with step 50ms
  duration: 1000,

  // whether animation should happen only once - while scrolling down // whether elements should animate out while scrolling past them
});

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

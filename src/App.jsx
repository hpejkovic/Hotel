import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components';
import { BrowserRouter as Router, Route, Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

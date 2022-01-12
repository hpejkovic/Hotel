import { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Main } from './components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import NothingHere from './routes/NothingHere';

function App() {
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   navigate('/home');
  // });
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

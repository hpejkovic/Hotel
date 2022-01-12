import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './routes/About';
import Home from './routes/Home';
import NothingHere from './routes/NothingHere';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route
            index
            element={<Navigate to="home" replace></Navigate>}
          ></Route>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NothingHere></NothingHere>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

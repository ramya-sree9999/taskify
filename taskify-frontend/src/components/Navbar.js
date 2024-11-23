// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">TaskForm</Link>
        </li>
        {/* <li>
          <Link to="/register">Register</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
 

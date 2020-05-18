import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="NavContent">
      <ul className="NavBar">
        <li className="NavLink">
          <Link to="/">About Me</Link>
        </li>
        <li className="NavLink">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="NavLink">
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
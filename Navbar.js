import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>EventApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/myevents">My Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;

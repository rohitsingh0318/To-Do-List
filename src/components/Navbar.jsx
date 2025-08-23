import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo ki jagah tumhara naam */}
      <h1 className="logo">Rohit Singh</h1>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

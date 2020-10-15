import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <>
      <Link to="/">
        <nav className="Navbar" />
      </Link>
    </>
  );
}

export default Navbar;

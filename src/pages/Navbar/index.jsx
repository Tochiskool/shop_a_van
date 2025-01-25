import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const location = useLocation();
  return (
    <header>
      <Link to='/'>#VANHIRE</Link>

      <nav className='navEl'>
        <Link
          to='/'
          className={location.pathname === "/" ? "active" : "notActive"}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={location.pathname === "/about" ? "active" : "notActive"}
        >
          About
        </Link>
        <Link
          to='/vans'
          className={location.pathname === "/vans" ? "active" : "notActive"}
        >
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

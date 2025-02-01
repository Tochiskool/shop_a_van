import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
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
          <Link
            to='/host'
            className={location.pathname === "/host" ? "active" : "notActive"}
          >
            Host
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

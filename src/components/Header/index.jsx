import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <Link to='/'>#VANHIRE</Link>

        <nav className='navEl'>
          <NavLink
            to='/'
            // className={location.pathname === "/" ? "active" : "notActive"}
            className={({ isActive }) =>
              isActive && location.pathname === "/" ? "active" : null
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            // className={location.pathname === "/about" ? "active" : "notActive"}
            className={({ isActive }) =>
              isActive && location.pathname === "/about" ? "active" : null
            }
          >
            About
          </NavLink>
          <NavLink
            to='/vans'
            // className={location.pathname === "/vans" ? "active" : "notActive"}
            className={({ isActive }) =>
              isActive && location.pathname === "/vans" ? "active" : null
            }
          >
            Vans
          </NavLink>
          <NavLink
            to='/host'
            // className={location.pathname === "/host" ? "active" : "notActive"}
            className={({ isActive }) =>
              isActive && location.pathname === "/host" ? "active" : null
            }
          >
            Host
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import avatarImg from "./images/avatar-15.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./avatar.css";
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
          <NavLink
            to='/login'
            // className={location.pathname === "/login" ? "active" : "notActive"}
            className={({ isActive }) =>
              isActive && location.pathname === "/login"
                ? "active login-link"
                : "login-link"
            }
          >
            <img src={avatarImg} alt={`persons face`} className='avatar' />
            Login
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;

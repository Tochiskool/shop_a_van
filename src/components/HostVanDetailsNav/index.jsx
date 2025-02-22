import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const HostVanDetailsNav = () => {
  const location = useLocation();
  return (
    <nav className='navEl'>
      <NavLink
        to='.'
        end
        className={location.pathname.endsWith(".") ? "active" : "notActive"}
      >
        Details
      </NavLink>
      <NavLink
        to='pricing'
        className={
          location.pathname.includes("pricing") ? "active" : "notActive"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to='photos'
        className={
          location.pathname.includes("photos") ? "active" : "notActive"
        }
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default HostVanDetailsNav;

import React from "react";
import { useLocation, Link } from "react-router-dom";
const HostLayout = () => {
  const location = useLocation();
  return (
    <>
      <nav className='navEl'>
        <Link
          to='/host'
          className={location.pathname === "/host" ? "active" : "notActive"}
        >
          Dashboard
        </Link>
        <Link
          to='/host/income'
          className={
            location.pathname === "/host/income" ? "active" : "notActive"
          }
        >
          Income
        </Link>
        <Link
          to='/host/vans'
          className={
            location.pathname === "/host/vans" ? "active" : "notActive"
          }
        >
          Vans
        </Link>
        <Link
          to='/host/reviews'
          className={
            location.pathname === "/host/reviews" ? "active" : "notActive"
          }
        >
          Review
        </Link>
      </nav>
    </>
  );
};

export default HostLayout;

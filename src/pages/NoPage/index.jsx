import React from "react";
import { Link } from "react-router-dom";
import "./nopage.css";

const NoPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Link to='/'>Home</Link>
        <div className=' col-12 centerElement'>
          <h1>Oops No Page Found!!</h1>
        </div>
      </div>
    </div>
  );
};

export default NoPage;

import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='footerStyle'>
              <div className='col-1-3'>
                <div className='footerContainer'>
                  <h2>&copy;ACN-2025 Project</h2>
                </div>
              </div>
              <div className='col-1-3'>
                <div className='footerContainer'>
                  <h1>My Name</h1>
                </div>
              </div>
              <div className='col-1-3'>
                <div className='footerContainer'>
                  <h1>SOME LINKS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

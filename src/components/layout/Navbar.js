import React from 'react';
require('dotenv/config')



function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand text-white text-lg brand-text" href="#">
                  BK Movie App
                </a>
              </div>
              <ul className="navbar-nav ml-auto text-light d-inline-block">
                {/* header logos */}
                <li className="nav-item d-inline-block mr-4">
                  <i className="fas fa-film fa-5x" id="cinema-logo" />
                </li>
                <li className="nav-item d-inline-block mr-4"> 
                  <i className="fab fa-react fa-5x" id="react-logo" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
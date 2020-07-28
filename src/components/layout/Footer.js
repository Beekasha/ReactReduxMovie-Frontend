import React from 'react';



function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Thanks to: 
            <a href="http://www.omdbapi.com/"> 
                <div>OMDb</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
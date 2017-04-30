import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navigation">
      <div className="container">
        <div className="row">
          <div className="left col-6">
            <span className="brand">Rogier Nitschelm </span>
            <span className="hidden-sm-down skill-set">| React, Redux, Apollo</span>
          </div>

          <div className="right col-6">
            <ul className="list-unstyled">
              <li><Link to="/resume" className="button-primary">resume</Link></li>
              <li><Link to="/stocks" className="button-primary">stocks</Link></li>
              <li><Link to="/history" className="button-primary">history</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

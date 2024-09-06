import React from 'react';
import './LeftSide.css';
import logo from '../images/logo.svg';

const LeftSide = () => {
  return (
    <div className="d-flex flex-column justify-content-center h-100 p-3">
      <div className="mb-4 content-ml">
        <div className='logo-container'>
          <img src={logo} alt="Logo" className="img-fluid mb-3" />
        </div>
        <h1 className="display-1">We're coming soon</h1>
        <p className="lead fs-6 mt-2">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
      <form>
        <div className="mb-3 content-ml d-flex position-relative">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="form-control rounded-pill input-width"
          />
          <button type="submit" className="btn btn-primary rounded-pill position-absolute">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

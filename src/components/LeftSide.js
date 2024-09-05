import React from 'react';
import './LeftSide.css';
import logo from '../images/logo.svg';

const LeftSide = () => {
  return (
    <div className="d-flex flex-column justify-content-center h-100 p-3">
      <div className="mb-4">
        <img src={logo} alt="Logo" className="img-fluid mb-3" />
        <h1 className="display-4">We're coming soon</h1>
        <p className="lead">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
};

export default LeftSide;

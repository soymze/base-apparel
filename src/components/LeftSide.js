import React from 'react';
import './LeftSide.css';
import logo from '../images/logo.svg';

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="logoAndText">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">We're coming soon</h1>
        <p className="description">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
      <form className="form">
        <label htmlFor="email" className="label">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          className="input"
        />
        <button type="submit" className="button">Subscribe</button>
      </form>
    </div>
  );
};

export default LeftSide;

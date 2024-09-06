import React from 'react';
import './LeftSide.css';
import logo from '../images/logo.svg';
import { ReactComponent as BtnSvg } from '../images/icon-arrow.svg';

const LeftSide = () => {
  return (
    <div className="d-flex flex-column justify-content-center h-100 p-3">
      <div className="mb-4 content-ml">
        <div className='logo-container'>
          <img src={logo} alt="Logo" className="img-fluid mb-3" />
        </div>
        <h1 className="display-1 fw-700"><span className='text-pink fw-100'>We're</span> coming soon</h1>
        <p className="lead fs-6 mt-2 text-pink fw-400">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
      <form>
        <div className="mb-3 content-ml d-flex position-relative">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
            className="form-control rounded-pill input-width text-pink"
          />
          <button type="submit" className="btn-bg rounded-pill position-absolute"><BtnSvg /></button>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

import React from 'react';
import './RightSide.css';
import photo from '../images/hero-desktop.jpg';

const RightSide = () => {
  return (
    <div className="rightSide">
      <img src={photo} alt="Fashion" className="image" />
    </div>
  );
};

export default RightSide;

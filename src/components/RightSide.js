import React from 'react';
import './RightSide.css';
import photo from '../images/hero-desktop.jpg';

const RightSide = () => {
    return (
      <div className="h-100">
        <img src={photo} alt="Fashion" className="img-fluid" />
      </div>
    );
  };
  
  export default RightSide;



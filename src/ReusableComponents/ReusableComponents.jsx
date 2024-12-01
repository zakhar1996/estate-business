import React from 'react';
import './ReusableComponents.css';

const Button = ({ text, onClick, width,}) => {
  return (
    <button 
      className="custom-button" 
      style={{ width }} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
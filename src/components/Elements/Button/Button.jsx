import React from "react";
import '@/components/Elements/Button/Button.scss';

const Button = ({
  text,
  width = '100%', 
  maxWidth = '271px',
  height = '49px', 
  color = '#FFFFFF', 
  backgroundColor = 'transparent',
  padding = '20px 14px',
  onClick,
  className = "" 
}) => {
  return (
    <button
    className={`buttons--template ${className}`}  
      style={{
        width: width,  
        maxWidth: maxWidth, 
        backgroundColor: backgroundColor,
        height: height,
        color: color,
        padding: padding,
      
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;



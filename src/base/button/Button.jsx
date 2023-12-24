import React from "react";
import "./button.css";

const Button = ({ variant, type, label, onClick, isDisabled, isLoading }) => {
  return (
    <button
      className='btn'
      type={type}
      variant={variant}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

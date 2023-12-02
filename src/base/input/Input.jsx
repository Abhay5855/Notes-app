import React from "react";
import "./input.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required,
  feedbackMessage,
}) => {
  return (
    <>
      <input
        className="input"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        name={name}
      />

      {feedbackMessage && <span className="error__msg">{feedbackMessage}</span>}
    </>
  );
};

export default Input;

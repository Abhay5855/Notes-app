import React, { useState } from "react";
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
  const [showEye, setShowEye] = useState(false);

  const onClickEye = () => {
    setShowEye(!showEye);
  };
  return (
    <>
      <div className='input__container'>
        <input
          className='input'
          value={value}
          type={showEye ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          name={name}
        />

        {type === "password" &&
          (showEye ? (
            <div className='eye__icon' onClick={onClickEye}>
              <span class='material-symbols-outlined'>visibility</span>
            </div>
          ) : (
            <div className='eye__icon' onClick={onClickEye}>
              <span class='material-symbols-outlined'>visibility_off</span>
            </div>
          ))}
      </div>
      {feedbackMessage && <span className='error__msg'>{feedbackMessage}</span>}
    </>
  );
};

export default Input;

import React from 'react'
import "./button.css";

const Button = ({variant, type,label, onClick, isDisabled}) => {
  return (
    <button className='btn' type={type} variant={variant} disabled={isDisabled} onClick={onClick}>{label}</button>
  )
}

export default Button
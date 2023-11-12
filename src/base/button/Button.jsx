import React from 'react'
import "./button.css";

const Button = ({variant, type,label, onClick}) => {
  return (
    <button className='btn' type={type} variant={variant} onClick={onClick}>{label}</button>
  )
}

export default Button
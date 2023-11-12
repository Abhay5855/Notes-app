import React from 'react'
import "./input.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required
}) => {
  return (
    
        <input className='input'  type={type} placeholder={placeholder} onChange={onChange} required={required} name={name}/>
  )
}

export default Input
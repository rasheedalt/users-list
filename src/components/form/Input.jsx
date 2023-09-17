import React from 'react'

const Input = ({ 
    id,
    className,
    type = "text",
    placeholder,
    onChange
}) => {
  return (
    <input
        className={className}
        id={id} 
        type={type} 
        placeholder={placeholder}
        onChange={onChange} />
  )
}

export default Input;

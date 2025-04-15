import React from 'react'

const Button = ({ className,onClick,btnName }) => {
  return (
    <>
        <button className={className} onClick={onClick}>{btnName}</button>
       
    </>
  )
}

export default Button

import React from 'react'

const RollDice = ({ className, onClick, dicenumber }) => {
  return (
    <>
        <div className={className}>
           <img onClick={onClick} src={`/public/images/dice_${dicenumber}.png`} alt="dice" />
        </div>
    </>
  )
}

export default RollDice

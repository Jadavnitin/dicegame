import React from 'react'

const TotalScore = ({className,score}) => {
  return (
    <>
        <div className={className}>
           <h1>{score}</h1>
           <p>Total Score</p>
        </div>
    </>
  )
}

export default TotalScore

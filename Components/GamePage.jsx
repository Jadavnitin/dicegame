import React, { useState } from 'react';
import "./GamePage.css";
import ShowRules from './ShowRule';
import Button from './Button';
import RollDice from './RollDice';
import TotalScore from './TotalScore';




const GamePage = () => {


  const [selectNumber, setselectNumber] = useState();
  const [dicenumber, setdicenumber] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);

  const generaterandomnumber = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min));
  }

  const rolldice = () => {

    if (!selectNumber) {
      seterror("You have not selected any number");
      return;
    }

    const randomnumber = generaterandomnumber(1, 7);
    setdicenumber(randomnumber);

    if (selectNumber === randomnumber) {
      setscore((prev) => prev + randomnumber);
    }
    else {
      setscore((prev) => prev - 1);
    }

    setselectNumber(undefined);
  }


  const backbtn = () => {
    history.back();
  }

  const arrNumbers = [1, 2, 3, 4, 5, 6];

  const changeColor = (number) => {
    setselectNumber(number);
    seterror("");
  }


  const resetbtn = () => {
    setscore(0);
    setdicenumber(1)
    setselectNumber();
  }

  const showrulesbtn = () => {
    if (!showrules) {
      setshowrules(true)
    }
    else {
      setshowrules(false);
    }

  }

  return (
    <>
      

      <div className="score-div">
        <Button className='back' onClick={backbtn} btnName="Back" />
        <TotalScore className="total-score" score={score} />

        
        <div className="select-number">
          {
            arrNumbers.map((number, i) => <button className="number"
              style={{
                backgroundColor: selectNumber === number ? "black" : "white",
                color: selectNumber === number ? "white" : "black"
              }} onClick={() => changeColor(number)} key={i}>{number}</button>)
          }
          <span style={{ color: "red" }}>{error}</span>
          <span>Select Number</span>
        </div>
      </div>



      <div className="main-dice">
        <div className='dice-div' >
          <RollDice className='img-container' onClick={rolldice} dicenumber={dicenumber} />
          <p>Click On Dice To Roll</p>
          <Button className='reset-score' onClick={resetbtn} btnName="Reset Score" />
          <Button className='show-rule' onClick={showrulesbtn} btnName="Show Rules" />
        </div>
      </div>

      {
        (showrules === true) &&
        <ShowRules />
      }

    </>
  )
}

export default GamePage

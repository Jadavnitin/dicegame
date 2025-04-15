import React from 'react'
import "./FrontPage.css";
import diceimg from "../Images/dices.png";
import { NavLink } from 'react-router-dom';




const FrontPage = () => {

  
   
  return (
     <div className='frontpage-container'>
        
       
        
        <div className='main'>
           
           <div className='dice-img'>
              <img src={diceimg} alt="diceimg" />
           </div>
           
           <div className="heading-playbtn">
              
              <div className="dicegame-play">
              <h1>DICE GAME</h1>
                 <NavLink to="/GamePage" className='play-gamebtn'>
                    <span>
                       Play Game
                    </span>
                 </NavLink>
              </div>
           </div>
           
      </div>
    </div>
  )
}

export default FrontPage

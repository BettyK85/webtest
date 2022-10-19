import React from "react";
import"./Header.css";
import K from "../../image/K.jpg";
import Button from '../UI/button/Button';
  

const Header = () => {
  
  return (
    <section className ="header">
    
  
        <div className="header-container">
        
        <div className="header-left">
        
          <h1>
          
          <span>Making The Impossible, Possible</span>
          <span> We Offer An Opportunity To Grow</span>
          <span> A Matchmaker For The Dream Maker</span>

          </h1>
          <hr/>
          <p className="u-text-small u-text-dark">
            A place you can trust to meet your every need.
          </p>
          <div className="header-cta">
          <Button text={"Create your own CV"} btnClass={"btn-orange"} href={"#"}/>
          
        </div>
        </div>
        

        <div className="header-right">
          <img src={K} alt ="K"/>
        </div>
          </div>
        {/* <div className="floating-icon">
          <a href="#features">
          <BsMouse color="#000" size={25} className="mouse"/> 
          </a>

        </div> */}
    </section>
  )
}

export default Header
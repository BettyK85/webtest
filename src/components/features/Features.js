import React from "react"
import"./Features.css"
import"./Feature.js";

import {BsFillBookmarkStarFill} from "react-icons/bs";
import aerial from "../../image/aerial.png"; 
import Feature from "./Feature.js";
import{ featureList } from "./data.js"
const Features = () => {
  return (
    <section id='Features' className="features">
    <div className="container features">
    <div className="u-title">
    <BsFillBookmarkStarFill color="orangered" size={30} />
    <h2>About Us</h2>
    <p className="u-text-small u-text-dark">
    “If you’re good at what you do, you can work anywhere. If you’re the best at what you do, come work with us.”
    </p>

    </div>
<div className="features-content">
  <div className="features-left">
  <img src ={aerial} alt="aerial"/>
  </div>
  
  <div className="feautres-right">{
   featureList.map((feautres)=>( <Feature key={feautres.id} icon={feautres.icon} heading={feautres.heading} text={feautres.text}/>))
  }
 
  </div>
   
</div>

    </div>
    
    </section>

        

  )
}

export default Features;

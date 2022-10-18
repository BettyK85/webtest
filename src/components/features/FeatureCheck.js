import React from 'react'
import "./FeatureCheck.css"
import {BsFillBookmarkStarFill} from "react-icons/bs";
import Feature from "./Feature.js";
import wo from "../../image/wo.jpg"
import{ featureList } from "./data.js"
const FeatureCheck = () => {
  return (
    <div className='header-feature' id='Features'>
        <div className='header-content-feature'>
             <BsFillBookmarkStarFill color="orangered" size={30} />
            <h2>About Us</h2>
            <p className="u-text-small u-text-dark">
            “If you’re good at what you do, you can work anywhere. If you’re the best at what you do, come work with us.”
            </p>
            <div className='feature-items'>
                <div className="features-left">
                <img src ={wo} alt="wo"/>
                </div> 
                
                <div className="feautres-right">{
                featureList.map((feautres)=>( <Feature key={feautres.id} icon={feautres.icon} heading={feautres.heading} text={feautres.text}/>))
                }
                </div>
            </div>
        </div>


    </div>
  )
}

export default FeatureCheck
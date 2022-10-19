import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import"./FeatureCheck.css";
import"./Feature.js";
import"./Feature.css";
import B from"../../image/B.jpg";
import Feature from './Feature.js';
import { featureList } from './data.js';


const FeatureCheck = () => {
  return (
    <section id="Features" className='Features'>
    <div className="container-features">
     <div className="title">
      <BsFillBookmarkStarFill color="orangered" size={25} />
      <h2> Our Services</h2>
      <p>
      Nothing we do is more important than hiring and developing people. At the end of the day, we bet on people, not strategies.
      </p>
     </div>
<div className="features-content">
  <div className="features-left">
  <img src={B} alt="B"/>
  </div>
  <div className="features-right">
  {
    featureList.map((feature) =>(
      <Feature key={feature.id } icon={feature.icon} heading={feature.heading} text={feature.text}/>
    ))
  }
 
  </div>
</div>
    </div>


    </section>
  )
}

export default FeatureCheck
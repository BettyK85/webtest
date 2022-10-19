
import React from 'react';
import"./Download.css";
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import {GrAndroid} from "react-icons/gr";
import { IconContext } from 'react-icons'; 

const Download = () => {
  return (
    <section className='download' id="AboutUs">
    <div className="container donwload">
    <h2> Testimonies</h2>
    <p className="u-text-small u-text-light">
      here are some of our customers reviews
    </p>
    <IconContext.Provider value={{size:"15"}}>

    
<div className="download-icons">
<div className="download-icon">
<p><ImQuotesLeft/> i was amazed by their teaching methods i highly reccomend thier basic computer courses  <ImQuotesRight/></p>

  </div>
  <div className="download-icon">
<p> <ImQuotesLeft/> i was relcutant at first since i have been so disspaointed by so many other but they really exceed my expectation i got to learn from them and now they are my first place to go when i need something done.<ImQuotesRight/> </p>
<p>Rinah.M</p>

  </div>
  <div className="download-icon">
<p><ImQuotesLeft/>Thier customer handling is beyond words its ana agency that really cares about you thank you global...<ImQuotesRight/></p>
<p> betsy.k</p>

  </div>
</div>
  </IconContext.Provider>
</div>
    </section>
  );
};

export default Download
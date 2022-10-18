
import React from 'react';
import"./Download.css";
import {FaApple,FaWindows} from "react-icons/fa";
import {GrAndroid} from "react-icons/gr";
import { IconContext } from 'react-icons'; 

const Download = () => {
  return (
    <section className='download' id="AboutUs">
    <div className="container donwload">
    <lh2> Social messenger</lh2>
    <p className="u-text-small u-text-light">
      some prargraph to be written here 
    </p>
    <IconContext.Provider value={{size:"15"}}>

    
<div className="download-icons">
<div className="download-icon">
<FaApple /><p>ios</p>

  </div>
  <div className="download-icon">
<GrAndroid/><p>Andriod</p>

  </div>
  <div className="download-icon">
<FaWindows/><p>Windows</p>

  </div>
</div>
  </IconContext.Provider>
</div>
    </section>
  );
};

export default Download
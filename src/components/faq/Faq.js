import React from 'react'
import{ MdOutlineLightbulb} from "react-icons/md";
import "./Question.css"
import Question from './Question';
import {questions} from "./data.js"
const Faq = () => {
  return (
    <section id="Faq" className='Faq'>
      <div className="container faq">
      <div className="title">
<MdOutlineLightbulb color="orangered" size={30} />
    <h2>Faqs</h2>
    <p>here are the some eof the frequently asked questions
    
    </p>

    </div>
    <div className="questions">
    {
      questions.map((question)=>(
        <Question title= {question.title } answer={question.answer}/> 
      ))
    }
  
    </div>
      </div>
    </section>
  )
}

export default Faq
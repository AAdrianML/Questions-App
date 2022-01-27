import React, { useState } from 'react'
import data from '../resources/data';
import SingleQuestion from './Question';

 const MainQuestions = () => {
    const [questions, setQuestions] = useState(data);

    const showQuestionsComponent = questions.map((question)=>{
      //key={question.id} {...question} i send the key and later the rest of the object
      return <SingleQuestion key={question.id} {...question}/>
     })
    return (
        <main> 
            <div className="container">
                <h3>
                    questions and answes about login
                </h3>
                <section className="info">
                    {
                    showQuestionsComponent
                    }
                </section>
            </div>
        </main>
    )
}
export default MainQuestions;
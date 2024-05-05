import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
export const Quiz = () => {
  //index - the index of the current quiz question, the initial value of which is set to 0.
  //question - the current quiz question, which is extracted from the data array by the index "index".
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  return (
    <div className="container">
      <h1>Quiz app</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

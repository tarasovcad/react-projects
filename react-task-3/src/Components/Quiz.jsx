import React, { useState } from 'react';
import { Questions } from '../Helpers/Questions';
export const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => {
            setOptionChosen('A');
          }}>
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen('B');
          }}>
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen('C');
          }}>
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen('D');
          }}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {console.log(optionChosen)}
      <button> Next Question</button>
    </div>
  );
};

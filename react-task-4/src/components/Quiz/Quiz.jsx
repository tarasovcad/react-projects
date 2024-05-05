import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
export const Quiz = () => {
  //index - the index of the current quiz question, the initial value of which is set to 0.
  //question - the current quiz question, which is extracted from the data array by the index "index".
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  // It takes two parameters event object and ans. It checks if ans matches the correct answer stored in question.ans. If they match, it adds a class "correct" to the target element of the event e
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (ans === question.ans) {
        e.target.classList.add('correct');
        setLock(true);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
      }
    }
  };
  return (
    <div className="container">
      <h1>Quiz app</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul>
        <li
          onClick={(e) => {
            checkAns(e, 1);
          }}>
          {question.option1}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 2);
          }}>
          {question.option2}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 3);
          }}>
          {question.option3}
        </li>
        <li
          onClick={(e) => {
            checkAns(e, 4);
          }}>
          {question.option4}
        </li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

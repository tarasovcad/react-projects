import React, { useState, useRef } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
export const Quiz = () => {
  //index - the index of the current quiz question, the initial value of which is set to 0.
  //question - the current quiz question, which is extracted from the data array by the index "index".
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1, Option2, Option3, Option4];
  // It takes two parameters event object and ans. It checks if ans matches the correct answer stored in question.ans. If they match, it adds a class "correct" to the target element of the event e
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (ans === question.ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        optionArray[question.ans - 1].current.classList.add('correct');
      }
    }
  };
  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      optionArray.map((options) => {
        options.current.classList.remove('correct', 'wrong');
        return null;
      });
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
          ref={Option1}
          onClick={(e) => {
            checkAns(e, 1);
          }}>
          {question.option1}
        </li>
        <li
          ref={Option2}
          onClick={(e) => {
            checkAns(e, 2);
          }}>
          {question.option2}
        </li>
        <li
          ref={Option3}
          onClick={(e) => {
            checkAns(e, 3);
          }}>
          {question.option3}
        </li>
        <li
          ref={Option4}
          onClick={(e) => {
            checkAns(e, 4);
          }}>
          {question.option4}
        </li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">
        {index + 1} of {data.length} questions
      </div>
    </div>
  );
};

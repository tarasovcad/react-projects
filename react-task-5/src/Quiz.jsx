import React, { useState } from 'react';

export const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const { question, choices, type, correctAnswer } = questions[currentQuestion];
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setCurrentQuestion(currentQuestion + 1);
      a;
    }
  };
  return (
    <div className="quiz-container">
      <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{questions.length}</span >
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => {
            console.log(answer);
            return (
              <li onClick={() => onAnswerClick(answer, index)} key={answer}>
                {answer}
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

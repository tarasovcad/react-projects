import React, { useState } from 'react';
import { resultInitalState } from './constants';
export const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);

  const { question, choices, correctAnswer } = questions[currentQuestion];
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? { ...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
    }
    console.log(result);
  };
  return (
    <div className="quiz-container">
      <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => {
            return (
              <li
                className={answerIdx === index ? 'selected-answer' : ''}
                onClick={() => onAnswerClick(answer, index)}
                key={answer}>
                {answer}
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <button onClick={onClickNext} disabled={answerIdx === null}>
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </>
    </div>
  );
};

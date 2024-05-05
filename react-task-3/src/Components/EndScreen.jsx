import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/Questions';
import '../App.css';

export const EndScreen = () => {
  const { score, setGameState } = useContext(QuizContext);

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        Your score is {score} / {Questions.length}
      </h3>
      <button
        onClick={() => {
          setGameState('menu');
        }}>
        Restart Quiz
      </button>
    </div>
  );
};

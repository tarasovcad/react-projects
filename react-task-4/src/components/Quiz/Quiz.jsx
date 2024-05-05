import React from 'react';
import './Quiz.css';
export const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz app</h1>
      <hr />
      <h2>1. Which manis asdasd?</h2>
      <ul>
        <li>Modern</li>
        <li>Router</li>
        <li>an caksd</li>
        <li>dog</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

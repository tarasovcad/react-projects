import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText(data.slice(0, count));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = +count;
    setText(data.slice(0, amount));
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          max={8}
          min={1}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

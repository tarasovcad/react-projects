import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#231');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };
  return (
    <>
      <section className="container">
        <h1>color generator project</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
        })}
      </section>
      ;
    </>
  );
}

export default App;

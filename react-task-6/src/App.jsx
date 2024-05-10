import React from 'react';
import { FaClipboard } from 'react-icons/fa';
export const App = () => {
  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Char" readOnly />
            <div className="clipboard">
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input type="number" id="length" min={6} max={10} />
            </div>
            <div className="field">
              <label htmlFor="capital">Capital</label>
              <input type="checkbox" id="capital" />
            </div>
            <div className="field">
              <label htmlFor="small">Small</label>
              <input type="checkbox" id="small" />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input type="checkbox" id="number" />
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input type="checkbox" id="symbol" />
            </div>
          </div>
          <button type='submit'>Generate password</button>
        </form>
      </div>
    </section>
  );
};

export default App;

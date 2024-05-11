import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';
import { useForm } from './useForm';
import { getRundomCharacter, getSpecialChar } from './utils';
export const App = () => {
  const [values, setValues] = useForm({
    //key: value,
    length: 6,
    capital: true,
    small: true,
    number: true,
    symbol: true,
  });
  const [result, setResult] = useState('');
  const fieldsArray = [
    {
      field: values.capital,
      getChar: getRundomCharacter(65, 90),
    },
    {
      field: values.small,
      getChar: getRundomCharacter(97, 122),
    },
    {
      field: values.number,
      getChar: getRundomCharacter(48, 57),
    },
    {
      field: values.symbol,
      getChar: getSpecialChar(),
    },
  ];
  console.log(fieldsArray);

  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Char" readOnly value={result} />
            <div className="clipboard">
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={6}
                max={10}
                name="length"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="capital">Capital</label>
              <input
                type="checkbox"
                id="capital"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="small">Small</label>
              <input
                type="checkbox"
                id="small"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                id="number"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
          </div>
          <button type="submit">Generate password</button>
        </form>
      </div>
    </section>
  );
};

export default App;

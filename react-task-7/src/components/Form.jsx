import React from 'react';

export const Form = () => {
  return (
    <form className="password__form">
      <h2>Generate a secure password</h2>
      <div className="password__inputs">
        <h4 className="password__text">sdfsdfsf</h4>
        <div className="flex">
          <label htmlFor="password-length">Password Length?</label>
          <input
            type="number"
            max={72}
            min={6}
            name="password-length"
            style={{ maxWidth: '8ch' }}
          />
        </div>
        <div className="flex">
          <label htmlFor="numbers">Include numbers ?</label>
          <input type="checkbox" name="numbers" />
        </div>
        <div className="flex">
          <label htmlFor="symbols">Include symbols ?</label>
          <input type="checkbox" name="symbols" />
        </div>
      </div>
    </form>
  );
};

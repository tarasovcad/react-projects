import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor); // 2 way to convert
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const showAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const hexValue = `#${hexColor}`;
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={showAlert}>
      <p className="percent-value">{weight}%</p>
      {/* <p className="color-value">{hex}</p> */}
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">coppied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

import React, { useEffect, useState } from 'react';

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(false), 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  // every time list is changes wait 3 second

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

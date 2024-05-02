import React from 'react';

export const ButtonDelete = ({ deleteProducts, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteProducts(id);
      }}>
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};

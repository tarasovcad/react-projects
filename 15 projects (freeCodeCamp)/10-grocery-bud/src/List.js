import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items }) => {
  console.log(items);

  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { title, id } = item;
        return <h1>{title}</h1>;
      })}
    </div>
  );
};

export default List;

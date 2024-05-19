import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

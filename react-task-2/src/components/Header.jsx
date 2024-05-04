import React from 'react';

export const Header = () => {
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Cabinet</a>
          </li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

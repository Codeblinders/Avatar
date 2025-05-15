import React from 'react';
import './Header.css';

const Header = ({ userName }) => (
  <header className="header">
    <h1>Welcome to the AI Dashboard</h1>
    <p>Hello, {userName}!</p>
  </header>
);

export default Header;

import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ onClick }) => (
  <button className="floating-button" onClick={onClick}>
    Create New Avatar
  </button>
);

export default FloatingButton;

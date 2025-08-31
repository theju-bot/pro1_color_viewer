import React from 'react';
import './Input.css';

const Input = ({ handleInput, colorToggle }) => {
  return (
    <>
    <input
      autoFocus
      type="text"
      className="input"
      onChange={(e) => handleInput(e.target.value)}
      placeholder="Enter a color"
    ></input>
    <button 
    onClick={colorToggle}>
      Toggle Color
    </button>
    </>
  );
};

export default Input;

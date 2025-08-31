import React from 'react';
import './Square.css';

const Square = ({ input, coloring }) => {
  const color = {
    color: coloring ? 'white' : 'black',
    backgroundColor:
      input === 'Empty Value' && coloring
        ? 'black'
        : input === 'Empty Value' && !coloring
        ? 'white'
        : input,
    borderRadius: '5px',
  };
  console.log(input);
  return (
    <div className="color" style={color}>
      <p>{input}</p>
    </div>
  );
};

Square.defaultProps = {
  input: 'Empty Value',
};
export default Square;

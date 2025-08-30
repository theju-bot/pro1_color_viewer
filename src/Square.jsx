import React from 'react';
import './Square.css';

const Square = ({ input, coloring }) => {
  const color = {
    color: coloring ? 'black' : 'white',
    backgroundColor: input === 'Empty Value' ? 'white' : input,
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
  input: 'Empty Color Value',
}
export default Square;

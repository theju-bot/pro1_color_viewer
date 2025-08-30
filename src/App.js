import Input from './Input';
import Square from './Square';
import { useState } from 'react';

function App() {
  const emtyVal = 'Empty Value';
  const [input, setInput] = useState(emtyVal);
  const[coloring, setColoring] = useState(true);
  
  const colorToggle = () => {setColoring(!coloring)}
  const handleInput = (input) => {
    if (input === '') {
      setInput(emtyVal);
    } else {
      setInput(input);
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <Square input={input} coloring={coloring} />
      <Input className="input" handleInput={handleInput} colorToggle={colorToggle}/>
    </form>
  );
}

export default App;

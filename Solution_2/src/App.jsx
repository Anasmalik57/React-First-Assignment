// import React from 'react';
import Button from './Button';

function App() {
  // Define the onClick function
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './App.css';
import ColorBlock from './colorBlock';
import ColorForm from './colorForm';

function App() {
  // useState to declare initial array of data(colors)
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  let colorMap = colors.map((color, i) => {
    return (
      // Here it seems like we're creating the property color and setting it equal to the 'color' function parameter
      <ColorBlock key={i} color={color} />
    )
  })
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;

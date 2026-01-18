import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter.jsx'
import './App.css'

function App() {
  //let brand = "Ford";
  const [brand, setBrand] = useState("Ford");
  const changeBrand = () => {
    setBrand("BMW");
    console.log(brand);
  }
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
    console.log(color);
  }
   return(
    <div>
      <h1>My Car</h1>
      <h1>Brand : {brand}</h1>
      <button onClick={changeBrand}>Change Brand</button>
      <h1 style={{ color: color }}>Color : {color}</h1>
      <button onClick={changeColor}>Change Color</button>
      <Counter />
    </div>
   );
  }

export default App

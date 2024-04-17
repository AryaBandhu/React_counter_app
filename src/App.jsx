import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const increment = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
    
  }
  
  const dicrement = () => {
    if(counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Arya Number Counter</h1>
      <h2>No: {counter}</h2>
      <button onClick={increment}>Increment {counter}</button>
      <br />
      <br />
      <button onClick={dicrement}>Dicrement {counter}</button>
      <p>this is a peragraph {counter}</p>
    </>
  )
}

export default App

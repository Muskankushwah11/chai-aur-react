import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter App with chai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={subtractValue}>Decrease value</button>
    </>
  )
}

export default App

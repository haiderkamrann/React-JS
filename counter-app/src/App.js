import './App.css'
import { useState } from 'react'  

function App() {

  const [counter, setState] = useState(0)

  const addValue = () =>  setState(counter + 1);
  const removeValue = () => setState(counter - 1);

  return (
    <>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Click Me to Increase</button>
      <button onClick={removeValue}>Click to Decrease the Value</button>
    </>
  )
}

export default App

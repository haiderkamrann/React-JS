import { useEffect, useState } from 'react'
import Nodependency from './Components/Statedependency';
import Emptyarray from './Components/Emptyarray';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let newFun = useEffect(() => {
    setTimeout(() => {
      // console.log('the count is: ', count);
      setCount(() => count + 1)
    }, 1000)
  });

  return (
    <>
    <h5 style={{color: "blue"}}>The count example is of UseEffect with no dependency passed</h5>
      <div className="card">
        <button onClick={newFun}> count is {count} </button>
      </div>


      <Nodependency />
      <Emptyarray />

    </>
  )
}

export default App

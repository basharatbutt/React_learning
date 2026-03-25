import { useState } from 'react'

function App() {
  const[counter, setCounter] = useState(5)


  return (
    <>
     <div>click to update the counter{counter}</div>
     <button onClick={() => setCounter(couner + 1)}> click </button>

    </>
  )
}

export default App

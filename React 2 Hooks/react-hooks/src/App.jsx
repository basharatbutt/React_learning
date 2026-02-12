import { useState } from 'react'

function App() {
  const[counter, setCounter] = useState(8)

  // let counter = 6

   let addValue = () => {
    
    if (counter < 20 ) {
      setCounter( counter + 1)
    }
   }
   let removeValue = () => {
    
    if (counter > 0 ) {
      setCounter( counter - 1)
    }
   }

  return (
    <>
      <h1>chai and react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

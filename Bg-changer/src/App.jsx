import { useState } from 'react'
import './App.css'

function App() {
const [Color, setColor] = useState("pink")

  return (
<>
<div className='w-full h-screen'
style={{backgroundColor: Color}}>
  <div className='flex justify-center gap-4'>
    <button onClick={() =>  setColor (" red")}
       className="px-4 py-2 bg-red-500"
        style={{backgroundColor: "red"}}>
      red
    </button>
    <button onClick={() =>  setColor (" blue")}
       className="px-4 py-2 bg-blue-500" >
      blue
    </button>
    <button onClick={() =>  setColor (" green")}
       className="px-4 py-2 bg-green-500" >
      green
    </button>
    <button onClick={() =>  setColor (" yellow")}
       className="px-4 py-2 bg-yellow-500" >
      yellow
    </button>
  </div>
</div>
</>
  )
}

export default App


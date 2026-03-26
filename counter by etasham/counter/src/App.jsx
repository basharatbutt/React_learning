import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ncount, setnCount] = useState(10)
  const timerRef = useRef(null)

  const newhandle = () => {
    setCount(prev => prev + 1)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setnCount((prev) => (count + 2) * 10) 
    }, 5000)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className='pb-3 text-3xl'> Value = {ncount}</div>
        <div className="pb-3 text-3xl">Click to update the number  {count}</div>
        <button className='cursor-pointer border-2 p-1' onClick={newhandle} >Click Here</button>
      </div>
    </>
  )
}

export default App
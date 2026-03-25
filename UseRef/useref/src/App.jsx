import { useState,useRef,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    alert("hii i am here")
  }, [count])
  

  return (
    <>
      <div className='flex flex-col  justify-center items-center h-screen'>
        click to update the value {count}
      <div className='cursor-pointer ' onClick={() => {setCount(count + 1)}}>Click Here</div>
      </div>

    </>
  )
}

export default App

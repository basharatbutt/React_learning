import { useState,useRef,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const firstRender = useRef(true)


  useEffect (() => {
    alert("hii i am here")
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current=false
      return
    }
    alert("hii i am here too")
  }, [count])
  

  return (
    <>
      <div className='flex flex-col  justify-center items-center h-screen'>
        click to update the value {count}
      <div className='cursor-pointer ' onClick={() => {setCount(count * 10)}}>Click Here</div>
      </div>

    </>
  )
}

export default App

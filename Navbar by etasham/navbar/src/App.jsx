import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex pt-15 pl-162">
      <nav className=' text-xl gap-3 bg-amber-700 w-300 h-20'>
        <ul className='flex gap-10 '>
          <li>img</li>
          <li>About Us </li>
          <li>Services</li>
          <li>Industries</li>
          <li>Our Work ⌄</li>
          <li>Contact Us </li>
        </ul>
      </nav>
     </div>
    </>
  )
}

export default App

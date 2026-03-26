import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex pt-15 justify-center bg-gray-100 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-screen">
      <nav className=' text-xl gap-3  bg-white/70 backdrop-blur-lg border  shadow-sm   h-20 flex items-center px-5 rounded-lg'>
        <ul className='flex gap-10 w-full '>
          <img className='w-32 h-32' src="https://dynamicleo.ae/assets/navbar-logo-BuO6n3VF.png" alt=""  />
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

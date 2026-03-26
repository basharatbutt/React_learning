import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex pt-15 justify-center bg-gray-100 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-screen">
      <nav className=' text-xl gap-3  bg-white/70 backdrop-blur-lg border  shadow-sm  w-222 h-17 flex items-center px-5 rounded-full '>

 <img className='w-9 h-9' src="https://dynamicleo.ae/assets/navbar-logo-BuO6n3VF.png" alt=""  />

        <ul className='flex gap-10 w-full items-center justify-around object-contain px-9'>
         
          <li>About Us </li>
          <li>Services</li>
          <li>Industries</li>
          <li className='flex py-1'>Our Work  <span className='flex items-center justify-center '>⌄</span></li>
          <li className='flex pl-26 bg-blue-50 ' >Contact Us </li>

        </ul>
      </nav>
     </div>
    </>
  )
}

export default App

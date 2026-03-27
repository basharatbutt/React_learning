import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  

  return (
    <>
     <div className="flex pt-15 justify-center bg-gray-100 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-screen">
      <nav className='  gap-3  bg-white/70 backdrop-blur-lg border  shadow-sm  w-full max-w-5xl h-16 flex items-center justify-between px-5 rounded-full '>

 <img className='w-9 h-9 ' src="https://dynamicleo.ae/assets/navbar-logo-BuO6n3VF.png" alt=""  />

        <ul className='hidden md:flex text-lg gap-12 items-center '>
         
          <li className='cursor-pointer hover:font-bold' >About Us </li>
          <li className='cursor-pointer hover:font-bold' >Services</li>
          <li className='cursor-pointer hover:font-bold' >Industries</li>
          <li className='relative group hover:font-bold cursor-pointer flex items-center gap-1'>
  Our Work
  <span>⌄</span>

  <div className='absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40'>
    <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
      Case Study
    </div>
  </div>
</li>
          

        </ul>
        <button className='hidden md:flex bg-black text-white px-6 py-2.5 rounded-full font-medium hover:border transition-colors'>
          Contact Us
        </button>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className=" absolute top-32   left-4 right-4 bg-white shadow-xl border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 text-lg font-medium md:hidden z-40 ">
          <ul className="flex flex-col gap-4 text-lg justify-center">
            <li>About Us</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Our Work</li>
            <li>Case Study</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
     </div>
    </>
  )
}

export default App

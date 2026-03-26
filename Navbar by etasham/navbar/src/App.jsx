import { useState } from 'react'
import './App.css'

function App() {
  // 1. We create a State to track if the mobile menu is Open (true) or Closed (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     {/* The background of the whole page */}
     <div className="pt-5 md:pt-15 flex justify-center bg-gray-100 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-screen px-4 relative">
      
      {/* THE PILL NAVBAR */}
      <nav className='relative bg-white/70 backdrop-blur-lg border shadow-sm w-full max-w-5xl h-16 md:h-20 flex items-center justify-between px-5 rounded-full z-50'>

        {/* --- LEFT SIDE: LOGO --- */}
        {/* Logo is small (w-8) on phones, but grows (md:w-9) on bigger screens */}
        <img className='w-8 h-8 md:w-9 md:h-9' src="https://dynamicleo.ae/assets/navbar-logo-BuO6n3VF.png" alt="logo"  />

        {/* --- CENTER: DESKTOP LINKS --- */}
        {/* hidden md:flex -> This is the secret! It hides the links on phones, and shows them on tablets/laptops */}
        <ul className='hidden md:flex absolute left-1/2 -translate-x-1/2 text-base lg:text-lg gap-6 lg:gap-12 items-center'>
          <li className='cursor-pointer hover:font-bold'>About Us </li>
          <li className='cursor-pointer hover:font-bold'>Services</li>
          <li className='cursor-pointer hover:font-bold'>Industries</li>
          <li className='cursor-pointer hover:font-bold flex'>
            Our Work <span className='flex items-center justify-center ml-1'>⌄</span>
          </li>
        </ul>

        {/* --- RIGHT SIDE: DESKTOP BUTTON --- */}
        {/* hidden md:block -> Hides the button on phones */}
        <button className='hidden md:block bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors'>
          Contact Us
        </button>

        {/* --- MOBILE HAMBURGER ICON (☰) --- */}
        {/* block md:hidden -> Shows on phones, hides on laptops! */}
        <button 
          className="block md:hidden text-3xl font-bold text-gray-800 pb-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Flips the switch when clicked
        >
          {/* If the menu is open, show an X. If closed, show ☰ */}
          {isMenuOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* --- THE MOBILE MENU DROPDOWN BOX --- */}
      {/* If isMenuOpen is true, draw this box on the screen! */}
      {isMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white shadow-xl border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 text-lg font-medium md:hidden z-40">
          <span className="cursor-pointer hover:text-gray-500">About Us</span>
          <span className="cursor-pointer hover:text-gray-500">Services</span>
          <span className="cursor-pointer hover:text-gray-500">Industries</span>
          <span className="cursor-pointer hover:text-gray-500">Our Work</span>
          <button className='bg-black text-white px-6 py-3 rounded-full font-medium mt-2'>
            Contact Us
          </button>
        </div>
      )}

     </div>
    </>
  )
}

export default App
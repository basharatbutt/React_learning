import React from 'react'

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Added 'backdrop-blur-md bg-slate-900/80' for a premium frosted glass effect!
    <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-5 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 transition-all">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 cursor-pointer" onClick={() => scrollToSection('home')}>
        ROTON
      </h1>
      
      {/* Hidden on very small mobile screens, visible on md and up */}
      <ul className="hidden md:flex space-x-8 text-sm font-bold tracking-widest text-slate-300">
        <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-blue-400 transition-colors">HOME</li>
        <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-400 transition-colors">ABOUT</li>
        <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-blue-400 transition-colors">SERVICES</li>
        <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-blue-400 transition-colors">CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
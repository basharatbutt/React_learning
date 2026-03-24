import React from 'react'

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-5 fixed top-0 left-0 w-full z-50 bg-[#0B1121]/95 border-b border-slate-800 transition-all">
      <h1 
        className="text-2xl md:text-3xl font-extrabold tracking-widest text-cyan-400 cursor-pointer" 
        onClick={() => scrollToSection('home')}
      >
        My Protfolio
      </h1>
      
      <ul className="hidden md:flex items-center space-x-8 text-xs lg:text-sm font-bold tracking-widest text-slate-300">
        <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-cyan-400 transition-colors">HOME</li>
        <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-cyan-400 transition-colors">ABOUT</li>
        <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-cyan-400 transition-colors">SERVICES</li>
        <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-cyan-400 transition-colors">CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center px-5 py-4 fixed w-full z-50 bg-black
  via-black to-gray-900 shadow-lg">

      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-wider text-[#00FF66] cursor-pointer hover:text-4xl">
        My Portfolio
      </h1>

      {/* Menu */}
      <ul className="flex space-x-10 text-sm font-bold tracking-widest text-gray-300">
        {["HOME", "ABOUT", "PROJECTS", "BLOG", "CONTACT"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer hover:text-[#00FF66] 
            transition duration-300 after:content-[''] after:absolute after:w-0 
            after:h-[2px] after:bg-[#00FF66] after:left-0 after:-bottom-1 
            hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
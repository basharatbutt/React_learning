import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  },[]);

  return (
    <>
    <Navbar/>
    {/* Main Black Background */}
    <div className="min-h-screen bg-black text-white overflow-hidden pt-20">
      
      <main className="flex flex-col items-center justify-center px-10 lg:px-32">
        
        {/* =========================================
            1. TEXT SECTION (With Particles Behind It)
            ========================================= */}
        {/* We use 'relative' here so the particles ONLY stay inside this box */}
        <div className="relative w-full py-24 mb-24 border-b border-gray-800"> 
          
          {/* THE LIVE MOVING BACKGROUND (Only in this text section) */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0"
            options={{
              fullScreen: { enable: false },
              particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                links: {
                  enable: true,
                  color: "#ffffff",
                  distance: 150,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  outModes: { default: "bounce" },
                },
                size: { value: 2 },
                opacity: { value: 0.4 },
              },
            }}
          />

          {/* THE TEXT (z-10 keeps it in front of the particles) */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold tracking-widest uppercase" style={{ color: '#05FF69' }}>
              HI THERE,
            </h3>
            
            {/* BIGGER TEXT: Changed to text-6xl and lg:text-8xl */}
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              I am <br className="md:hidden" />
              <span style={{ color: '#00FF66' }}>
                <Typewriter
                  words={['Basharat Ul Asad', 'A Full Stack Developer',]}
                  loop={0} 
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-2xl text-lg pt-4 pb-6">
              A passionate Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, and Express.js. I have 4 months of hands-on internship experience where I worked on building responsive web applications and improving my practical development skills. I am continuously learning and improving to build modern, scalable, and user-friendly web solutions.
            </p>

            <button 
              className="text-black font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform"
              style={{ backgroundColor: '#00FF66' }}
            >
              Hire Me
            </button>
          </div>
        </div>


        {/* =========================================
            2. IMAGE SECTION (Next Line, BIGGER, with margins)
            ========================================= */}
        {/* mt-10 and mb-32 add distance from the text above and the section below */}

<div className="flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-2 mt-10 mb-32 gap-86 max-w-7xl mx-auto">

  {/* LEFT SIDE: Text */}
  <div className="w-full lg:w-1/2 flex flex-col">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#22C3E6] mb-6">
      About Me
    </h2>

    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
      I am a passionate Full Stack Developer skilled in <strong>HTML, CSS, JavaScript, React.js, Node.js, and Express.js</strong>.  
      I have <strong>4 months of hands-on internship experience</strong> working on responsive web applications and learning modern development practices.  
      I am continuously improving my skills to build <strong>scalable, efficient, and user-friendly web solutions</strong>.
    </p>

    <button
      className="mt-6 px-8 py-3 md:px-10 md:py-4 text-black font-bold rounded-full bg-[#22C3E6] hover:scale-105 transition-transform"
    >
      Hire Me
    </button>
  </div>

  {/* RIGHT SIDE: Image */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-12">
    <img
      src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/480396975_1861084128042395_2828825702740803829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGK45WVnkAiAjJYM8ZAAkYfUF6klP5r9_9QXqSU_mv3_8iCpVVHoxHqi1ibob2jb4FVRehv2wzkannM0QrC2zll&_nc_ohc=8ixXVHgHx6oQ7kNvwEDJyt7&_nc_oc=AdnhfBhSVwjeUXET9HVhIoD4cO1PYWzO3ZWplJZOaDRQhGJVIKu-c_Jt7AMRZR62O6kYdNwuK5eJLNk6B14CadkJ&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=44jfrjFIpNq635wPAJrKDg&_nc_ss=8&oh=00_Afzsq38LeFr6RfXkPHDjm_VDz_ls6RP1pukWnJfSO9BtqA&oe=69B83399"
      alt="Basharat Ul Asad"
      className="w-[660px] sm:w-[350px] md:w-[450px] lg:w-[600px] rounded-2xl border-4 shadow-2xl object-cover"
      style={{ borderColor: '#22C3E6' }}
    />
  </div>

</div>

      </main>

    </div>
    </>
  );
}

export default App;
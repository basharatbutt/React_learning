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

  // Click functions for your social links
  const openGitHub = () => window.open("https://github.com/basharatbutt", "_blank");
  const openLinkedIn = () => window.open("https://www.linkedin.com/in/basharat-butt-b155a03b0/", "_blank");

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white overflow-hidden pt-20">
      
      <main className="flex flex-col items-center justify-center px-6 lg:px-50">
      
        {/* =========================================
            1. HERO SECTION 
            ========================================= */}
        <div className="relative w-full py-16 lg:py-24 mb-24 border-b border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"> 
          
          {/* THE LIVE MOVING BACKGROUND */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0"
            options={{
              fullScreen: { enable: false },
              particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
                size: { value: 2 },
                opacity: { value: 0.4 },
              },
            }}
          />

          {/* LEFT SIDE: THE TEXT & SOCIAL ICONS */}
          <div className="relative z-10 space-y-6 w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-bold tracking-widest uppercase" style={{ color: '#05FF69'  }}>
              HI THERE,
            </h3>
            
            <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold leading-tight">
              I am <br className="hidden lg:block" />
              <span className='font-black uppercase tracking-wider ' style={{ color: '#00FF66', fontFamily: "'Poppins', sans-serif", 
    fontWeight: '700' }}>
                <Typewriter
                  words={['Basharat Ul Asad', 'A Full Stack Developer']}
                  loop={0} 
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-2xl text-base lg:text-lg pt-2 pb-4 mx-auto lg:mx-0">
              A passionate Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, and Express.js. I have 4 months of hands-on internship experience where I worked on building responsive web applications and improving my practical development skills.
            </p>

            <button 
              className="text-black font-bold text-lg px-8 py-3 lg:px-10 lg:py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,102,0.4)]"
              style={{ backgroundColor: '#00FF66' }}
            >
              Hire Me
            </button>

           
          </div>

          {/* RIGHT SIDE: THE IMAGE */}
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/480396975_1861084128042395_2828825702740803829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGK45WVnkAiAjJYM8ZAAkYfUF6klP5r9_9QXqSU_mv3_8iCpVVHoxHqi1ibob2jb4FVRehv2wzkannM0QrC2zll&_nc_ohc=8ixXVHgHx6oQ7kNvwEDJyt7&_nc_oc=AdnhfBhSVwjeUXET9HVhIoD4cO1PYWzO3ZWplJZOaDRQhGJVIKu-c_Jt7AMRZR62O6kYdNwuK5eJLNk6B14CadkJ&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=44jfrjFIpNq635wPAJrKDg&_nc_ss=8&oh=00_Afzsq38LeFr6RfXkPHDjm_VDz_ls6RP1pukWnJfSO9BtqA&oe=69B83399"
              alt="Basharat Ul Asad"
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-2xl border-4 shadow-2xl object-cover"
              style={{ borderColor: '#00FF66' }} 
            />
          </div>
             </div>


 {/* ---> NEW SOCIAL ICONS ROW HERE <--- */}
            <div className="flex items-center justify-center lg:justify-center gap-16 pb-20">
              
              {/* GitHub Icon */}
              <svg 
                onClick={openGitHub}
                className="w-9 h-9 cursor-pointer text-gray-300 hover:text-[#00FF66] hover:scale-110 transition-all duration-300" 
                fill="currentColor" viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>

              {/* LinkedIn Icon */}
              <svg 
                onClick={openLinkedIn}
                className="w-9 h-9 cursor-pointer text-gray-300 hover:text-[#00FF66] hover:scale-110 transition-all duration-300" 
                fill="currentColor" viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>

            </div>

        

        {/* =========================================
            2. ABOUT ME SECTION
            ========================================= */}
        <div className="flex flex-col items-center text-center px-5 sm:px-8 lg:px-2 mt-10 mb-32 max-w-4xl mx-auto pt-36">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3ec23c] mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am a passionate Full Stack Developer skilled in <strong>HTML, CSS, JavaScript, React.js, Node.js, and Express.js</strong>.  
            I have <strong>4 months of hands-on internship experience</strong> working on responsive web applications and learning modern development practices.  
            I am continuously improving my skills to build <strong>scalable, efficient, and user-friendly web solutions</strong>.
          </p>

          <button
            className="mt-8 px-8 py-3 md:px-10 md:py-4 text-black font-bold rounded-full bg-[#3ec23c] hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,195,230,0.4)]"
          >
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-center lg:justify-center text-xl gap-16 pt-36 pb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3ec23c] mb-6">
            Services
          </h2>
        </div>

      </main>
    </div>
    </>
  );
}

export default App;
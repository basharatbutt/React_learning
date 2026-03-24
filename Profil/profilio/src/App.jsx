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
      
      <main className="flex flex-col items-center justify-center px-6 lg:px-28">
      
        {/* =========================================
            1. HERO SECTION 
            ========================================= */}
        <div className="relative w-full py-16 lg:py-24 border-b border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"> 
          
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

          {/* LEFT SIDE: THE TEXT */}
          <div className="relative z-10 space-y-6 w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-bold tracking-widest uppercase" style={{ color: '#00FF66' }}>
              HI THERE,
            </h3>
            
            <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold leading-tight">
              I am <br className="hidden lg:block" />
              <span className='font-black uppercase tracking-wider' style={{ color: '#00FF66', fontFamily: "'Poppins', sans-serif", fontWeight: '700' }}>
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

        {/* SOCIAL ICONS ROW */}
        <div className="flex items-center justify-center gap-10 pt-10 pb-20 w-full">
          {/* GitHub Icon */}
          <svg onClick={openGitHub} className="w-10 h-10 cursor-pointer text-gray-400 hover:text-[#00FF66] hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {/* LinkedIn Icon */}
          <svg onClick={openLinkedIn} className="w-10 h-10 cursor-pointer text-gray-400 hover:text-[#00FF66] hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>


        {/* =========================================
            2. ABOUT ME SECTION (UPGRADED DESIGN)
            ========================================= */}
        <div className="w-full max-w-7xl mx-auto pt-10 pb-32">
          
          {/* Section Header with Green Line */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: '#00FF66' }}>
              About Me
            </h2>
            <div className="w-24 h-1 mt-4 mx-auto rounded-full" style={{ backgroundColor: '#00FF66' }}></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: Text & Contact */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-white">Get to know me!</h3>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I am a passionate Full Stack Developer skilled in <strong className="text-white">HTML, CSS, JavaScript, React.js, Node.js, and Express.js</strong>.  
                I have <strong className="text-white">4 months of hands-on internship experience</strong> working on responsive web applications and learning modern development practices.  
                I am continuously improving my skills to build <strong className="text-white">scalable, efficient, and user-friendly web solutions</strong>.
              </p>

              {/* Upgraded Contact Box */}
              <div className="bg-[#111111] border border-gray-800 p-6 rounded-2xl space-y-5 shadow-lg">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-2xl border border-gray-700 shadow-inner text-[#00FF66]">✉</div>
                  <span className="hover:text-[#00FF66] transition-colors cursor-pointer text-lg">basharatdev57@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-2xl border border-gray-700 shadow-inner text-[#00FF66]">🕻</div>
                  <span className="text-lg">0310 5322073</span>
                </div>
               
              </div>

              <button className="mt-4 px-8 py-3 md:px-10 md:py-4 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,102,0.4)]" style={{ backgroundColor: '#00FF66' }}>
                Download CV
              </button>
            </div>

            {/* RIGHT COLUMN: Stats & Skills */}
            <div className="w-full lg:w-1/2 space-y-8">
              
              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-[#00FF66] transition-all duration-300 group shadow-lg">
                  <h4 className="text-5xl font-black mb-2 group-hover:scale-110 transition-transform origin-left" style={{ color: '#00FF66' }}>4+</h4>
                  <p className="text-gray-400 font-medium text-lg">Months<br/>Experience</p>
                </div>
                <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-[#00FF66] transition-all duration-300 group shadow-lg">
                  <h4 className="text-5xl font-black mb-2 group-hover:scale-110 transition-transform origin-left" style={{ color: '#00FF66' }}>10+</h4>
                  <p className="text-gray-400 font-medium text-lg">Projects<br/>Completed</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">My Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {/* You can easily add or remove skills from this list! */}
                  {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Git', 'MongoDB'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-5 py-2 bg-gray-900 text-gray-300 font-medium rounded-xl border border-gray-700 hover:text-[#00FF66] hover:border-[#00FF66] hover:shadow-[0_0_10px_rgba(0,255,102,0.2)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================
            3. SERVICES SECTION 
            ========================================= */}
        <div className="w-full max-w-7xl mx-auto pb-32 border-t border-gray-800 pt-20">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: '#00FF66' }}>
              My Services
            </h2>
            <p className="text-gray-400 mt-4 text-lg">What I can do for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Web Development */}
            <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-3 hover:border-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gray-900 group-hover:bg-[#00FF66]/20 transition-colors">
                <svg className="w-8 h-8 text-[#00FF66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Building fast, responsive, and highly interactive websites using modern technologies like React.js and Tailwind CSS.
              </p>
            </div>

            {/* Card 2: UI/UX Design */}
            <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-3 hover:border-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gray-900 group-hover:bg-[#00FF66]/20 transition-colors">
                <svg className="w-8 h-8 text-[#00FF66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UI / UX Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating clean, modern, and user-friendly interfaces that provide a seamless experience for your visitors across all devices.
              </p>
            </div>

            {/* Card 3: Backend & APIs */}
            <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-3 hover:border-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gray-900 group-hover:bg-[#00FF66]/20 transition-colors">
                <svg className="w-8 h-8 text-[#00FF66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Backend & APIs</h3>
              <p className="text-gray-400 leading-relaxed">
                Developing secure and robust server-side logic and RESTful APIs using Node.js and Express.js to power your applications.
              </p>
            </div>

          </div>
        </div>

      </main>
    </div>
    </>
  );
}

export default App;
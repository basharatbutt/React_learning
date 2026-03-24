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

  const openGitHub = () => window.open("https://github.com/basharatbutt", "_blank");
  const openLinkedIn = () => window.open("https://www.linkedin.com/in/basharat-butt-b155a03b0/", "_blank");

  return (
    <>
    <Navbar/>
    {/* Deep, premium slate-blue background */}
    <div className="min-h-screen bg-[#0B1121] text-slate-200 overflow-hidden font-sans selection:bg-cyan-500/30">
      
      {/* 1. FIXED THE BACKGROUND BUG: Changed to 'fixed' and 'pointer-events-none' */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#38bdf8" }, // Blueish dots
            links: { enable: true, color: "#38bdf8", distance: 150, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "bounce" } },
            size: { value: 1.5 },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* MASTER CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-28">
      
        {/* =========================================
            HERO SECTION 
            ========================================= */}
        {/* FIXED THE SCROLL BUG: Added scroll-mt-28 to all sections */}
        <section id="home" className="w-full py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 scroll-mt-28 border-b border-white/5"> 
          
          {/* LEFT SIDE: TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-cyan-400 uppercase">
              Welcome to my world
            </h3>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white">
              Hi, I'm <br className="hidden lg:block" />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400'>
                <Typewriter
                  words={['Basharat Ul Asad', 'A Full Stack Dev', 'A UI/UX Designer']}
                  loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                />
              </span>
            </h1>

            <p className="text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
              A passionate Full Stack Developer skilled in React.js, Node.js, and modern web technologies. I build scalable, user-friendly applications that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
              >
                Hire Me
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center gap-5">
                <svg onClick={openGitHub} className="w-8 h-8 cursor-pointer text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <svg onClick={openLinkedIn} className="w-8 h-8 cursor-pointer text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE WITH GLOW EFFECT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[420px]">
              {/* Glowing Orb behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
              <img
                src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/480396975_1861084128042395_2828825702740803829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGK45WVnkAiAjJYM8ZAAkYfUF6klP5r9_9QXqSU_mv3_8iCpVVHoxHqi1ibob2jb4FVRehv2wzkannM0QrC2zll&_nc_ohc=8ixXVHgHx6oQ7kNvwEDJyt7&_nc_oc=AdnhfBhSVwjeUXET9HVhIoD4cO1PYWzO3ZWplJZOaDRQhGJVIKu-c_Jt7AMRZR62O6kYdNwuK5eJLNk6B14CadkJ&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=44jfrjFIpNq635wPAJrKDg&_nc_ss=8&oh=00_Afzsq38LeFr6RfXkPHDjm_VDz_ls6RP1pukWnJfSO9BtqA&oe=69B83399"
                alt="Basharat Ul Asad"
                className="relative z-10 w-full rounded-3xl border border-white/10 shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* =========================================
            ABOUT ME SECTION 
            ========================================= */}
        <section id="about" className="w-full py-20 scroll-mt-28 border-b border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-16 h-1 mt-4 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-slate-400 text-base md:text-lg leading-relaxed text-center lg:text-left">
                I am a passionate Full Stack Developer skilled in <strong className="text-slate-200">HTML, CSS, JavaScript, React.js, Node.js, and Express.js</strong>.  
                I have <strong className="text-slate-200">4 months of hands-on internship experience</strong> working on responsive web applications and learning modern development practices.
              </p>

              {/* Premium Glass Contact Cards */}
              <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl space-y-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800/80 flex items-center justify-center text-sm text-cyan-400 border border-slate-700/50">✉</div>
                  <span className="text-slate-300 text-sm md:text-base break-all hover:text-cyan-400 transition-colors cursor-pointer">basharatdev57@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800/80 flex items-center justify-center text-sm text-cyan-400 border border-slate-700/50">🕻</div>
                  <span className="text-slate-300 text-sm md:text-base">0310 5322073</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800/80 flex items-center justify-center text-sm text-cyan-400 border border-slate-700/50">👤</div>
                  <span className="text-slate-300 text-sm md:text-base">Basharat Ul Asad</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-slate-900/40 border border-slate-800/60 p-6 md:p-8 rounded-2xl text-center backdrop-blur-md">
                  <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">4+</h4>
                  <p className="text-slate-400 font-medium text-sm">Months Experience</p>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/60 p-6 md:p-8 rounded-2xl text-center backdrop-blur-md">
                  <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">10+</h4>
                  <p className="text-slate-400 font-medium text-sm">Projects Completed</p>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/60 p-6 md:p-8 rounded-2xl backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-5 text-center lg:text-left">Tech Stack</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind', 'Git', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICES SECTION
            ========================================= */}
        <section id="services" className="w-full py-20 scroll-mt-28 border-b border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              My <span className="text-cyan-400">Services</span>
            </h2>
            <div className="w-20 h-1 mt-4 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { title: 'Web Development', desc: 'Building fast, responsive, and highly interactive websites using modern technologies like React.js and Tailwind CSS.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
              { title: 'UI / UX Design', desc: 'Creating clean, modern, and user-friendly interfaces that provide a seamless experience across all devices.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
              { title: 'Backend & APIs', desc: 'Developing secure and robust server-side logic and RESTful APIs using Node.js and Express.js.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' }
            ].map((service, index) => (
              <div key={index} className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:-translate-y-2 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-800/80 border border-slate-700/50 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* =========================================
            CONTACT SECTION 
            ========================================= */}
        <section id="contact" className="w-full max-w-3xl mx-auto py-20 scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Contact <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 mt-4 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <p className="text-slate-400 mt-4 text-base">Let's work together! Send me a message below.</p>
          </div>

          <form className="bg-slate-900/40 border border-slate-800/60 p-6 md:p-10 rounded-3xl shadow-xl backdrop-blur-md space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-slate-300 font-medium mb-2 text-sm">Your Name</label>
                {/* PROFESSIONAL UI: Added focus:ring so the box highlights in blue when clicked */}
                <input type="text" placeholder="John Doe" className="w-full bg-slate-950/50 border border-slate-700/50 text-white px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600" />
              </div>
              <div className="w-full">
                <label className="block text-slate-300 font-medium mb-2 text-sm">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-950/50 border border-slate-700/50 text-white px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600" />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-300 font-medium mb-2 text-sm">Your Message</label>
              <textarea rows="5" placeholder="How can I help you?" className="w-full bg-slate-950/50 border border-slate-700/50 text-white px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none placeholder:text-slate-600"></textarea>
            </div>

            <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </section>

      </main>
    </div>
    </>
  );
}

export default App;
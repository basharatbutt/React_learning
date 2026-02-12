import { useState } from 'react'
import './App.css'

function App() {
  // 1. Initialize state with a Tailwind color class (e.g., 'bg-pink-500')
  const [color, setColor] = useState("bg-pink-300")

  return (
    // 2. Use the 'color' variable inside the className using template literals {}
    <div className={`w-full h-screen ${color} flex items-center justify-center`}>
      <div className="flex gap-12">
        <button 
          onClick={() => setColor("bg-red-500")}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Red
        </button>

        <button 
          onClick={() => setColor("bg-blue-500")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Blue
        </button>

        <button 
          onClick={() => setColor("bg-green-500")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Green
        </button>
        <button 
          onClick={() => setColor("bg-orange-500")}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Orange
        </button>
        <button 
          onClick={() => setColor("bg-yellow-500")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          Yellow
        </button>
        <button 
          onClick={() => setColor("bg-white")}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          White
        </button>
        <button 
          onClick={() => setColor("bg-stone-500")}
          className="px-4 py-2 bg-stone-500 text-white rounded-lg"
        >
          Brown
        </button>
      </div>
      </div>

  )
}

export default App


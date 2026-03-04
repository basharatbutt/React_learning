import { useState } from 'react'

function App() {
const [Color, setColor] = useState("brown")
  return (
   <div className="scr w-full h-screen" style={{background : Color}}>
    
    <div className="flex justify-center fixed bottom-12 inset-x-0 flex-wrap">
     <div className='w-150 bg-gray-950 rounded-3xl flex justify-center py-2 gap-3'>

      <button 
      className='w-22 bg-blue-500 rounded-2xl px-4 py-1 '
      onClick={() => setColor ("blue")}>
         bule
      </button>

      <button 
      className='w-22 bg-red-500 rounded-2xl px-4 py-1 '
      onClick={() => setColor ("red")}>
         red
      </button>

      <button 
      className='w-22 bg-green-500 rounded-2xl px-4 py-1 '
      onClick={() => setColor ("green")}>
         green
      </button>
      <button 
      className='w-22 bg-yellow-500 rounded-2xl px-4 py-1 '
      onClick={() => setColor ("yellow")}>
         yellow
      </button>
      </div>
     </div>

   </div>
  )
}

export default App
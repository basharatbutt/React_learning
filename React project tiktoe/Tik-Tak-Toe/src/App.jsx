import { useState } from 'react'
import './App.css'

// --- 1. Keep your SVGs as components (This is the RIGHT way) ---
const CrossIcon = () => (
  <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M810.66 170.66q18.33 0 30.49 12.17t12.17 30.49q0 18-12.33 30.33L572.31 512l268.68 268.33q12.33 12.33 12.33 30.33 0 18.33-12.17 30.49t-30.49 12.17q-18 0-30.33-12.33L512 572.31 243.67 840.99q-12.33 12.33-30.33 12.33-18.33 0-30.49-12.17t-12.17-30.49q0-18 12.33-30.33L451.69 512 183.01 243.67q-12.33-12.33-12.33-30.33 0-18.33 12.17-30.49t30.49-12.17q18 0 30.33 12.33L512 451.69 780.33 183.01q12.33-12.33 30.33-12.33z" />
  </svg>
)

const CircleIcon = () => (
  <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
)

function App() {
  // --- 2. THE GAME STATE ---
  // We create an array of 9 empty spots: [null, null, null, null, null, null, null, null, null]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)

  // --- 3. FUNCTION TO HANDLE CLICK ---
  const handleClick = (index) => {
    // If box is already full, do nothing
    if(board[index] !== null) return;

    // Copy the board
    const newBoard = [...board];
    
    // Update the clicked box
    newBoard[index] = isXTurn ? "X" : "O";
    
    // Save state
    setBoard(newBoard);
    setIsXTurn(!isXTurn); // Switch turn
  }

  return (
    <>
      <header>
        <h1 className='text-3xl text-center py-10 font-bold'>
           Tic-Tac-Toe Game
        </h1>
        <p className="text-center text-xl mb-5">
           Turn: {isXTurn ? "Cross (X)" : "Circle (O)"}
        </p>
      </header>

      <main className="flex justify-center items-center">
        
        {/* --- 4. THE BOARD (Made with CSS Grid, NOT an Image) --- */}
        <div className="grid grid-cols-3 gap-2 bg-gray-800 p-2 rounded-xl">
          
          {/* We map over the 9 spots to create 9 boxes automatically */}
          {board.map((cell, index) => (
            <div 
              key={index} 
              onClick={() => handleClick(index)}
              className="w-24 h-24 bg-white flex justify-center items-center cursor-pointer rounded shadow-md hover:bg-gray-100"
            >
              {/* If value is "X", show Cross. If "O", show Circle. If null, show nothing. */}
              {cell === "X" && <CrossIcon />}
              {cell === "O" && <CircleIcon />}
            </div>
          ))}

        </div>

      </main>
      
      {/* Reset Button */}
      <div className="flex justify-center mt-10">
          <button 
            onClick={() => setBoard(Array(9).fill(null))}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Reset Game
          </button>
      </div>
    </>
  )
}

export default App
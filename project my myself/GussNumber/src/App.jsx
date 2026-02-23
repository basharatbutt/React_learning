import { useState } from 'react'
import './App.css'

function App() {
  const [randomnum, setRandomnum] = useState(() => Math.floor(Math.random() * 100 + 1));
  const [previous, setPrevious] = useState([]);
  const [remaning, setRemaning] = useState(10);
  const [endgame, setEndgame] = useState(false);
  const [lowhigh, setLowHigh] = useState("");
  const [inpvalue, setInpvalue] = useState('')


  let handlechange = () => {
    let value = parseInt(inpvalue);
    if (isNaN(value)) {
      alert("Please Enter a vaild number")
    }
    else if  (value < 1) {
      alert("Enter a value bigger than 1")
    }
    else if  (value > 100) {
      alert("Enter a value smaller than 100")
    }
  

 if (value === randomnum) {
      alert("🎉 Yes! You guessed it right!");
      setGameOver(true);
    } else if (remaning === 0) {
      alert('💀 Game Over! The number was idk');
      setGameOver(true);
    } else if (value < targetNumber) {
      alert("📉 Your number is too low");
    } else if (value > targetNumber) {
      alert("📈 Your number is too high");
    }

    }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">


        <div className="upper flex items-center justify-center py-10 text-4xl font-bold text-orange-400">
          New Guessing Game
        </div>


        <p className='flex flex-col items-center justify-center py-2 text-xl text-center text-gray-300'>
          <span className='text-2xl' >Guess a number between 1 to 100</span>
          <span className=" mt-3">You have 10 attempts to try</span>
        </p>


        <div className="flex-1 flex flex-col items-center pt-10">
          <div className="container bg-gray-800 p-13 gap-52 rounded-xl shadow-lg text-center max-w-md ">

            <h1 className="text-4xl font-bold mb-6 text-orange-500">
              Guess a Number
            </h1>


            <div className="flex justify-center items-center gap-2">
              <div className="inp text-white border border-gray-500 w-60 rounded-md shadow-inner overflow-hidden bg-gray-700">
                <input
                  type="number"
                  className='w-full bg-transparent text-white outline-none py-2 pl-3 text-xl placeholder-gray-400'
                  id='inputt'
                  placeholder='Enter number'
                  value={inpvalue}
                  onChange={(e) => setInpvalue(e.target.value)}
                />
              </div>

              <button className='bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 font-bold tracking-wide text-white transition-colors'
                onClick={handlechange}
              >
                Submit
              </button>

            </div>
          </div>



          <p className=' pre text-white mt-4 text-lg font-medium'>
            Previous :
          </p>
          <p className=' ree text-white mt-4 text-lg font-medium'>
            Remaining :
          </p>

        </div>


      </div>

    </>

  )
}

export default App

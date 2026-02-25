import { useState } from 'react'
import './App.css'

function App() {
  const [randomnum, setRandomnum] = useState(() => Math.floor(Math.random() * 100 + 1));
  const [previous, setPrevious] = useState([]);
  const [remaning, setRemaning] = useState(10);
  const [endgame, setEndgame] = useState(false);
  const [message, setMessage] = useState(""); 
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
    hightolow(value);
    dispreious();
   }


   let hightolow = (correct) => {
     if (correct === randomnum){
     setMessage(`🎉 You Win! You guessed it right!`)
     End(); 
     }
     else if(correct < randomnum){
      setMessage(`Your number is too Low!`)
      disremaining ();
     }
     else if(correct > randomnum){
      setMessage(`Your number is too High!`)
      disremaining ();
     }
   }


   let disremaining = () => {
    setRemaning(remaning - 1);
    if (remaning  === 1){
      setMessage(`Game over`)
      End();
    }
   }

   let dispreious = () => {
    let value = parseInt(inpvalue);
    setPrevious(prev => [...prev, value])
   }


   let End = () => {
     setEndgame(true);
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
                  disabled={endgame}
                />
              </div>

              <button className='btn bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 font-bold tracking-wide text-white transition-colors'
                onClick={handlechange}
                disabled={endgame}
              >
                Submit
              </button>
            </div>
          </div>

     <div className="felx mt-5 text-2xl font-bold tracking-wide  text-orange-100">{message}</div>

          <p className=' pre text-white mt-4 text-xl font-medium'>
            Previous : {previous.join(", ")}
          </p>
          <p className=' ree text-white mt-4 text-xl font-medium'>
            Remaining attempts : {remaning}
          </p>

        

        </div>


      </div>

    </>

  )
}

export default App

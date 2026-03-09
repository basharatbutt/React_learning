import { useState } from 'react'
import './App.css'

function App() {
  const [Value, setValue] = useState("0");


   // This is where your try...catch belongs!
  const calculateResult = () => {
    try{
     const result = eval(Value);
     setValue(String(result))
    }
      catch(error){
       setValue("Error")
    }
   }   
}
 

  return (
    <>
    <div className="mian w-full h-screen flex justify-center items-center bg-gray-200">
       <div className="calculator  bg-gray-900 p-6 rounded-3xl shadow-2xl w-80">
<div className="input w-full h-16 my-4 bg-gray-800 rounded-xl shadow-inner">
          <input
           type="text"
           readOnly
           value={Value} 
           className='w-full h-full bg-transparent text-white text-right text-3xl px-4 outline-none cursor-default rounded-xl'/>
        </div>


<div className="allbtn flex flex-col gap-3">
         <div className="buttons flex justify-between">
          <input type="button" value="AC"
          onClick={(e) => setValue( "")}
           className="w-14 h-14 bg-gray-400 rounded-full text-black font-bold text-xl cursor-pointer hover:bg-gray-500 active:scale-95 transition-transform" />
          <input type="button" value="DC" onClick={(e) => setValue(Value.slice(0 , -1) )} className="w-14 h-14 bg-gray-400 rounded-full text-black font-bold text-xl cursor-pointer hover:bg-gray-500 active:scale-95 transition-transform" />
          <input type="button" value="." onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-400 rounded-full text-black font-bold text-xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="/" onClick={(e) => setValue(Value + e.target.value)}  className="w-14 h-14 bg-orange-500 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-orange-600 active:scale-95 transition-transform" />
         </div>

         {/* ROW 2: Numbers */}
         <div className="buttons flex justify-between">
          <input type="button" value="7" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="8" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="9" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="*" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-orange-500 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-orange-400 active:scale-95 transition-transform" />
         </div>

         {/* ROW 3: Numbers */}
         <div className="buttons flex justify-between">
          <input type="button" value="4" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="5" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="6" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="+" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-orange-500 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-orange-400 active:scale-95 transition-transform" />
         </div>

         {/* ROW 4: Numbers */}
         <div className="buttons flex justify-between">
          <input type="button" value="1" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="2" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="3" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="-" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-orange-500 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-orange-400 active:scale-95 transition-transform" />
         </div>

         {/* ROW 5: Bottom Row */}
         <div className="buttons flex justify-between">
          <input type="button" value="00" onClick={(e) => setValue(Value + e.target.value)} className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="0" onClick={(e) => setValue(Value + e.target.value)}  className="w-14 h-14 bg-gray-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:bg-gray-600 active:scale-95 transition-transform" />
          <input type="button" value="=" onClick={calculateResult} className="w-[124px] h-14 bg-orange-500 rounded-full text-white font-bold text-3xl cursor-pointer hover:bg-orange-400 active:scale-95 transition-transform" />
         </div>
         </div>
         

       </div>
    </div>
    </>
  )
}

export default App

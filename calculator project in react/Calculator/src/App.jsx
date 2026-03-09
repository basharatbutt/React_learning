import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="mian w-100 h-100">
       <div className="calculator bg-mist-900 px-22 gap-8">


        <div className="input">
          <input type="text" />
        </div>


<div className="allbtn bg-amber-600 grid  gap-4">
         <div className="buttons">
          <input type="button" value="AC" />
          <input type="button" value="DC" />
          <input type="button" value="." />
          <input type="button" value="/" />
         </div>

         <div className="buttons">
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" value="*" />
         </div>

         <div className="buttons">
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" value="+" />
         </div>

         <div className="buttons">
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input type="button" value="-" />
         </div>

         <div className="buttons">
          <input type="button" value="00" />
          <input type="button" value="0" />
          <input type="button" value="=" />
         </div>
         </div>


       </div>
    </div>
    </>
  )
}

export default App

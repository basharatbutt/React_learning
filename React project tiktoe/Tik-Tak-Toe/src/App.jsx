import { useState,useCallback  } from 'react'
import './App.css'

function App() {
  const [Cross, setCross] = useState("")
  const [Circle, setCircle] = useState("")

  const playgame = useCallback(
     () => {
      let Cross = "";
      console.log("Game started");
    },[])
  

  return (
    <>
    <header>
      <h1 className='flex text-3xl justify-center py-23  align-middle text-center'>Hey!Welcome to my Tik-Tak-Toe</h1>
    </header>
    <main className="pic">
      <div className="picture flex text-3xl justify-center items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBIk7DfRBjfDy1E8zY9Z1CtFlEGJ-I57U1Q&s" alt="Tik-Tak-Toe"/>
      </div>

      <div className="cross">
        <div className="text-black"> {/* Container to control color/size */}
            <svg 
              className="svg-icon" 
              style={{ 
                width: "100px",       // I made it bigger so you can see it
                height: "100px", 
                verticalAlign: "middle", 
                fill: "currentColor", 
                overflow: "hidden" 
              }} 
              viewBox="0 0 1024 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
      </div>
      </div>


      <div className="circle">
         <div className="circle text-black"> {/* Added Color Here */}
            <svg 
              className="svg-icon" 
              style={{ width: "100px", height: "100px", verticalAlign: "middle", fill: "currentColor", overflow: "hidden" }} 
              viewBox="0 0 1024 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* This path draws a Ring/Circle */}
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
            </svg>
          </div>

        </div>
    </main>
    </>
  )
}

export default App

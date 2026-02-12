import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='bg-yellow-900 text-black p-4 rounded-xl text-shadow-amber-200m'>tailwind test</h2>
    <Cards username='basharat' btn='click'/>
    <Cards username='butt' btn='me'/>
    </>
  )
}

export default App

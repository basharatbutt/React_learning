import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Card, setCard] = useState([])

const fetchData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let data = await response.json()
  setCard(data)
  console.log(data)
}

  useEffect(() => {
    fetchData()
  },[] )
  
  return (
    <>
     <div className="container">
      {Card.map((card) => {
        return <div className="Card"  key={card.id} >
           <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
           <p>{card.body}</p>
           <span>By UserId : {card.userId}</span>
          </div>
      })}
     </div>
    </>
  )
}

export default App

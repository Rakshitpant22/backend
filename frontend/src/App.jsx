import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

 useEffect(()=> {
 // axios.get('http://localhost:3000/api/jokes') used proxy in next line 
 axios.get('/api/jokes')
  .then((response) =>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log('error')
  })
 },)
  return (
    <>
     <h1> Today's Joke </h1>
     <p>JOKES:{jokes.length}</p>

     {
      jokes.map((joke,index)=>(
       <div key={joke.id}>
        <h2>{joke.title}</h2>
        <p>{joke.content}</p>
       </div>
      ))
     }
    </>
  )
}

export default App

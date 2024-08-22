import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [card, setCard] = useState([])
  const fetchData=async()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json()
    setCard(data)
    console.log(data)

  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <div className='container bg-slate-200 flex flex-wrap gap-5 w-full '> 
      {card.map((c)=>{
        return <div key={c.id}className='p-4 border-2 border-indigo-600  bg-slate-400 w-96 text-sm '>
          <h1>{c.title}</h1>
          <p>{c.body}</p>
          <span>By:UserId{c.userId}</span>
        </div>
      })}
      

    </div>
    </>
  )
}

export default App

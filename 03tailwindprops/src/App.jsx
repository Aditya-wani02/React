import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username : 'Aditya',
  age : 21
}
let newArr = [1,2,3,4,5]
let girl = 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3'
let boy = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"  


  return (
    <>
   <h1 className='bg-green-400 text-black p-4
   rounded-xl mb-5'>Tailwind test</h1>
  <Card username = 'Javacript Code' btnText = "Click me" src={boy} />
  <Card username = 'Choti'  btnText = "next" src={girl} />
  <Card/>
  
    </>
  )
}

export default App

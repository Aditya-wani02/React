import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setcounter] =  useState(5)
// let counter = 5

const addValue = () =>
{
  
  counter = counter +1
  if (counter > 20){
    return ;
  }
  setcounter(counter)
  console.log('clicked' , counter);


}

const removeValue = () =>
{
  
  counter = counter -1
  if(counter < 0 ){
   return  
  }
  setcounter(counter )
  console.log('clicked' , counter);


}

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value :{counter} </h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
       onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer :{counter}</p>
  
    </>
  )
}

export default App

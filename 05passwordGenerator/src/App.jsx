import { useState , useCallback } from 'react'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed,setnumberAllowed ]  = useState(false);
  const [charAllowed,setcharAllowed ]  = useState(false);
  const [ password , setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str +='0123456789'
    if(charAllowed) str =+ '!@#$%^&*{}[]~-_=+'

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass = str.charAt(char) 
    }
    setpassword(pass)

  },[length,charAllowed,numberAllowed,setpassword])
 

  return (

     

      <div className='w-full mx-auto max-w-md shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

       
        <input 
          type="text"
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='"Password'
          readOnly
        

        />
        <button className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label> Length: {length}</label>
         </div>
         <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
       </div>
      </div>
      </div>
  
  )
}

export default App

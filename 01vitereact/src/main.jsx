import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app!!</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props: {
//       href: 'https://google.com',
//       target : '_blank',

//   },
//   children : 'click me to visit gooogle'
// }
// react ke hisab se
const anotherUser = "Code test"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com' ,target:'_blank' },
  'click me to visit google',
  anotherUser   //evaluate structure
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // anotherElement 
    // ReactElement
    <App/>

)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter , setCounter] = useState(10)
  // let Counter = 5;

  const addValue = () => {
    if(Counter <20){
      setCounter(Counter+1)
    }
    
  }
  const removeValue = () => {
    if(Counter > 0){
      setCounter(Counter-1)
    }
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {Counter}</h2>
      <button
      onClick={addValue}
      >Add value {Counter}</button><br /><br />
      <button
      onClick={removeValue}
      >Remove value {Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App

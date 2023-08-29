import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)
  let [name,changeName] = useState('')

  // increase counter value
  const addValue = () =>{
    if (counter>=0 && counter <20) {
      setCounter(counter + 1)
    }
  }
  
  // decrease counter value
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter - 1)
    }
  }

  const renameValue = () =>{
    changeName(name = "React js")
  }

  return (
    <>
    <h1>Chai aur {name}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    <br />
    <button onClick={renameValue}>Change name</button>
    </>
  )
}

export default App

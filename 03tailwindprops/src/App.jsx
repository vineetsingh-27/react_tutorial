import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h1 className='bg-green-500 text-white rounded-xl p-4 mb-4'>Tailwind CSS</h1>
    <Card username = "Shreya" btnText = "click me"/>
    <br />
    <Card/>
    </>
  )
}

export default App

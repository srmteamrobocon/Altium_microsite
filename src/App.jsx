import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApplicationForm />
    </>
  )
}

export default App

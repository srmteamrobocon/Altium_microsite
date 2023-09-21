import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import Hero from './Components/Hero'
import InstagramNavbar from './Components/InstagramNavbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InstagramNavbar />
      {/* <Hero /> */}
      <ApplicationForm />
    </>
  )
}

export default App

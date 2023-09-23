import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import Hero from './Components/Hero'
import InstagramNavbar from './Components/InstagramNavbar'
import About from './Components/About'
import Speaker from './Components/Speaker'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark:bg-gray-950 bg-white'>
        <InstagramNavbar />
        {/* THE HERO-SECTION IS HANDLED BY THE NAVBAR COMPONENT */}
        <About />
        {/* <Speaker /> */}
        <ApplicationForm />
        <Footer />
      </div>
    </>
  )
}

export default App

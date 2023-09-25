import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import InstagramNavbar from './Components/InstagramNavbar'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <InstagramNavbar />
      {/* THE HERO-SECTION IS HANDLED BY THE NAVBAR COMPONENT */}
      <div className='dark:bg-gradient-to-b dark:from-custom_dark dark:via-indigo-950 dark:to-gray-950 dark:to-90% bg-white'>
        <About />
        <ApplicationForm />
        <Footer />
      </div>
    </>
  )
}

export default App

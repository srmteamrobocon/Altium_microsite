import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import Hero from './Components/Hero'
import InstagramNavbar from './Components/InstagramNavbar'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark:bg-gray-950 bg-white'>
        <InstagramNavbar />
        {/* <Hero /> */}
        <ApplicationForm />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App

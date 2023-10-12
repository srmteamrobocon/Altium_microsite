import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import InstagramNavbar from './Components/InstagramNavbar'
import About from './Components/About'
import Footer from './Components/Footer'
import Button_pair from '../src/Components/Button_pair'

function App() {

  return (
    <>

      <InstagramNavbar />
      {/* THE HERO-SECTION IS HANDLED BY THE NAVBAR COMPONENT */}
      <div className='bg-gradient-to-b from-custom_dark via-indigo-950 to-gray-950 to-90% bg-white text-white'>
        <About />
        <ApplicationForm />
        <Footer />
      </div>
    </>
  )
}

export default App
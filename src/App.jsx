import { useState } from 'react'
import ApplicationForm from './Components/ApplicationForm'
import Hero from './Components/Hero'
import InstagramNavbar from './Components/InstagramNavbar'
import Footer from './Components/Footer'
import './App.css'
import FileUpload_test from './Components/FileUpload_test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark:bg-gray-950 bg-white'>
        <InstagramNavbar />
        {/* THE HERO-SECTION IS HANDLED BY THE NAVBAR COMPONENT */}
        <ApplicationForm />
        <Footer />
        {/* <FileUpload_test /> */}
      </div>
    </>
  )
}

export default App

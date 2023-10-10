import { useState } from 'react'
import ApplicationForm from './ApplicationForm'
import InstagramNavbar from './InstagramNavbar'
import About from './About'
import Footer from './Footer'

function MainPage() {
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

export default MainPage

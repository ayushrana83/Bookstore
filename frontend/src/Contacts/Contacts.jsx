import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Contacts() {
  return (
    <div>
        <div className='bg-white'>
        <Navbar/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Contacts
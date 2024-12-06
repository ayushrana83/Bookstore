import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FreeBook from '../components/FreeBook'


function Home() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
    </div>
  )
}

export default Home
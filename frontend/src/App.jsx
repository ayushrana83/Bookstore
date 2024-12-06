import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import SignUp from './components/SignUp'
import Contacts from './Contacts/Contacts'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'

const App = () => {
  const [authUser , setAuthUser] = useAuth();
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={authUser ?<Courses/> : <Navigate to={"/signup"}/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
      <Toaster/>

    </div>
  )
}

export default App
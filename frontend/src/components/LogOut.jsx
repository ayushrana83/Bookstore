import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LogOut() {
    const [authUser , setAuthUser] = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        try {
            setAuthUser({
              ...authUser,
              user: null,
            });
            toast.success("Logout successfully");
            localStorage.removeItem("Users");
            setTimeout(() => {
                window.location.reload();
                navigate("/")
            }, 2000);
          } catch (error) {
            toast.error("Error: " + error);
            setTimeout(() => {}, 2000);
          }
    }
  return (
    <div onClick={handleLogout} className='bg-red-500 font-medium text-lg rounded-lg text-white cursor-pointer px-2 py-1'>Logout</div>
  )
}

export default LogOut
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const user = {
            email : data.email ,
            password : data.password,
        }

        await axios.post("http://localhost:3000/user/login" , user)
        .then((res) =>{
            console.log(res.data);
            if(res.data)
            {
                toast.success("login successful");
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                    localStorage.setItem("Users" , JSON.stringify(res.data.user));
                    window.location.reload();
                    Navigate('/');
                },2000);
            }
        })
        .catch((err)=>{
            if(err.reponse)
            {
                console.log(err.reponse);
                toast.error(err.reponse.data.message);
            }
        })
    };

    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} > 
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={'/'} onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">x</Link>
                    <h3 className="font-bold text-2xl">Login</h3>
                    {/* email */}
                    <div className='flex flex-col text-lg mt-7 mb-7 font-medium'>
                        <span>Email</span>
                        <input className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600' type="email" placeholder='Enter email' 
                        {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-500 font-normal'>This field is required</span>} 
                    </div>
                    {/* password */}
                    <div className='flex flex-col text-lg mt-7 font-medium mb-7'>
                        <span>Password</span>
                        <input className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600' type="text" placeholder='Enter password' 
                        {...register("password", { required: true })}/>
                        {errors.password && <span className='text-red-500 font-normal'>This field is required</span>}
                    </div>
                    <div className='space-y-3 text-lg '>
                        <button  className='px-3 py-2 bg-pink-500 hover:bg-pink-700 text-md rounded-lg font-medium text-white'>Login</button>
                        <p>Not register ? <Link to={'/signup'} className='underline text-blue-400 '> Sign Up</Link></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
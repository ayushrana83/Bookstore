import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className=' mt-16 dark:bg-slate-900 dark:text-white'>
        <div className='flex h-screen justify-center items-center bg-slate-200 dark:bg-slate-900 dark:text-white'>
            <div className='w-[90%] md:w-[45%] relative p-4 border-2 shadow-md rounded-lg bg-white dark:bg-slate-900 dark:text-white'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Link to={'/'} className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">x</Link>
                <h3 className="font-bold text-2xl">Contact us</h3>
                {/* email */}
                <div className='flex flex-col text-lg mt-6 space-y-2 font-medium'>
                    <span>Email</span>
                    <input className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600' type="email" placeholder='Enter email'
                    {...register("email", { required: true })} />
                    {errors.email && <span className='text-red-400'>This field is required</span>}
                </div>
                {/* name */}
                <div className='flex flex-col text-lg mt-4 space-y-2 font-medium mb-5'>
                    <span>Name</span>
                    <input className='border bg-transparent w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600' type="text" placeholder='Enter name' 
                    {...register("name", { required: true })}/>
                    {errors.name && <span className='text-red-400'>This field is required</span>}
                </div>
                {/* message */}
                <div className='flex flex-col text-lg mt-4 space-y-2 font-medium mb-5'>
                    <span>Message</span>
                    <input className='border w-[90%] bg-transparent rounded-lg outline-none px-1 py-2 text-gray-600' type="text" placeholder='Enter password' 
                    {...register("message", { required: true })} />
                    {errors.password && <span className='text-red-400'>This field is required</span>}
                </div>
                <button className='px-3 py-2 bg-pink-500 hover:bg-pink-700 text-md rounded-lg font-medium text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post('http://localhost:3000/user/signup', user);
            console.log(res.data);

            if (res.data) {
                localStorage.setItem('Users', JSON.stringify(res.data.user));
                navigate('/');
                toast.success('Signup successful');
            }
        } catch (err) {
            if (err.response) {
                toast.error('Error: ' + err.response.data.message);
            } else {
                toast.error('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className='flex h-screen justify-center items-center bg-slate-200 dark:bg-slate-900 dark:text-white'>
            <div className='w-[90%] md:w-[45%] relative p-4 border-2 shadow-md rounded-lg bg-white dark:bg-slate-900 dark:text-white'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to={'/'} className='btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2'>x</Link>
                    <h3 className='font-bold text-2xl'>Sign up</h3>
                    {/* email */}
                    <div className='flex flex-col text-lg mt-6 space-y-2 font-medium'>
                        <span>Email</span>
                        <input
                            className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600'
                            type='email'
                            placeholder='Enter email'
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className='text-red-400'>This field is required</span>}
                    </div>
                    {/* name */}
                    <div className='flex flex-col text-lg mt-4 space-y-2 font-medium mb-5'>
                        <span>Name</span>
                        <input
                            className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600'
                            type='text'
                            placeholder='Enter name'
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className='text-red-400'>This field is required</span>}
                    </div>
                    {/* password */}
                    <div className='flex flex-col text-lg mt-4 space-y-2 font-medium mb-5'>
                        <span>Password</span>
                        <input
                            className='bg-transparent border w-[90%] rounded-lg outline-none px-1 py-2 text-gray-600'
                            type='password'
                            placeholder='Enter password'
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className='text-red-400'>This field is required</span>}
                    </div>
                    <div className='space-y-3 text-lg '>
                        <button className='px-3 py-2 bg-pink-500 hover:bg-pink-700 text-md rounded-lg font-medium text-white'>
                            Sign up
                        </button>
                        <p>
                            Already registered?{' '}
                            <Link onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-400'>
                                Login
                            </Link>
                        </p>
                    </div>
                    <Login />
                </form>
            </div>
        </div>
    );
}

export default SignUp;

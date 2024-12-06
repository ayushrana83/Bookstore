import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Course() {
  const [data , setData] = useState([]);

  useEffect(()=>{
    const getBooks = async ()=> {
    try {
      const response = await axios.get("http://localhost:3000/book");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log('error in data fetch' , error);
    }
  }
  getBooks();
  },[])

  return (
    <div className='dark:bg-slate-900 dark:text-white max-w-screen-2xl container px-4 md:px-20 mx-auto mt-24 md:mt-32 '>
      <div className='space-y-8 text-center'>
        <h1 className='text-2xl md:text-4xl font-medium'>We're delighted to have you <span className='text-pink-500'>Here! :) </span>
        </h1>
        <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus adipisci aut, unde est, fugit voluptatibus iste dolores, autem in aliquam architecto aperiam optio corporis? Minima eaque quo soluta, tenetur aut mollitia iure ipsa facere qui amet accusantium optio. Est, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores perferendis consequatur illo, ullam esse laborum cupiditate soluta nam sunt?</p>

        <Link to={'/'} className="btn btn-active btn-secondary hover:bg-pink-700">Back</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-10'>
        {data.map(item => <Card item={item} key={item.id} width={'20rem'}/>)}
      </div>
    </div>
  )
}

export default Course
import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import Card from './Card';
import axios from 'axios';

function FreeBook() {
    const [data , setData] = useState([]);

    useEffect(()=>{
      const getBooks = async () => {
        try {
          const response = await axios.get("http://localhost:3000/book");
          const books = response.data.filter(book => book.free);
          setData(books);
        } catch (error) {
          console.log('error in fetching book data' , error);
        }
      }
      getBooks();
    },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 mt-20'>
    <div>
        <h2 className='text-xl font-bold'>Free Books</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolore error quis animi fugiat mollitia voluptas dignissimos suscipit unde ipsum.</p>
    </div>
    <div className='md:m-9 '>
      <Slider {...settings}>
        {data.map((item) => <Card item={item} key={item.id} width={'25rem'}/>)}
      </Slider>
    </div>
    </div>
  )
}

export default FreeBook
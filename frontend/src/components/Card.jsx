import React from 'react'

function Card({item , width}) {
  return (
    <>
    <div style={{width:width}} className="dark:bg-slate-900 dark:text-white card bg-base-100 shadow-xl hover:scale-105 border-2 my-4">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body mt-3">
    <h2 className="card-title">
      {item.name} 
      <div className="badge badge-secondary bg-green-500 ml-3 border-none">Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between font-medium text-lg">
      <div className="badge badge-outline px-3 py-1 hover:bg-pink-500 hover:scale-110 hover:text-white">$ {item.price}</div>
      <div className="badge badge-outline px-3 py-1 hover:bg-pink-500 hover:scale-110 hover:text-white cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
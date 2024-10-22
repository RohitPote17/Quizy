import React from 'react'

function Card() {
  return (
    <div>
      <div className="cardspannel  w-full h-[40vh] bg-purple-600 flex items-center justify-between px-4">
        <div className="card w-[30%] h-[30vh] bg-purple-200 rounded-md p-4 px-6 uppercase">
            <h2 className='font-extrabold text-2xl '>Address</h2>
            <p className='mt-2 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore quas aliquid culpa nam vel eveniet, temporibus dolorum.</p>
        </div>
        <div className="card w-[30%] h-[30vh] bg-purple-200 rounded-md p-4 px-6 uppercase">
            <h2 className='font-extrabold text-2xl '>Contact</h2>
            <p className='mt-2 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore quas aliquid culpa nam vel eveniet, temporibus dolorum.</p>
        </div>
        <div className="card w-[30%] h-[30vh] bg-purple-200 rounded-md p-4 px-6 uppercase">
            <h2 className='font-extrabold text-2xl '>Email</h2>
            <p className='mt-2 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore quas aliquid culpa nam vel eveniet, temporibus dolorum.</p>
        </div>
      </div>
    </div>
  )
}

export default Card

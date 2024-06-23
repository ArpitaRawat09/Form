import React from 'react'

function Card({user,handleRemove,id}) {
  return (
    <>
      <div className='w-52 h-60 rounded-lg flex flex-col justify-center items-center bg-zinc-100 p-2'>
      <div className=' image w-12 h-12  rounded-full bg-zinc-200 overflow-hidden'>
        <img className='w-full h-full object-cover ' src={user.image} alt=''></img>
        </div>
        <h1 className='font-semibold mt-1 text-xl text-center leading-none'>{user.name}</h1>
        <h4 className='text-xs font-semibold opacity-60'>{user.email}</h4>
        <p className='text-center leading-1 mt-3 text-xs font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vero minus architecto!Odit vero minus architecto!</p>
        <button onClick={()=>handleRemove(id)} className='bg-red-600 px-2  mt-4 rounded-full text-white '>Remove It</button>
    </div>
    </>
  )
}

export default Card

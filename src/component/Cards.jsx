import React from 'react'
import Card from './Card'

function Cards({users,handleRemove}) {
  return (
    <div className='w-full  h-90 mx-h-90 overflow-auto p-4  flex  gap-4 justify-center flex-wrap'>
      {users.map((item,index)=>{
         return <Card handleRemove={handleRemove} key={index} user={item} id={index}/>
      })}
    </div>
  )
}

export default Cards

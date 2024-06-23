import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
  const {register,handleSubmit,reset} = useForm();
  const handleFormSubmit = (data)=>{
    handleFormSubmitData(data)
    reset();
  }
  
  return (
    <div className='gap-10 mt-10 flex justify-center'>
      <form className='gap-10 flex' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')} className='rounded-md px-2 py-2 font-semibold outline-bg-sky-500 text-base ' type='text' placeholder='name'></input>
        <input {...register('email')} className='rounded-md px-2 py-2 font-semibold outline-bg-sky-500 text-base ' type='text' placeholder='email'></input>
        <input {...register('image')} className='rounded-md px-2 py-2 font-semibold outline-bg-sky-500 text-base ' type='text' placeholder='image'></input>
        <input className='rounded-md bg-blue-600 text-white font-semibold px-2' type='submit'></input>
      </form>
    </div>
  )
}

export default Form

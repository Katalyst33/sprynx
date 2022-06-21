import React from 'react'
import {RiErrorWarningLine} from 'react-icons/ri'

const InfoPage = () => {
  return (
    <div className='w-5/6 lg:w-9/12 mx-auto my-16'>
        <h1 className='text-2xl pt-5'>Personal Information</h1>
        <p className='text-base'>Use a permanent address where you can receive mail</p>
        <br/>
        <form className='flex gap-1 flex-col'>
            <div className='flex gap-2 flex-col lg:flex-row lg:gap-2'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='first_name'>FirstName</label>
                    <input placeholder='First Name' type="text" className='label lg:min-w-fit' id="first_name"></input>
                </div>
                <br/>
                <div className='flex flex-col gap-2'>
                    <label className="">LastName</label>
                    <input placeholder='Last Name' type="text" className='label lg:w-max'></input>
                </div>
            </div>
            
            <br/>
            <label>Email Address</label>
            <input placeholder='Email Address' type="email" className='label'></input>
            <br/>
            <label>Phone Number</label>
            <input placeholder='Phone Number' type="text" required className='label lg:w-3/5'></input>
            <br/>
            
            <div className='flex gap-2 flex-col lg:flex-row lg:gap-2'>
                <div className='flex flex-col gap-2'>
                    <label>Car Make</label>
                    <input placeholder='Car Make' type="text" required className='label'></input>
                </div>
                <br/>
                <div className='flex flex-col gap-2'>
                    <label>Car Model</label>
                    <input placeholder='Car Model' type="text" required className='label'></input>
                </div>
                <br/>
                <div className='flex flex-col gap-2'>
                    <label>Year</label>
                    <input placeholder='Year' required className='label'></input>
                    <br/>
                </div>
            </div>

            <label>Location</label>
            <input placeholder='Location' type="text" required className='label lg:w-3/6'></input>
            <br/>
            <label>Schedule Time</label>
            <input placeholder='Schedule Time' type="text" required className='label lg:w-3/6'></input>
            <br/>
            <p className='text-gray-600'><RiErrorWarningLine className='inline text-yellow-300'/>  Login to make booking faster</p>
            <div className='md:text-right mt-2'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'>Login</button></div>
        </form>
    </div>
  )
}

export default InfoPage
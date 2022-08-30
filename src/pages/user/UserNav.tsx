import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = (props:any) => {
  return (
    <div className='lg:hidden w-4/6 fixed h-full bg-purple-400 z-30'>
        <div className="flex flex-col mt-32 gap-5 mx-auto w-3/5 text-center">
            <Link
              onClick={()=> props.isOpen && props.closeMenu()}
              to="/account/dashboard"
              className="font-bold transition ease-in-out duration-400 text-white hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Dashboard
            </Link>
            <Link
              to="/account/profile"
              onClick={()=> props.isOpen && props.closeMenu()}
              className="font-bold transition ease-in-out duration-400 text-white hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              My Profile
            </Link>
            <Link
              to=""
              onClick={()=> props.isOpen && props.closeMenu()}
              className="font-bold transition ease-in-out duration-400 text-white hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Payments History
            </Link>
            <Link
              to=""
              onClick={()=> props.isOpen && props.closeMenu()}
              className="font-bold transition ease-in-out duration-400 text-white hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Log Out
            </Link>
        </div>
        <div className='bg-black fixed top-0 right-0 h-full w-full -z-10 opacity-50' onClick={()=>props.closeMenu()}></div>
    </div>
  )
}

export default UserNav
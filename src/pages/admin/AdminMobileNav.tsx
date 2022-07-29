import React from 'react'
import companyLogo from "../../assets/sprynx-logo.png";
import { Link } from "react-router-dom";

const AdminMobileNav = (props: any) => {
    
  return (
    <aside className="w-6/12 md:w-5/12 lg:hidden bg-blue-700 text-white fixed pt-20 top-0 h-full left-0">
        <div className="flex flex-col text-center gap-3">
        <img src={companyLogo} className="w-28 mx-auto mt-4"></img>
        <Link
            to=""
            onClick={()=> props.isOpen && props.closeMenu()}
            className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
        >
            Profile
        </Link>
        <Link
            to="/manager/all-packages"
            onClick={()=> props.isOpen && props.closeMenu()}
            className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
        >
            All Packages
        </Link>
        <Link
            to="/manager/all-services"
            onClick={()=> props.isOpen && props.closeMenu()}
            className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
        >
            All Services
        </Link>
        <Link
            to=""
            onClick={()=> props.isOpen && props.closeMenu()}
            className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
        >
            Settings
        </Link>
        <Link
            to="/manager/all-packages"
            onClick={()=> props.isOpen && props.closeMenu()}
            className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
        >
            Sign Out
        </Link>
        </div>
        <div className='bg-black fixed top-0 right-0 h-full w-full -z-10 opacity-50' onClick={()=>props.closeMenu()}></div>
    </aside>
  )
}

export default AdminMobileNav
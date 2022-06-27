import React from 'react'
import {Link, NavLink} from "react-router-dom"

const NavMobile = (props:any) => {
  return (
    <div className=''>
        <ul className="lg:hidden gap-y-4 flex flex-col bg-white w-9/12 fixed pt-20 top-0 h-full left-0">
            <NavLink to="/" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Home</NavLink>
            <Link to="/about" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">About Us</Link>
            <NavLink to="/all-packages" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Packages</NavLink>
            <NavLink to="/services" onClick={()=> props.isOpen && props.closeMenu()} className=" hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Services</NavLink>
            <NavLink to="/contact-us" onClick={()=> props.isOpen && props.closeMenu()} className=" hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Contact Us</NavLink>
        </ul>
        <div className='bg-black fixed top-0 right-0 h-full w-full -z-10 opacity-50' onClick={()=>props.closeMenu()}></div>
    </div>
  )
}

export default NavMobile
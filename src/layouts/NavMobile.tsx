import React from 'react'
import {Link, NavLink} from "react-router-dom"
import companyLogo from "../assets/sprynx-logo.png";

const NavMobile = (props:any) => {
  return (
    <div className=''>
        <div className='lg:hidden text-center bg-white w-9/12 fixed pt-20 top-0 h-full left-0'>
          <img src={companyLogo} className="w-28 mx-auto mt-4 mb-4"/>
          <ul className="gap-y-4 flex flex-col">
              <NavLink to="/" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Home</NavLink>
              <Link to="/about" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">About Us</Link>
              <NavLink to="/all-packages" onClick={()=> props.isOpen && props.closeMenu()} className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Packages</NavLink>
              <NavLink to="/services" onClick={()=> props.isOpen && props.closeMenu()} className=" hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Services</NavLink>
              <NavLink to="/contact-us" onClick={()=> props.isOpen && props.closeMenu()} className=" hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Contact Us</NavLink>
          </ul>
        </div>
        <div className='bg-black fixed top-0 right-0 h-full w-full -z-10 opacity-50' onClick={()=>props.closeMenu()}></div>
    </div>
  )
}

export default NavMobile
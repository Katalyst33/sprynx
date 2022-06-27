import React from "react"
import companyLogo from "../assets/sprynx-logo.png";
import { Link, NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import NavMobile from "./NavMobile"

function HeaderLayout() {
  var [toggle, setToggle] = React.useState(false)
  function handleClick (){
    return setToggle(!toggle)
  }
  function closeMenu(){
    setToggle(false)
  }
  return (
    <div className="mb-20">
      <div className="flex justify-between items-center px-10 fixed top-0 bg-white shadow-sm w-full">
        <div>
          <img className="w-28" src={companyLogo} />
        </div>
        <div>
          {toggle === false ? <GiHamburgerMenu className="text-xl lg:hidden cursor-pointer" onClick={handleClick}/> : <GrClose onClick={handleClick} className="text-xl lg:hidden cursor-pointer"/>}
          <ul className="lg:flex gap-x-5 hidden">
            <NavLink to="/" className="font-semibold hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Home</NavLink>
            <Link to="/about" className="font-semibold hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">About Us</Link>
            <NavLink to="/all-packages" className="font-semibold hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Packages</NavLink>
            <NavLink to="/services" className=" font-semibold hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Our Services</NavLink>
            <NavLink to="/contact-us" className=" font-semibold hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide">Contact Us</NavLink>
          </ul>
          {toggle && <NavMobile isOpen={true} closeMenu={closeMenu}/>}
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;

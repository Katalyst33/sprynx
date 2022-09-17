import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import companyLogo from "../../assets/sprynx-logo.png";

const UserNav = (props:any) => {
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("id-card");
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <div className='lg:hidden bg-white w-9/12 fixed h-full z-30'>
        <div className="flex flex-col mt-24 gap-5 mx-auto w-3/5 text-center">
          <img src={companyLogo} className="w-28 mx-auto mt-4 mb-4"/>
          <div className='gap-y-4 flex flex-col'>
            <Link
              onClick={()=> props.isOpen && props.closeMenu()}
              to="/"
              className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide"
            >
              Home
            </Link>
            <Link
              onClick={()=> props.isOpen && props.closeMenu()}
              to="/account/dashboard"
              className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide"
            >
              Dashboard
            </Link>
            <Link
              to="/account/profile"
              onClick={()=> props.isOpen && props.closeMenu()}
              className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide"
            >
              My Profile
            </Link>
            <Link
              to="/account/payment-profile"
              onClick={()=> props.isOpen && props.closeMenu()}
              className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide"
            >
              Payments History
            </Link>
            <hr/>
            <button
              onClick={()=> {props.isOpen && props.closeMenu(); logout()}}
              className="hover:text-blue-800 hover:font-semibold text-lg hover:tracking-wide"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black fixed top-0 right-0 h-full w-full z-10 opacity-50' onClick={()=>props.closeMenu()}></div>
    </div>
  )
}

export default UserNav
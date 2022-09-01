import React from "react"
import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import GuestLayouts from "../layouts/GuestLayouts";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import UserDashboardPage from "../pages/user/userDashboardPage";
import ProfilePage from "../pages/user/ProfilePage";
import PackagesPage from "../pages/PackagesPage";
import { Link } from "react-router-dom";
import companyLogo from "../assets/sprynx-logo.png";
import UserNav from "../pages/user/UserNav";
import PaymentHistory from "../pages/user/PaymentHistory";

const ProtectedRoutes = () => {

  const[dropMenu, setDropMenu] = React.useState(false)

  function handleClick(){
    setDropMenu(true)
  }

  function closeMenu(){
    setDropMenu(false)
  }

  return (
    <>
      {/* <HeaderLayout /> */}
      {dropMenu && <UserNav closeMenu={closeMenu} isOpen={true}/>}
      <div className="flex justify-between px-10 items-center shadow-md sticky w-full bg-white">
        <img src={companyLogo} className="w-28"/>
        <div className="lg:flex gap-8 items-center hidden">
          <div className="flex justify-between gap-10">
            <Link
              to="/account/dashboard"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Dashboard
            </Link>
            <Link
              to="/account/profile"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              My Profile
            </Link>
            <Link
              to="/account/payment-profile"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Payments History
            </Link>
            <Link
              to=""
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Log Out
            </Link>
          </div>
          <div>|</div>
          <div><span className="text-green-700 font-bold">Hi</span> Okon</div>
        </div>
        {dropMenu === false ? <i className="fa-solid fa-bars lg:hidden text-xl cursor-pointer" onClick={handleClick}></i> : <i className="fa-solid fa-xmark lg:hidden text-2xl cursor-pointer" onClick={closeMenu}></i>}
      </div>
         
      <Routes>
        <Route path="/" element ={<ProtectedLayouts />}>
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payment-profile" element={<PaymentHistory />} />
        </Route>
      </Routes>

      {/* <div className="bg-gray-600 p-10">Footer</div> */}
      {/* <Footer /> */}
    </>
  );
};

export default ProtectedRoutes;

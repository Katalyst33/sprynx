import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import AdminLayouts from "../layouts/AdminLayouts";
import NotFoundPage from "../pages/NotFoundPage";
import React from "react"
import AdminMobileNav from "../pages/admin/AdminMobileNav";
import { Route, Routes } from "react-router-dom";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import { Fragment, useState } from "react";

import XAllPackagesPage from "../pages/admin/XAllPackagesPage";
import XAllServicesPage from "../pages/admin/XAllServicesPage";
import CreatePackagePage from "../pages/admin/CreatePackagePage";
import CreateServicePage from "../pages/admin/CreateServicePage";
import { Link } from "react-router-dom";
import companyLogo from "../assets/sprynx-logo.png";
import {BiSearchAlt2} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"

const AdminRoutes = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  function handleClick(){
    setOpenMenu(true)
  }

  function closeMenu(){
    setOpenMenu(false)
  }

  return (
    <>
      {/* sidebar */}

      <div className="lg:flex h-screen">
        <aside className="hidden lg:block w-3/12 bg-blue-900 text-white">
          <div className="flex flex-col text-center gap-3">
            <img src={companyLogo} className="w-28 mx-auto mt-4"></img>
            <Link
              to=""
              className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Profile
            </Link>
            <Link
              to="/manager/all-packages"
              className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              All Packages
            </Link>
            <Link
              to="/manager/all-services"
              className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              All Services
            </Link>
            <Link
              to=""
              className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Settings
            </Link>
            <Link
              to=""
              className="font-bold transition ease-in-out duration-400 hover:bg-white hover:rounded-md w-48 mx-auto py-1 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Sign Out
            </Link>
          </div>
        </aside>

        <main className="w-full h-full">
          <div className="container mx-auto px-2 md:px-0">
            <div className="flex justify-between mb-24 w-full items-center relative top-0 px-5 py-5 rounded-md shadow-md">
              <div className="lg:hidden cursor-pointer" onClick={handleClick}><GiHamburgerMenu /></div>
              <input placeholder="Search" className="border-none focus:outline-none w-5/6"/>
              <div className="text-lg cursor-pointer"><BiSearchAlt2 /></div>
            </div>
            <div>{openMenu && <AdminMobileNav closeMenu={closeMenu} isOpen={true} />}</div>
            <Routes>
              {/* element={<dashboard />} */}
              <Route path="/" element={<AdminLayouts />}>
                <Route path="/dashboard" element={<AdminDashboardPage />} />
                <Route path="/all-packages" element={<XAllPackagesPage />} />
                <Route path="/all-services" element={<XAllServicesPage />} />
                <Route path="/create-package" element={<CreatePackagePage />} />
                <Route path="/create-service" element={<CreateServicePage />} />
                <Route
                  path="/edit-service/:serviceId"
                  element={<CreateServicePage />}
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminRoutes;

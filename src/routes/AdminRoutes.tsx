import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import AdminLayouts from "../layouts/AdminLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import { Fragment, useState } from "react";

import XAllPackagesPage from "../pages/admin/XAllPackagesPage";
import XAllServicesPage from "../pages/admin/XAllServicesPage";
import CreatePackagePage from "../pages/admin/CreatePackagePage";
import CreateServicePage from "../pages/admin/CreateServicePage";
import { Link } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <>
      {/* sidebar */}

      <div className="flex h-screen">
        <aside className="hidden lg:block w-72 bg-violet-700 text-white ">
          <div className="flex flex-col">
            <h1>Sidebar here</h1>
            <h1>manager Routes</h1>
            <Link
              to="/manager/all-packages"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              All Packages
            </Link>
            <Link
              to="/manager/create-package"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Create Package
            </Link>
            <Link
              to="/manager/create-service"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              Create Service
            </Link>
            <Link
              to="/manager/all-services"
              className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
            >
              All Services
            </Link>
          </div>
        </aside>

        <main className="w-full h-full mt-36">
          <div className="container mx-auto px-2 md:px-0">
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

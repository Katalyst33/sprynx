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

const ProtectedRoutes = () => {
  return (
    <>
      {/* <HeaderLayout /> */}

      <h1 className="bg-red-400 text-white">All protected Routes</h1>

      <div className="bg-gray-200 p-10">My profile Welcome Okon</div>

      <div className="flex  justify-between px-40">
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
        <div>Payments History</div>
        <button>LogOut</button>
      </div>

      <Routes>
        <Route path="/" element={<ProtectedLayouts />}>
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>

      <div className="bg-gray-600 p-10">Footer</div>
      {/* <Footer /> */}
    </>
  );
};

export default ProtectedRoutes;

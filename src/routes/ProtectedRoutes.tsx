import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import GuestLayouts from "../layouts/GuestLayouts";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import Dashboard from "../pages/user/Dashboard";
import PackagesPage from "../pages/PackagesPage";

const ProtectedRoutes = () => {
  const location = useLocation();

  const isLoggedIn = false;

  return (
    <>
      <HeaderLayout />

      <h1>All protected Routes</h1>

      <Routes>
        <Route path="/" element={<ProtectedLayouts />}>
          <Route path="/all-packages" element={<PackagesPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default ProtectedRoutes;

import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import GuestLayouts from "../layouts/GuestLayouts";
import PackagesPage from "../pages/PackagesPage";
import NotFoundPage from "../pages/NotFoundPage";
import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import BookingPage from "../pages/BookingPage";

import React from "react";

const GuestRoutes = () => {
  return (
    <>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<GuestLayouts />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-packages" element={<PackagesPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default GuestRoutes;

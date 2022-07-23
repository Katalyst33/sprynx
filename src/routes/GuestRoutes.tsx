import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import GuestLayouts from "../layouts/GuestLayouts";
import PackagesPage from "../pages/PackagesPage";
import NotFoundPage from "../pages/NotFoundPage";
import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import OurServicesPage from "../pages/OurServicesPage";
import CreatePackagePage from "../pages/admin/CreatePackagePage";

import React from "react";
import AboutUsPage from "../pages/AboutUsPage";

const GuestRoutes = () => {
  return (
    <>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<GuestLayouts />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-packages" element={<PackagesPage />} />
          <Route path="/create-package" element={<CreatePackagePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<OurServicesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default GuestRoutes;

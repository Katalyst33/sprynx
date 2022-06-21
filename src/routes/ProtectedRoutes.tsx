import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import GuestLayouts from "../layouts/GuestLayouts";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <>
      <HeaderLayout />

      <h1>Protected Routes</h1>
      <Routes>
        <Route path="/" element={<ProtectedLayouts />}>
          <Route path="/dashboard" element={<dashboard />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ProtectedRoutes;

import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import AdminLayouts from "../layouts/AdminLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <>
      <HeaderLayout />

      <h1>Protected Routes</h1>
      <Routes>
        {/* element={<dashboard />} */}
        <Route path="/" element={<ProtectedLayouts />}>
          <Route path="/dashboard" />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ProtectedRoutes;

import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import AdminLayouts from "../layouts/AdminLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

const AdminRoutes = () => {
  return (
    <>
      <h1>manager Routes</h1>
      <Routes>
        {/* element={<dashboard />} */}
        <Route path="/" element={<AdminLayouts />}>
          <Route path="/dashboard" element={<AdminDashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;

import logo from "./logo.svg";
import "./css/App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import GuestRoutes from "./routes/GuestRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { RequireAuth } from "./routes/RequireAuth";
import { RequireAdminAuth } from "./routes/RequireAdminAuth";

function App() {
  function loadapp() {
    // Run on APPload
  }

  // const loggedInUser = localStorage.getItem("currentUser");
  const loggedInUser = {
    id: 1,
    email: "obee@gmail.com",
    role: "user",
  };

  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/*" element={<ProtectedRoutes />} /> */}
          <Route path="/*" element={<GuestRoutes />} />

          <Route
            path="/account/*"
            element={
              <RequireAuth>
                <ProtectedRoutes />
              </RequireAuth>
            }
          />
          <Route
            path="/manager/*"
            element={
              <RequireAdminAuth>
                <AdminRoutes />
              </RequireAdminAuth>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

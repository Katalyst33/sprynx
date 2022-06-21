import logo from "./logo.svg";
import "./css/App.css";
import FloatingNav from "./layouts/FloatingNav";
import { Route, Routes, useNavigate } from "react-router-dom";

import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import GuestRoutes from "./routes/GuestRoutes";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/*" element={<ProtectedRoutes />} /> */}
          <Route path="/*" element={<GuestRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

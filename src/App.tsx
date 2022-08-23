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
import { $axios } from "./service/http";
import { useEffect, useState } from "react";
import LoadingData from "./components/LoadingData";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user";

function App() {
  // const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(true);

  function loadApp() {
    $axios
      .get("/ping")
      .then((res: any) => {
        console.log(res, "ping success");
        dispatch(setCurrentUser(res.user));

        setIsPending(false);
      })
      .catch((err) => {
        console.log(err, "ping error");
        setIsPending(false);
      });
  }

  // const loggedInUser = localStorage.getItem("currentUser");
  /*   const loggedInUser = {
    id: 1,
    email: "obee@gmail.com",
    role: "user",
  };
 */

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <>
      <div>
        {!isPending ? (
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
        ) : (
          <div>
            <LoadingData />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

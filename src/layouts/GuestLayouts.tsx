import { useNavigate, Outlet } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

const GuestLayouts = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuestLayouts;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type MyComponentProps = React.PropsWithChildren<{}>;

export const RequireAdminAuth = ({ children }: any) => {
  const isLoggedIn = true;

  const LoggedInUser = useSelector((state: RootState) => state.user.user);
  /* 
  const LoggedInUser = {
    id: 1,
    email: "okon@gmail.com",
    role: ["user", "admin"],
  }; */

  if (LoggedInUser.role.includes("admin")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

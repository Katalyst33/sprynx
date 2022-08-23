import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

type MyComponentProps = React.PropsWithChildren<{}>;

export const RequireAuth = ({ children }: any) => {
  const LoggedInUser = useSelector((state: RootState) => state.user.user);

  /*   const LoggedInUser = {
    id: 1,
    email: "okon@gmail.com",
    role: ["user", "admin"],
  }; */

  if (LoggedInUser?.role.includes("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

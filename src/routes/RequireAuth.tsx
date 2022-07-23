import { Navigate } from "react-router-dom";

type MyComponentProps = React.PropsWithChildren<{}>;

export const RequireAuth = ({ children }: any) => {
  const isLoggedIn = true;

  const LoggedInUser = {
    id: 1,
    email: "okon@gmail.com",
    role: ["user", "admin"],
  };

  if (isLoggedIn && LoggedInUser.role.includes("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

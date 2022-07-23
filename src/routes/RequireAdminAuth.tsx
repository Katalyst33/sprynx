import { Navigate } from "react-router-dom";

type MyComponentProps = React.PropsWithChildren<{}>;

export const RequireAdminAuth = ({ children }: any) => {
  const isLoggedIn = true;

  const LoggedInUser = {
    id: 1,
    email: "okon@gmail.com",
    role: ["user", "admin"],
  };

  if (isLoggedIn && LoggedInUser.role.includes("admin")) {
    return children;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
};

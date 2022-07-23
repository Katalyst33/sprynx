import { Navigate } from "react-router-dom";

type MyComponentProps = React.PropsWithChildren<{}>;

export const RequireAuth = ({ children }: any) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

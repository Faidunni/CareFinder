import useAuthStatus from "../Auth/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <h1>Loading......</h1>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

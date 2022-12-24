import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

const ProtectedRoute = ({ children } : any) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children ? children : <Outlet/>
};

export default ProtectedRoute
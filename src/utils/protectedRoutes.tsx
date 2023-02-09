import { Preferences } from "@capacitor/preferences";
import { is } from "immer/dist/internal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { setAuthenticated } from "../store/auth-slice";

const ProtectedRoutes = ({
  isAuthenticated,
  redirectPath = '/landing',
  children,
}:any) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return children ? children : <Outlet />;
};

export default ProtectedRoutes
import { Preferences } from "@capacitor/preferences";
import { is } from "immer/dist/internal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { setAuthenticated } from "../store/auth-slice";

const ProtectedRoute = ({ children } : any) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  if (isAuthenticated) {
    console.log('Authenticated')
  } else {
    console.log('Not Authenticated yet')
  }
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children ? children : <Outlet/>
};

export default ProtectedRoute
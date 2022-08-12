import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MainPage } from "../pages";
import { RootState } from "../store";

const ProtectedRoutes = () => {
  let isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <MainPage /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

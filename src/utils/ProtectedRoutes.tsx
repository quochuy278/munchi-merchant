import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MainPage } from "../pages";
import { Props } from "../shared/interfaces/props.interface";
import { RootState } from "../store";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  let isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/" replace={true}/>;
  }

  return children;
};

export default ProtectedRoutes;

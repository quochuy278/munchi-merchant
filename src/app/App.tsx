import { Route, Routes } from "react-router-dom";
import ClockComponent from "../components/countdownlock";

import { AuthPage, DetailPage, ErrorPage, MainPage } from "../pages";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/clock" element={<ClockComponent />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <MainPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/detail"
        element={
          <ProtectedRoutes>
            <DetailPage />
          </ProtectedRoutes>
        }
      >
        <Route path="/detail/:detailId" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;

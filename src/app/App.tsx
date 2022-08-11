import { Card } from "@mui/material";
import { Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { DetailPage, MainPage, AuthPage, ErrorPage } from "../pages";
import ProtectedRoutes from "../util/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<MainPage />}/>
        <Route path="/detail" element={<DetailPage />}>
          <Route path="/detail/:detailId" element={<DetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}
export default App;

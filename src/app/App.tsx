import { Card } from "@mui/material";
import { Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { DetailPage, MainPage, AuthPage, ErrorPage } from "../pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/dashboard" element={<MainPage />} /> */}
      {/* <Route path="/" element={<AuthPage />} /> */}
      <Route path="/detail" element={<DetailPage />}>
        <Route path="/detail/:detailId" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;

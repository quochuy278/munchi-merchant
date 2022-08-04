import { Card } from "@mui/material";
import { Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { DetailPage, MainPage } from "../pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path=":detailId" element={<DetailPage />} />
    </Routes>
  );
}
export default App;

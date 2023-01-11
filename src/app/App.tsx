import { Route, Routes } from "react-router-dom";
import {
  DetailPage,
  ErrorPage,
  SignInPage,
  MainPage,
  SignUpPage,
  BusinessPage,
} from "../pages";
import ProtectedRoute from "../utils/protectedRoute";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />

        <Route path="/detail" element={<DetailPage />}>
          <Route path="/detail/:detailId" element={<DetailPage />} />
        </Route>
      </Route>
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;

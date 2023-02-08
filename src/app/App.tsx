import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  DetailPage,
  ErrorPage,
  SignInPage,
  MainPage,
  SignUpPage,
  BusinessPage,
} from "../pages";
import { RootState } from "../store";
import ProtectedRoute from "../utils/protectedRoute";

import "./App.css";

function App() {
  const {isAuthenticated} = useSelector( (state:RootState) => state.auth)
  console.log("🚀 ~ file: App.tsx:18 ~ App ~ isAuthenticated", isAuthenticated)
  
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />}>
          <Route path="/detail/:detailId" element={<DetailPage />} />
        </Route>
        <Route path="/business" element={<BusinessPage />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;

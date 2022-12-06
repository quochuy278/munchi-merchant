import { Route, Routes } from "react-router-dom";
import ClockComponent from "../components/countdownlock";

import { DetailPage, ErrorPage, MainPage } from "../pages";

import "./App.css";

function App() {
    const prepTimeInMs = 15 * 60 * 1000;
    const nowInMs = new Date().getTime();

    const dateTimeAfterPrepTime = prepTimeInMs + nowInMs;
  return (
    <Routes>
      <Route
        path="/clock"
        element={<ClockComponent targetDate={dateTimeAfterPrepTime} />}
      />
      <Route path="/" element={<MainPage />} />
      <Route path="/detail" element={<DetailPage />}>
        <Route path="/detail/:detailId" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;

import "./App.css";

import Header from "./components/Header";
import MainPage from "./views/MainPage";
import MapPage from "./views/MapPage";
import GenderPage from "./views/GenderPage";
import GlobalStyle from "./components/GlobalStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isDark = useSelector((state) => state.theme.mode);

  console.log(isDark);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mapPage" element={<MapPage />} />
          <Route path="/genderPage" element={<GenderPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle isDark={isDark} />
    </>
  );
}

export default App;

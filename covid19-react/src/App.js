import "./App.css";

import Header from "./components/Header";
import MainPage from "./views/MainPage";
import MapPage from "./views/MapPage";
import GenderPage from "./views/GenderPage";
import GlobalStyle from "./components/GlobalStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isDark = useSelector((state) => state.theme.mode);

  const root = document.querySelector("#root");
  useEffect(() => {
    document.getElementById("root").style.maxWidth = "450px";
    document.getElementById("root").style.position = "relative";
    document.getElementById("root").style.margin = "0 auto";
  }, []);

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

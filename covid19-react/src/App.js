import './App.css';

import Header from "./components/Header";
import MainPage from "./views/MainPage";
import MapPage from "./views/MapPage";
import GenderPage from "./views/GenderPage";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/mapPage" element={<MapPage />}/>
      <Route ptah="/genderPage" element={<GenderPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

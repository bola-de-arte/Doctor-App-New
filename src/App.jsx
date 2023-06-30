import React from "react";
import "./App.scss";
// react router dom allows me to create navigation in my app
// we import each page created
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import DoctorsMenu from "./pages/DoctorsMenu";
import Evaluacion from "./pages/Evaluacion";
import DrProfile from "./pages/DrProfile";
import Donaciones from "./pages/Donaciones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/DoctorsMenu" element={<DoctorsMenu />} />
        <Route path="/Evaluacion" element={<Evaluacion />} />
        <Route path="/Perfil" element={<DrProfile />} />
        <Route path="/Donations" element={<Donaciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

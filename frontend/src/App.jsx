import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Homepage from "./pages/home/Homepage";
import HeartCalculator from "./pages/calculator/HeartCalculator";
import DiabetesCalculator from "./pages/calculator/DiabetesCalculator";
import HypothyroidCalculator from "./pages/calculator/HypothyroidCalculator";
import AboutCalculator from "./pages/calculator/AboutCalculator";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />

          <Route path="/calculator/about" element={<AboutCalculator/>} />

          <Route
            path="/calculator/heart"
            element={<HeartCalculator/>}
          />

          <Route
            path="/calculator/diabetes"
            element={<DiabetesCalculator/>}
          />

          <Route
            path="/calculator/hypothyroid"
            element={<HypothyroidCalculator/>}
          />
        </Route>
      </Routes>
  );
};

export default App;

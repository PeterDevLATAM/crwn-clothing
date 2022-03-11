import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;

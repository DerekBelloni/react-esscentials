import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact
} from "./pages";

// https://api.github.com/users/derekbelloni

function App() {
  return (
    <div>
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes />
        <Routes />
        <Routes />
      </Routes>
    </div>
  )
}














export default App;

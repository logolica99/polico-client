import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

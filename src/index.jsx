import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AccountPage from "./pages/my-account";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CreateListing from "./pages/create-listing";
import YourListing from "./pages/your-listing";
import Wishlist from "./pages/wishlist";
import Search from "./pages/search";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <div className="nav-padding"></div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/listings" element={<YourListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:query" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
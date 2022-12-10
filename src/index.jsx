import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.scss";

//importing pages
const Homepage = lazy(() =>  import("./pages/Homepage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const AccountPage = lazy(() => import("./pages/my-account"));
const CreateListing = lazy(() => import("./pages/create-listing"));
const YourListing = lazy(() => import("./pages/your-listing"));
const Wishlist = lazy(() => import("./pages/wishlist"));
const Search = lazy(() => import("./pages/search"));

//importing components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <div className="nav-padding"></div>
      <Suspense fallback={<h2>Loading...</h2>}>
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
      </Suspense>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


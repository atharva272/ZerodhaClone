import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Landing_Page/Home/Homepage";
import Signup from "./Landing_Page/Signup/Signup";
import AboutPage from "./Landing_Page/about/Aboutpage";
import ProductPage from "./Landing_Page/Products/Productrange";
import PricingPage from "./Landing_Page/Pricing/Pricingpage";
import SupportPage from "./Landing_Page/Support/Supportpage";
import Navbar from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';
import NotFound from "./Landing_Page/Notfound";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


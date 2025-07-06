import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";
import AdminPanel from "./components/AdminPanel";// ✅ admin panel
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirm-order" element={<ConfirmOrder />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

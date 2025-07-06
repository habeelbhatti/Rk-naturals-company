import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ✅ Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo as Link */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
          </Link>
          <Link to="/confirm-ordert" className="confirm-order"></Link>
          <Link to="/admin" className="nav-link">Admin</Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

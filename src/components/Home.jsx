import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import attaImage from "../assets/atta.jpg";
import baisanImage from "../assets/baisan.jpg";
import masalaImage from "../assets/masala.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      {/* Left Side */}
      <div className="left-side animate-left">
        <h1 className="main-heading animate-heading">
          <span className="highlight">RK</span> Naturals
        </h1>
        <p className="typewriter-text animate-fade">Premium Quality Products</p>
        <p className="description animate-fade">
          We provide the best quality Atta, Baisan, and Masalas to make your meals perfect. 100% hygienic and fresh ingredients for your family.
        </p>
        <div className="buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>
          <button
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Side (Cards) */}
      <div className="right-side">
        {/* Atta Card */}
        <div className="card animate-card">
          <img src={attaImage} alt="Atta" />
          <h2> Chaki Atta</h2>
          <p>High quality flour for your everyday needs.</p>
        </div>

        {/* Baisan Card */}
        <div className="card animate-card">
          <img src={baisanImage} alt="Baisan" />
          <h2>Baisan</h2>
          <p>Finely milled gram flour for all your recipes.</p>
        </div>

        {/* Masala Card */}
        <div className="card animate-card">
          <img src={masalaImage} alt="Masala" />
          <h2>Masala</h2>
          <p>Premium spices to add flavor to your food.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

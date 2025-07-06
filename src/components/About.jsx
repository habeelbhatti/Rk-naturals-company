import React from "react";
import "./About.css";
import bannerVideo from "../assets/banner.mp4"; // ✅ Add your video here
import achievementImage from "../assets/achievement.jpg";
import productsImage from "../assets/products.jpg";

const About = () => {
  return (
    <section className="about-section">
      {/* Banner with Video */}
      <div className="banner-card">
        <video
          className="banner-video"
          src={bannerVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Company Intro */}
      <div className="company-content">
        <h2>About RK Foods</h2>
        <p>
          RK Foods is committed to delivering premium quality food products that
          bring taste, health, and tradition to your table. From carefully milled
          flour to aromatic spices, our focus is on purity and excellence.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="achievement-section">
        <div className="achievement-image">
          <img src={achievementImage} alt="Achievements" />
        </div>
        <div className="achievement-content">
          <h2>Our Achievements</h2>
          <p>
            Over the years, RK Foods has reached milestones by serving thousands
            of satisfied customers and maintaining industry-leading standards.
          </p>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="products-section">
        <div className="products-content">
          <h2>Our Products</h2>
          <p>
            Explore our premium range of food products including high-quality
            Atta, finely milled Baisan, and flavorful Masalas that add life
            to your meals.
          </p>
        </div>
        <div className="products-image">
          <img src={productsImage} alt="Our Products" />
        </div>
      </div>
    </section>
  );
};

export default About;

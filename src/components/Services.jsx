import React from "react";
import "./Services.css";
import { FaShippingFast, FaLeaf, FaStar, FaSmile, FaLock, FaThumbsUp } from "react-icons/fa";
import attaImg from "../assets/atta.jpg";
import besanImg from "../assets/baisan.jpg";
import masalaImg from "../assets/masala.jpg";
import dalainImg from "../assets/dalain.jpg";
import saltImg from "../assets/himalayan-salt.jpg";
import multigrainImg from "../assets/multigrain-atta.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  const serviceIcons = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service for all your orders.",
    },
    {
      icon: <FaLeaf />,
      title: "100% Organic",
      description: "We use only natural and organic ingredients for purity.",
    },
    {
      icon: <FaStar />,
      title: "Premium Quality",
      description: "Top-quality products trusted by thousands of families.",
    },
    {
      icon: <FaSmile />,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority, always guaranteed.",
    },
    {
      icon: <FaLock />,
      title: "Secure Packaging",
      description: "Products packed safely to retain freshness & hygiene.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Trusted Brand",
      description: "A brand you can trust for healthy and fresh food items.",
    },
  ];

  const premiumProducts = [
    { title: "Atta (Flour)", img: attaImg },
    { title: "Besan (Gram Flour)", img: besanImg },
    { title: "Masala (Spices)", img: masalaImg },
    { title: "Dalain (Pulses)", img: dalainImg },
    { title: "Himalayan Pink Salt", img: saltImg },
    { title: "Multi-Grain Atta", img: multigrainImg },
  ];

  return (
    <div className="services-page">
      {/* Hero Landing Effect */}
      <motion.section
        className="services-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="gradient-heading">Our Services</h1>
        <p className="services-subtext">
          Discover how RK Foods ensures premium quality and unmatched service
          for your daily essentials.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.div
        className="icon-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {serviceIcons.map((service, index) => (
          <motion.div
            className="icon-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium Products Section */}
      <motion.section
        className="premium-products"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="premium-heading">Our Premium Products</h2>
        <div className="product-grid">
          {premiumProducts.map((product, index) => (
            <motion.div
              className="product-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={product.img} alt={product.title} />
              <div className="product-content">
                <h3>{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-more">
          <motion.button
            className="theme-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
          >
            View More Products
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;

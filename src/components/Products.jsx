import React from "react";
import "./Products.css";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Import all product images
import chakiAtta from "../assets/atta.jpg";
import baisan from "../assets/baisan.jpg";
import multiGrainAtta from "../assets/multigrain-atta.jpg";
import himalayanSalt from "../assets/himalayan-salt.jpg";
import daalMasoor from "../assets/daalmasoor.jpg";
import daalChana from "../assets/daalchana.jpg";
import karahiGhostMasala from "../assets/karahighost.jpg";
import chatMasala from "../assets/chatmasala.jpg";
import acharghostmasala from "../assets/acharghost.jpg"
import tikkaMasala from "../assets/tikkamasala.jpg";
import biryaniMasala from "../assets/biryanimasala.jpg";
import qormaMasala from "../assets/qormamasala.jpg";
import tikkaBotiMasala from "../assets/tikkaboti.jpg";

// ✅ Add product details with price and unique id
const products = [
  { id: 1, name: "Chaki Atta", img: chakiAtta, price: 595 },
  { id: 2, name: "Baisan", img: baisan, price: 480 },
  { id: 3, name: "Multi Grain Atta Flour", img: multiGrainAtta, price: 795 },
  { id: 4, name: "Himalayan Pink Salt", img: himalayanSalt, price: 280 },
  { id: 5, name: "Daal Masoor", img: daalMasoor, price: 380 },
  { id: 6, name: "Daal Chana", img: daalChana, price: 320 },
  { id: 7, name: "Karahi Ghost Masala", img: karahiGhostMasala, price: 260 },
  { id: 8, name: "Chat Masala", img: chatMasala, price: 190 },
  { id: 9, name: "achar Ghost Masala", img: acharghostmasala, price: 190 },
  { id: 10, name: "Tikka Masala", img: tikkaMasala, price: 220 },
  { id: 11, name: "Biryani Masala", img: biryaniMasala, price: 240},
  { id: 12, name: "Qorma Masala", img: qormaMasala, price: 250 },
  { id: 13, name: "Tikka Boti Masala", img: tikkaBotiMasala, price: 290 },
];

const ProductPage = () => {
  const navigate = useNavigate();

  // ✅ Add product to localStorage
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.find((item) => item.id === product.id);

    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    navigate("/cart"); // ✅ Redirect to Cart page
  };

  return (
    <div className="product-page">
      {/* Landing Animation */}
      <motion.h1
        className="product-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Products
      </motion.h1>

      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            className="premium-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="premium-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="premium-content">
              <h3>{product.name}</h3>
              <p>Pure & premium quality for your kitchen needs.</p>
              <p className="price">Price: Rs {product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 🆕 Updated prices map
const UPDATED_PRICES = {
  "chaki atta": 595,
  baisan: 480,
  multiGrainAtta: 795,
  himalayanSalt: 280,
  daalMasoor: 380,
  daalChana: 320,
  karahiGhostMasala: 260,
  chatMasala: 190,
  tikkaMasala: 220,
  biryaniMasala: 240,
  qormaMasala: 250,
  tikkaBotiMasala: 290,
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // 🆕 Update prices in cart
    const updatedCart = storedCart.map((item) => {
      const updatedPrice = UPDATED_PRICES[item.id];
      return updatedPrice
        ? { ...item, price: updatedPrice } // ✅ Use updated price
        : item; // If no updated price, keep original
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const confirmOrder = () => {
    navigate("/confirm-order");
  };

  return (
    <div className="cart-container">
      <motion.h1
        className="cart-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🛒 Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <button className="back-button" onClick={() => navigate("/products")}>
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <motion.div
                className="cart-card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cart-img-box">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="price">Price: Rs {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p className="item-total">
                    Total: Rs {item.price * item.quantity}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Grand Total: <span>Rs {grandTotal}</span></h2>
            <div className="cart-buttons">
              <button className="clear-button" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="confirm-button" onClick={confirmOrder}>
                Confirm Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

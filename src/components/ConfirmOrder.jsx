import React, { useState, useEffect } from "react";
import "./ConfirmOrder.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // ✅ Calculate Total Amount
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    try {
      // ✅ Save Order in Firestore with Total Amount & Images
      await addDoc(collection(db, "orders"), {
        name,
        address,
        phone,
        paymentMethod,
        cartItems, // contains image paths also
        totalAmount: calculateTotal(), // 💵 Save total
        createdAt: Timestamp.now(),
      });

      localStorage.removeItem("cart");
      setShowThankYou(true);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Try again.");
    }
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="confirm-order-page">
      {!showThankYou ? (
        <>
          <h1 className="confirm-heading">Confirm Your Order</h1>
          <form className="order-form" onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <textarea
                placeholder="Enter your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                placeholder="03XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{11}"
                required
              />
            </div>

            <div className="form-group">
              <label>Payment Method:</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select a payment method</option>
                <option value="easypaisa">Easypaisa</option>
                <option value="jazzcash">JazzCash</option>
                <option value="banktransfer">Bank Transfer</option>
              </select>
            </div>

            <h2 className="cart-summary-heading">Your Cart Summary</h2>
            <div className="cart-summary">
              {cartItems.map((item, index) => (
                <div className="cart-summary-item" key={index}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: Rs {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Show Total Amount */}
            <div className="total-amount">
              <h3>Total Amount: Rs {calculateTotal()}</h3>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </>
      ) : (
        <div className="thank-you-screen">
          <h1>🎉 Thank you for your order!</h1>
          <p>We will contact you soon for confirmation.</p>
          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrder;

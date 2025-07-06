import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { motion } from "framer-motion";

const ADMIN_EMAIL = "admin@rkfoods.com"; // 🔒 Admin Email
const ADMIN_PASSWORD = "rk123456"; // 🔒 Admin Password

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Fetch orders
  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const orderList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOrders(orderList);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Invalid admin credentials!");
    }
  };

  const handleDelete = async (orderId) => {
    await deleteDoc(doc(db, "orders", orderId));
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        className="admin-login-container"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <form className="admin-login-card" onSubmit={handleLogin}>
          <h2>🔒 Admin Login</h2>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </motion.div>
    );
  }

  return (
    <div className="admin-panel">
      <motion.h1
        className="welcome-admin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        👋 Welcome Back, Admin
      </motion.h1>
      <motion.div
        className="order-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {orders.map((order) => (
          <motion.div
            className="order-card"
            key={order.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🛒 {order.name}</h3>
            <p><strong>📍 Address:</strong> {order.address}</p>
            <p><strong>📞 Phone:</strong> {order.phone}</p>
            <p><strong>💳 Payment:</strong> {order.paymentMethod}</p>
            <p><strong>⏱ Time:</strong> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
            <h4>📝 Ordered Items:</h4>
            <div className="order-items">
              {order.cartItems.map((item, index) => (
                <div className="order-item" key={index}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p><strong>{item.name}</strong></p>
                    <p>Qty: {item.quantity}</p>
                    <p>Total: Rs {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="delete-btn" onClick={() => handleDelete(order.id)}>
              🗑 Delete Order
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminPanel;

import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Message disappear after 3s
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <motion.h1
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        ✨ Get in Touch
      </motion.h1>

      <div className="contact-content">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>RK Foods</h2>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ support@rkfoods.com</p>
          <div className="contact-icons">
            <a href="https://www.facebook.com/RKFoodsOfficial" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/rk_naturals_foods/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/zahoor-ahmed-kayani-135122168/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">🚀 Send Message</button>
          {submitted && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Your message has been sent!
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

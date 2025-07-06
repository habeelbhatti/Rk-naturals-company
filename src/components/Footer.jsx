import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <h1 className="footer-heading">RK Naturals</h1>
          <p className="footer-tagline">
            <span className="green">“Freshness</span>{" "}
            <span className="red">and Quality</span>{" "}
            <span className="white">for Every Home.”</span>
          </p>
          <p className="footer-contact">
            📍 Lahore, Pakistan <br />
            📞 +92 321 4918085 <br />
            ✉️ rknaturals.lhr@gmail.com
          </p>
          <p className="footer-bottom">
            &copy; 2025 RK Foods. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;

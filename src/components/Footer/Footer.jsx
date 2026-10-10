import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="f-logo">BALAAJ</div>
          <p>Discover captivating Arabian fragrances crafted to express your style, elevate your presence, and leave a lasting impression.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div>
          <h4>Customer Care</h4>
          <span>Need assistance?We're here to help.</span>
          <a href="https://wa.me/923067769125" target="_blank" rel="noreferrer">
            WhatsApp: +92 306 7769125
          </a>
          <span>Delivering across Pakistan</span>
          
        </div>

        <div>
          <h4>Payment</h4>
          <span>Cash on Delivery</span>
          <span>100% Original Products</span>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Balaaj Perfumes. All rights reserved.
      </div>
    </footer>
  );
}
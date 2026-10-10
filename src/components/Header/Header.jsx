import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const links = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "Contact", to: "/contact" },
  { name: "Privacy Policy", to: "/privacy-policy" },
];

const ticker =
  "✦ 100% ORIGINAL ✦ LONG LASTING ✦ CASH ON DELIVERY ✦ FAST DELIVERY ACROSS PAKISTAN ✦ LUXURY OUD COLLECTION ";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="topbar">
        <div className="ticker-track">
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <div className="mainbar">
        <Link to="/" className="brand">
          <span className="logo">BALAAJ</span>
          <span className="brand-sub">— PERFUMES —</span>
        </Link>

        <nav className={`nav ${open ? "show" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="actions">
  <button className="bag-btn" aria-label="Cart">
    <svg viewBox="0 0 24 24">
      <path d="M5 8h14l-1.2 12H6.2L5 8z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
    <span className="badge">0</span>
  </button>
  <button className="burger" onClick={() => setOpen(!open)}>
    {open ? "✕" : "☰"}
  </button>
</div>
      </div>
    </header>
  );
}
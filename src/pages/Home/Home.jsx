import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import { perfumes } from "../../data/products";
import "./Home.css";

const perks = ["100% Original", "Cash on Delivery", "Fast Delivery", "WhatsApp Support"];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="perks">
        {perks.map((t) => (
          <div key={t}><span>✦</span> {t}</div>
        ))}
      </div>

      <section className="container">
        <div className="sec-head">
          <small>NEW ARRIVALS</small>
          <h2>Latest Perfumes</h2>
        </div>
        <div className="pgrid">
          {perfumes.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
        <div className="center">
          <Link to="/shop" className="outline-btn">View All Products</Link>
        </div>
      </section>

      <section className="wa-banner">
        <h2>Ready to Find Your Signature Scent?</h2>
        <p>Have question or ready to order? Connect with us on Whatsapp for a personalized fragrance experience</p>
        <a href="https://wa.me/923067769125" target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
      </section>
    </>
  );
}
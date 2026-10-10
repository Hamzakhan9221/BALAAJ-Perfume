import ProductCard from "../../components/ProductCard/ProductCard";
import { perfumes, belts } from "../../data/products";
import "./Shop.css";

export default function Shop() {
  return (
    <>
      <div className="page-hero">
        <small>OUR COLLECTION</small>
        <h1>Shop</h1>
        <div className="tabs">
          <a href="#perfumes">Perfumes</a>
          <a href="#belts">Leather Belts</a>
        </div>
      </div>

      <section id="perfumes" className="container">
        <div className="sec-head"><h2>Perfumes</h2></div>
        <div className="pgrid">
          {perfumes.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
        </div>
      </section>

      <section id="belts" className="container">
        <div className="sec-head"><h2>Leather Belts</h2></div>
        <div className="pgrid">
          {belts.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
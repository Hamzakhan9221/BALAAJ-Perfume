import { motion } from "framer-motion";
import "./ProductCard.css";

function Art({ type, color }) {
  if (type === "belt") {
    return (
      <svg viewBox="0 0 120 60" className="art">
        <rect x="4" y="22" width="112" height="16" rx="3" fill={color} stroke="#d4af6a" />
        <rect x="46" y="12" width="28" height="36" rx="4" fill="none" stroke="#d4af6a" strokeWidth="3" />
        {[84, 92, 100, 108].map((x) => (
          <circle key={x} cx={x} cy="30" r="1.8" fill="#d4af6a" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 100" className="art tall">
      <rect x="22" y="2" width="16" height="14" rx="3" fill="#d4af6a" />
      <rect x="26" y="16" width="8" height="8" fill="#a8812f" />
      <rect x="6" y="24" width="48" height="72" rx="10" fill={color} stroke="#d4af6a" strokeWidth="1.5" />
      <rect x="12" y="30" width="5" height="58" rx="2.5" fill="#fff" opacity=".18" />
      <rect x="18" y="52" width="30" height="22" rx="3" fill="none" stroke="#d4af6a" />
    </svg>
  );
}

export default function ProductCard({ p, index = 0, onAdd }) {
  return (
    <motion.div
      className="pcard"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
    >
      {p.tag && <span className={`ptag ${p.soldOut ? "so" : ""}`}>{p.tag}</span>}

      <div className="pimg">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" />
        ) : (
          <Art type={p.type} color={p.color} />
        )}
      </div>

      <h3>{p.name}</h3>
      <p className="pprice">Rs. {p.price.toLocaleString()}</p>

      <button disabled={p.soldOut} onClick={() => onAdd && onAdd(p)}>
        {p.soldOut ? "Sold Out" : "Add to Cart"}
      </button>
    </motion.div>
  );
}
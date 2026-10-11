import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import signature from "../../assets/Signature.jpeg";
import "./Hero.css";

const lines = [
  ["A", "Scent", "That", "Speaks"],
  ["Before", "You", "Do."],
];

const dust = Array.from({ length: 30 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 2 + (i % 3),
  dur: 6 + (i % 7),
  delay: (i % 9) * 0.8,
}));

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="hero">
      <div className="dust">
        {dust.map((d, i) => (
          <motion.span
            key={i}
            className="dot"
            style={{ left: d.left, width: d.size, height: d.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -700, opacity: [0, 0.9, 0] }}
            transition={{ repeat: Infinity, duration: d.dur, delay: d.delay, ease: "linear" }}
          />
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <motion.p
            className="hero-small"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            THE ART OF LUXURY <i />
          </motion.p>

          <h1 className="hero-title">
            {lines.map((words, li) => (
              <span className="line" key={li}>
                {words.map((w, wi) => (
                  <span className="word" key={wi}>
                    {w.split("").map((ch, ci) => (
                      <motion.span
                        key={ci}
                        className="ch"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                          delay: 0.3 + li * 0.5 + wi * 0.1 + ci * 0.035,
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Some fragrances don’t just get noticed — they become unforgettable.
          </motion.p>

          <motion.div
            className="brand-line"
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span />
            <b>BALAAJ PERFUMES</b>
            <span />
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            Discover the essence of elegance with captivating oud and refined
            floral fragrances. Find your signature scent and leave a lasting
            impression. Enjoy convenient Cash on Delivery across Pakistan.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
          >
            <Link to="/shop" className="hero-btn">
              Shop Now <span className="arr">→</span>
            </Link>
            <Link to="/contact" className="hero-btn outline">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div className="hero-visual" style={{ y }}>
          <div className="ring" />
          <div className="smoke s1" />
          <div className="smoke s2" />
          <div className="smoke s3" />
          <motion.img
            src={signature}
            alt="Balaaj Signature Gold"
            className="hero-img"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
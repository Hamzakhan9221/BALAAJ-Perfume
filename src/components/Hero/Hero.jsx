import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
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

function Bottle() {
  return (
    <svg viewBox="0 0 160 250" className="bottle-svg">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0b8" />
          <stop offset=".45" stopColor="#d4af6a" />
          <stop offset="1" stopColor="#7a5a20" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#050505" />
          <stop offset=".45" stopColor="#1b1b1d" />
          <stop offset="1" stopColor="#030303" />
        </linearGradient>
        <radialGradient id="floor" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#d4af6a" stopOpacity=".7" />
          <stop offset="1" stopColor="#d4af6a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="80" cy="240" rx="70" ry="9" fill="url(#floor)" />

      {/* cap */}
      <rect x="52" y="4" width="56" height="42" rx="6" fill="url(#gold)" />
      <rect x="58" y="10" width="6" height="30" rx="3" fill="#fff" opacity=".35" />
      <rect x="66" y="46" width="28" height="16" fill="url(#gold)" />
      <rect x="60" y="60" width="40" height="8" rx="2" fill="#8a6a2b" />

      {/* body */}
      <rect x="14" y="66" width="132" height="174" rx="22"
        fill="url(#glass)" stroke="url(#gold)" strokeWidth="3" />
      <rect x="24" y="80" width="10" height="140" rx="5" fill="#fff" opacity=".16" />
      <rect x="132" y="90" width="4" height="110" rx="2" fill="#fff" opacity=".08" />

      {/* label */}
      <rect x="38" y="118" width="84" height="76" rx="8"
        fill="none" stroke="url(#gold)" strokeWidth="2" />
      <text x="80" y="154" textAnchor="middle" fontSize="19"
        fill="url(#gold)" fontFamily="Playfair Display, serif" fontWeight="700">
        BALAAJ
      </text>
      <text x="80" y="174" textAnchor="middle" fontSize="7"
        fill="#d4af6a" letterSpacing="3">
        — PERFUMES —
      </text>
    </svg>
  );
}

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
          <motion.div
            className="bottle-wrap"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Bottle />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
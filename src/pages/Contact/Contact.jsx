import { useState } from "react";
import "../Shop/Shop.css";
import "./Contact.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="page-hero">
        <small>GET IN TOUCH</small>
        <h1>Contact Us</h1>
      </div>

      <section className="container contact-grid">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Need help with your order or delivery? Send us a message and we'll reply instantly.</p>
          <a className="wa-btn" href="https://wa.me/923067769125" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <p className="note">Online store · Delivering across Pakistan</p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={change} required />
          <input name="phone" placeholder="Contact Number" value={form.phone} onChange={change} required />
          <textarea name="message" rows="5" placeholder="How can we help?" value={form.message} onChange={change} required />
          <button disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "done" && <p className="ok">Thank You! Message received.</p>}
          {status === "error" && <p className="err">Message not sent. Try Again</p>}
        </form>
      </section>
    </>
  );
}
import "../Shop/Shop.css";
import "./PrivacyPolicy.css";

const sections = [
  ["Introduction", "Balaaj Perfumes (\"we\", \"us\") respects your privacy. This policy explains what information we collect when you visit or order from our website and how we use it."],
  ["Information We Collect", "When you place an order or contact us, we may collect your name, phone number, email address, delivery address and order details. We also collect basic technical data such as browser type and pages visited."],
  ["How We Use Your Information", "We use your information to process and deliver orders, contact you about your order, answer your questions, and improve our website and products."],
  ["Payments", "We currently offer Cash on Delivery. We do not store any card or bank details on our website."],
  ["Sharing Your Information", "We do not sell your personal information. We share only what is needed with delivery partners to deliver your order, or when required by law."],
  ["Cookies", "Our website may use cookies to remember your cart and improve your browsing experience. You can disable cookies in your browser settings."],
  ["Data Security", "We take reasonable steps to protect your information, but no online method is completely secure."],
  ["Your Rights", "You can ask us to update or delete your personal information at any time by contacting us."],
  ["Changes to This Policy", "We may update this policy from time to time. The latest version will always be on this page."],
  ["Contact Us", "For any privacy question, message us on WhatsApp at +92 306 7769125 or use our Contact page."],
];

export default function PrivacyPolicy() {
  return (
    <>
      <div className="page-hero">
        <small>LEGAL</small>
        <h1>Privacy Policy</h1>
      </div>
      <section className="container policy">
        {sections.map(([title, text], i) => (
          <div key={title}>
            <h2>{i + 1}. {title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
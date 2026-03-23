import { useState } from "react"
import { Link } from "react-router-dom"
import { PORTFOLIO_INFO, ASSETS, SOCIALS, NAV_LINKS } from "../../data/portfolio"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && email.includes("@")) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={ASSETS.brand} alt={PORTFOLIO_INFO.brandName} className="footer-brand-logo" />
          <p className="footer-brand-text">
            Creating digital experiences that blend creativity with functionality. 
            Let's build something extraordinary together.
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} {PORTFOLIO_INFO.brandName}. All rights reserved.
          </p>
        </div>

        <nav className="footer-nav">
          <h4>Navigate</h4>
          <ul>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-social-links">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                <img src={`/assets/svg/${social.icon}`} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <form className="footer-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer-newsletter-btn">
              Join the List
            </button>
            {subscribed && (
              <p className="footer-newsletter-msg">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      <div className="skip-top">
        <button 
          className="skip-top-btn" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  )
}

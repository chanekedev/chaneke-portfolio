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
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerBrand">
          <img src={ASSETS.brand} alt={PORTFOLIO_INFO.brandName} className="footerBrandLogo" />
          <p className="footerBrandText">
            Creating digital experiences that blend creativity with functionality. 
            Let's build something extraordinary together.
          </p>
          <p className="footerCopyright">
            © {new Date().getFullYear()} {PORTFOLIO_INFO.brandName}. All rights reserved.
          </p>
        </div>

        <nav className="footerNav">
          <h4>Navigate</h4>
          <ul>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label}>
                {path.includes("#") ? (
                  <a href={path}>{label}</a>
                ) : (
                  <Link to={path}>{label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="footerSocial">
          <h4>Connect</h4>
          <div className="footerSocialLinks">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footerSocialLink"
              >
                <img src={`/assets/svg/${social.icon}`} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footerNewsletter">
          <h4>Newsletter</h4>
          <form className="footerNewsletterForm" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footerNewsletterInput"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footerNewsletterBtn">
              Join the List
            </button>
            {subscribed && (
              <p className="footerNewsletterMsg">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      <div className="skipTop">
        <button 
          className="skipTopBtn" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  )
}

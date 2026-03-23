import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { NAV_LINKS, ASSETS } from "../../data/portfolio"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={ASSETS.brand} alt="Chaneke" className="navbar-logo" />
        </Link>

        <nav className="navbar-links">
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={label} to={path} className="navbar-link">
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="hamburger-line"
            style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}
          />
          <span
            className="hamburger-line"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="hamburger-line"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

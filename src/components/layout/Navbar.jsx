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
      <div className="navbarInner">
        <Link to="/" className="navbarBrand">
          <img src={ASSETS.brand} alt="Chaneke" className="navbarLogo" />
        </Link>

        <nav className="navbarLinks">
          {NAV_LINKS.map(({ label, path }) =>
            path.includes("#") ? (
              <a key={label} href={path} className="navbarLink">
                {label.toUpperCase()}
              </a>
            ) : (
              <Link key={label} to={path} className="navbarLink">
                {label.toUpperCase()}
              </Link>
            )
          )}
        </nav>

        <button
          className="navbarHamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="hamburgerLine"
            style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}
          />
          <span
            className="hamburgerLine"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="hamburgerLine"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobileMenu">
          {NAV_LINKS.map(({ label, path }) =>
            path.includes("#") ? (
              <a
                key={label}
                href={path}
                className="mobileMenuLink"
                onClick={() => setMenuOpen(false)}
              >
                {label.toUpperCase()}
              </a>
            ) : (
              <Link
                key={label}
                to={path}
                className="mobileMenuLink"
                onClick={() => setMenuOpen(false)}
              >
                {label.toUpperCase()}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  )
}

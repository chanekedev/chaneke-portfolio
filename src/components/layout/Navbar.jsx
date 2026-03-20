import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "var(--color-bg)",
      padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 5vw, 2.5rem)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>

      <Link to="/">
        <img
          src="/src/assets/svg/brand.svg"
          alt="Chaneke"
          style={{
            height: "clamp(24px, 4vw, 36px)",
            width: "auto",
            display: "block",
          }}
        />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "absolute",
          right: "clamp(1.5rem, 5vw, 2.5rem)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
        aria-label="Toggle menu"
      >
        <span style={{
          display: "block",
          width: "28px",
          height: "2.5px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "2px",
          transition: "transform 0.3s",
          transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
        }} />
        <span style={{
          display: "block",
          width: "28px",
          height: "2.5px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "2px",
          transition: "opacity 0.3s",
          opacity: menuOpen ? 0 : 1,
        }} />
        <span style={{
          display: "block",
          width: "28px",
          height: "2.5px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "2px",
          transition: "transform 0.3s",
          transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
        }} />
      </button>

      {menuOpen && (
        <nav style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--color-bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          zIndex: 99,
        }}>
          {["Home", "About", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
                color: "var(--color-primary)",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}

    </header>
  )
}
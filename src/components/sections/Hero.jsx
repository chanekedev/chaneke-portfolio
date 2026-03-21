export default function Hero() {
  const socials = [
    { icon: "/src/assets/svg/icon-github.svg",   href: "https://github.com",   label: "GitHub" },
    { icon: "/src/assets/svg/icon-linkedin.svg",  href: "https://linkedin.com",  label: "LinkedIn" },
    { icon: "/src/assets/svg/icon-behance.svg",   href: "https://behance.net",   label: "Behance" },
    { icon: "/src/assets/svg/icon-figma.svg",     href: "https://figma.com",     label: "Figma" },
  ]

  return (
<section
  className="hero-section"
  style={{
    height: "auto",
    display: "flex",
    alignItems: "flex-start",
    paddingBottom: "3rem",
    paddingTop: "9.5rem",
    paddingLeft: "clamp(1.2rem, 5vw, 20rem)",
    paddingRight: "clamp(1.2rem, 5vw, 20rem)",
    }}>
      <div className="hero-grid" style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "2rem",
      }}>

        <div className="hero-content" style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>

          <img
            src="/src/assets/svg/icon-brand.svg"
            alt="Chaneke symbol"
            className="hero-brand-mobile"
            style={{ height: "auto" }}
          />

              <h1
        className="hero-heading"
        style={{
          color: "var(--color-primary)",
          lineHeight: "1.05",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}>
        <span>HOLA, MUNDO!</span>
        <span>SOY CHANEKE.</span>
      </h1>

      <p
        className="hero-name"
        style={{
          color: "var(--color-primary)",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}>
        [JON CORTEZ]
              </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {["FRONTEND CREATIVO", "DISEÑO PROFESIONAL", "ILUSTRACIÓN DIGITAL"].map((item) => (
          <p
            key={item}
            className="hero-specialty"
            style={{
              color: "var(--color-primary)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: "1.9",
            }}>
            {item}
          </p>
        ))}
      </div>

          <div style={{
            display: "flex",
            gap: "clamp(0.4rem, 2vw, 1.2rem)",
            marginTop: "0.6rem",
            flexWrap: "wrap",
          }}>
            {socials.map((social) => (
              <a
                key={social.label}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={social.label}
  className="social-icon-link"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "transform 0.2s ease",
  }}
  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
>
  <img
    src={social.icon}
    alt={social.label}
    className="social-icon-img"
  />
</a>
            ))}
          </div>

        </div>

        <div className="hero-visual" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <img
            src="/src/assets/svg/icon-brand.svg"
            alt="Chaneke symbol"
            style={{
              width: "100%",
              maxWidth: "clamp(200px, 50vw, 400px)",
              height: "auto",
            }}
          />

        </div>
      </div>
    </section>
  )
}
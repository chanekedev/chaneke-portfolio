export default function Hero() {
  const socials = [
    { icon: "/src/assets/svg/icon-github.svg",   href: "https://github.com",   label: "GitHub" },
    { icon: "/src/assets/svg/icon-linkedin.svg",  href: "https://linkedin.com",  label: "LinkedIn" },
    { icon: "/src/assets/svg/icon-behance.svg",   href: "https://behance.net",   label: "Behance" },
    { icon: "/src/assets/svg/icon-figma.svg",     href: "https://figma.com",     label: "Figma" },
  ]

  return (
  <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "clamp(3rem, 5vw, 5rem)",
        paddingBottom: "4rem",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
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

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

    <h1 style={{
        fontSize: "clamp(1rem, 3vw, 3rem)",
        color: "var(--color-primary)",
        lineHeight: "1.1",
        textTransform: "uppercase",
        display: "inline",
        flexDirection: "column",
    }}>
        <span>HOLA, MUNDO!</span>
        <br/>
        <span>SOY CHANEKE.</span>
</h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 2rem)",
            color: "var(--color-primary)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginTop: "0.2rem",
          }}>
            JON CORTEZ
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {["FRONTEND CREATIVO", "DISEÑO PROFESIONAL", "ILUSTRACIÓN DIGITAL"].map((item) => (
              <p key={item} style={{
                fontSize: "clamp(0.7rem, 1.3vw, 0.95rem)",
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
            gap: "clamp(0.5rem, 2vw, 1.2rem)",
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
                style={{
                  width: "clamp(40px, 6vw, 64px)",
                  height: "clamp(40px, 6vw, 64px)",
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
                  style={{
                    width: "clamp(40px, 6vw, 64px)",
                    height: "clamp(40px, 6vw, 64px)",
                  }}
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
              maxWidth: "clamp(260px, 40vw, 540px)",
              height: "auto",
            }}
          />
        </div>

      </div>
    </section>
  )
}
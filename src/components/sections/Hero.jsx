import { SOCIALS, HERO_DATA, ASSETS } from "../../data/portfolio"

function renderBracketed(text) {
  const parts = text.split(/([{}])/)
  return parts.map((part, i) => {
    if (part === '{' || part === '}') return <span key={i}>{part}</span>
    return part
  })
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <img
            src={ASSETS.iconBrand}
            alt="Chaneke symbol"
            className="hero-brand-mobile"
          />

          <h1 className="hero-heading">
            <span>{HERO_DATA.greeting}</span>
            <span>{HERO_DATA.name}</span>
          </h1>

          <p className="hero-name">{renderBracketed(HERO_DATA.title)}</p>

          <div>
            {HERO_DATA.specialties.map((item) => (
              <p key={item} className="hero-specialty">
                {item}
              </p>
            ))}
          </div>

          <div className="social-icons">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon"
              >
                <img src={`/assets/svg/${social.icon}`} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <img src={ASSETS.iconBrand} alt="Chaneke symbol" />
        </div>
      </div>
    </section>
  )
}

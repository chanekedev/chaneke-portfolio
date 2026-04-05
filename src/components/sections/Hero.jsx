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
    <section className="heroSection">
      <div className="heroGrid">
        <div className="heroContent">
          <img
            src={ASSETS.iconBrand}
            alt="Chaneke symbol"
            className="heroBrandMobile"
          />

          <h1 className="heroHeading">
            <span>{HERO_DATA.greeting}</span>
            <span>{HERO_DATA.name}</span>
          </h1>

          <p className="heroName">{renderBracketed(HERO_DATA.title)}</p>

          <div>
            {HERO_DATA.specialties.map((item) => (
              <p key={item} className="heroSpecialty">
                {item}
              </p>
            ))}
          </div>

          <div className="socialIcons">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="socialIcon"
              >
                <img src={`/assets/svg/${social.icon}`} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="heroVisual">
          <img src={ASSETS.iconBrand} alt="Chaneke symbol" />
        </div>
      </div>
    </section>
  )
}

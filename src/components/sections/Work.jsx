import { useState, useCallback } from "react"

const CARDS = [
  { id: "04", href: "https://www.behance.net/ochodesign",                                                                        img: "/assets/web-image-04.jpg", alt: "Project 04", className: "workCard tall" },
  { id: "01", href: "https://www.behance.net/gallery/76979033/Concepto-de-Sitio-Web-para-Malhora-Encuentro-Creativo",            img: "/assets/web-image-01.jpg", alt: "Project 01", className: "workCard wide" },
  { id: "02", href: "https://www.behance.net/gallery/28900593/Don-Bocadon-Food",                                                 img: "/assets/web-image-02.jpg", alt: "Project 02", className: "workCard medium" },
  { id: "03", href: "https://www.youtube.com/watch?v=dqvkk02994o&t=616s",                                                       img: "/assets/web-image-03.jpg", alt: "Project 03", className: "workCard medium" },
]

function WorkCard({ card, revealed, onTap }) {
  const handleClick = useCallback(
    (e) => {
      if (!window.matchMedia("(hover: none)").matches) return
      if (!revealed) {
        e.preventDefault()
        onTap(card.id)
      }
    },
    [revealed, card.id, onTap]
  )

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${card.className}${revealed ? " workCardRevealed" : ""}`}
      onClick={handleClick}
    >
      <img
        src={card.img}
        alt={card.alt}
        className="workCardImg"
      />
      <img
        src="/assets/svg/icon-arrow-01.svg"
        alt=""
        aria-hidden="true"
        className="workCardArrow"
      />
    </a>
  )
}

export default function Work() {
  const [revealedId, setRevealedId] = useState(null)

  const handleTap = useCallback((id) => {
    setRevealedId(id)
  }, [])

  const [card04, card01, card02, card03] = CARDS

  return (
    <section className="workSection">
      <div className="workHeader">
        <h2 className="heroHeading">WORK</h2>
        <a
          href="https://www.behance.net/ochodesign"
          target="_blank"
          rel="noopener noreferrer"
          className="aboutCvBtn"
        >
          VER EN BEHANCE
        </a>
      </div>

      <div className="workGrid" style={{ marginTop: "2rem" }}>

        <WorkCard card={card04} revealed={revealedId === card04.id} onTap={handleTap} />

        <div className="workColRight">
          <WorkCard card={card01} revealed={revealedId === card01.id} onTap={handleTap} />

          <div className="workRowBottom">
            <WorkCard card={card02} revealed={revealedId === card02.id} onTap={handleTap} />
            <WorkCard card={card03} revealed={revealedId === card03.id} onTap={handleTap} />
          </div>
        </div>

      </div>
    </section>
  )
}
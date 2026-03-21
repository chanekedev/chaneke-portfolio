import { useEffect, useState } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const skills = [
  { id: "frontend",  label: "FRONTEND",  position: "left-top" },
  { id: "apps",      label: "APPS",      position: "left-mid" },
  { id: "versiones", label: "VERSIONES", position: "left-bot" },
  { id: "backend",   label: "BACKEND",   position: "right-top" },
  { id: "diseno",    label: "DISEÑO", position: "right-mid" },
  { id: "genai",     label: "GEN AI",    position: "right-bot" },
]

export default function About() {
  const [titleRef, titleVisible]       = useIntersectionObserver({ threshold: 0.3 })
  const [computerRef, computerVisible] = useIntersectionObserver({ threshold: 0.3 })
  const [screenRef, screenVisible]     = useIntersectionObserver({ threshold: 0.4 })
  const [skillsActive, setSkillsActive] = useState(false)

  useEffect(() => {
    if (screenVisible) {
      setTimeout(() => setSkillsActive(true), 700)
    }
  }, [screenVisible])

  const boxStyle = (i) => ({
    transitionDelay: skillsActive ? `${i * 0.15}s` : "0s",
    backgroundColor: "var(--color-accent)",
    borderRadius: "5px",
    padding: "1rem 1rem",
    height: "130px",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  })

  const labelStyle = {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    color: "var(--color-primary)",
    textTransform: "uppercase",
  }

  return (
    <section className="about-section">

      {/* ── Title + CV button ── */}
      <div ref={titleRef} className="about-header">
        <h2 className={`hero-heading anim-hidden${titleVisible ? " anim-visible" : ""}`}
          style={{
            color: "var(--color-primary)",
            lineHeight: "1.05",
            textTransform: "uppercase",
          }}
        >
          SKILL-SET
        </h2>

        <a
          href="/cv-chaneke.pdf"
          download
          className={`about-cv-btn anim-hidden anim-delay-1${titleVisible ? " anim-visible" : ""}`}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "var(--color-primary)"
            e.currentTarget.style.color = "var(--color-bg)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "var(--color-primary)"
          }}
        >
          DESCARGAR CV
        </a>
      </div>

      {/* ── Desktop 3 column layout ── */}
      <div ref={computerRef} className="about-grid">

        {/* LEFT skill boxes */}
        <div className="about-col-left" style={{ marginTop: "-20rem" }}>
          {skills.filter(s => s.position.startsWith("left")).map((skill, i) => (
            <div key={skill.id}
              className={`skill-box${skillsActive ? " skill-active" : ""}`}
              style={boxStyle(i)}
            >
              <span style={labelStyle}>{skill.label}</span>
            </div>
          ))}
        </div>

        {/* CENTER computer */}
        <div className="about-col-center">

          {/* Angular connection lines — desktop only */}
          <svg className="about-connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">

            {/* ── Static lines ── */}
            <path id="line-lt" d="M -0.2,-7 L 17,-7 L 24,10 L 30.8,10"   fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
            <path id="line-lm" d="M -0.2,35 L 17,35 L 24,30 L 30.9,30"   fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
            <path id="line-lb" d="M -0.2,80 L 5,80 L 13,59 L 25.4,59"    fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
            <path id="line-rt" d="M 100.2,-7 L 83,-7 L 76,10 L 68.5,10"  fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
            <path id="line-rm" d="M 100.2,35 L 83,35 L 76,30 L 68.3,30"  fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
            <path id="line-rb" d="M 100.2,80 L 95,80 L 87,59 L 75.4,59"  fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>

            {/* ── Moving squares — background color, PC → box direction ── */}

            {/* Left top — dur 2.3s, starts at 0.2s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.3s" begin="0.2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lt"/>
              </animateMotion>
            </rect>

            {/* Left mid — dur 1.7s, starts at 1.5s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="1.7s" begin="1.5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lm"/>
              </animateMotion>
            </rect>

            {/* Left bot — dur 2.8s, starts at 0.8s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.8s" begin="0.8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lb"/>
              </animateMotion>
            </rect>

            {/* Right top — dur 2.0s, starts at 0.5s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.0s" begin="0.5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rt"/>
              </animateMotion>
            </rect>

            {/* Right mid — dur 3.1s, starts at 1.2s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="3.1s" begin="1.2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rm"/>
              </animateMotion>
            </rect>

            {/* Right bot — dur 1.9s, starts at 2.1s */}
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="1.9s" begin="2.1s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rb"/>
              </animateMotion>
            </rect>

          </svg>

          {/* Computer illustration */}
          <div style={{ position: "relative", width: "80%", margin: "-0.5rem auto 1rem auto" }}>
            <img
              src="/src/assets/svg/computer-illustration.svg"
              alt="Retro computer"
              className="about-computer"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {/* CRT screen overlay */}
            <div
              ref={screenRef}
              className={`crt-screen crt-overlay${screenVisible ? " crt-active" : ""}`}
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/src/assets/svg/icon-brand2.svg"
                alt="Chaneke on screen"
                className="crt-brand-logo"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT skill boxes */}
        <div className="about-col-right" style={{ marginTop: "-20rem" }}>
          {skills.filter(s => s.position.startsWith("right")).map((skill, i) => (
            <div key={skill.id}
              className={`skill-box${skillsActive ? " skill-active" : ""}`}
              style={boxStyle(i)}
            >
              <span style={labelStyle}>{skill.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Mobile skills grid — shown only on mobile ── */}
      <div className="about-mobile-skills">
        {skills.map((skill, i) => (
          <div key={skill.id + "-m"}
            className={`skill-box${skillsActive ? " skill-active" : ""}`}
            style={{
              transitionDelay: skillsActive ? `${i * 0.1}s` : "0s",
              backgroundColor: "var(--color-accent)",
              borderRadius: "6px",
              padding: "0.8rem 1rem",
              height: "70px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span style={labelStyle}>{skill.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

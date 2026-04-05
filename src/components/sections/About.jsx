import { useIntersectionObserver } from "../../hooks"
import { SKILLS, PORTFOLIO_INFO, ASSETS } from "../../data/portfolio"
import SkillBox from "../ui/SkillBox"

export default function About() {
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3 })
  const [screenRef, screenVisible] = useIntersectionObserver({ threshold: 0.4 })

  const leftSkills = SKILLS.filter((s) => s.position.startsWith("left"))
  const rightSkills = SKILLS.filter((s) => s.position.startsWith("right"))

  return (
    <section className="aboutSection">
      <div ref={titleRef} className="aboutHeader">
        <h2
          className={`heroHeading animFadeIn${titleVisible ? " animDelay1" : ""}`}
        >
          SKILL-SET
        </h2>

        <a
          href={PORTFOLIO_INFO.cvUrl}
          download
          className={`aboutCvBtn animFadeIn${titleVisible ? " animDelay2" : ""}`}
        >
          DESCARGAR CV
        </a>
      </div>

      <div className="aboutGrid">
        <div className="aboutColLeft" style={{ marginTop: "-20rem" }}>
          {leftSkills.map((skill, i) => (
            <SkillBox
              key={skill.id}
              skill={skill}
              isActive={titleVisible}
              delay={`${i * 0.15}s`}
            />
          ))}
        </div>
{/* EDITAR FORMA DE LINEAS EN SECCION ABOUT O*O */}
        <div className="aboutColCenter">
          <svg
            className="aboutConnectionLines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path id="line-lt" d="M -0.2,-4 L 17,-4 L 24,10 L 30.8,10" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            <path id="line-lm" d="M -0.2,39 L 17,39 L 24,30 L 30.9,30" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            <path id="line-lb" d="M -0.2,80 L 5,80 L 13,59 L 25.4,59" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            <path id="line-rt" d="M 100.2,-4 L 83,-4 L 76,10 L 68.5,10" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            <path id="line-rm" d="M 100.2,39 L 83,39 L 76,30 L 68.3,30" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
            <path id="line-rb" d="M 100.2,80 L 95,80 L 87,59 L 75.4,59" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />

            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.3s" begin="0.2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lt" />
              </animateMotion>
            </rect>
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="1.7s" begin="1.5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lm" />
              </animateMotion>
            </rect>
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.8s" begin="0.8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-lb" />
              </animateMotion>
            </rect>
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="2.0s" begin="0.5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rt" />
              </animateMotion>
            </rect>
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="3.1s" begin="1.2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rm" />
              </animateMotion>
            </rect>
            <rect x="-2" y="-2" width="4" height="4" fill="var(--color-bg)">
              <animateMotion dur="1.9s" begin="2.1s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#line-rb" />
              </animateMotion>
            </rect>
          </svg>

          <div style={{ position: "relative", width: "80%", margin: "-0.5rem auto 1rem" }}>
            <img
              src={ASSETS.computer}
              alt="Retro computer"
              className="aboutComputer"
            />
            <div
              ref={screenRef}
              className={`crtScreen${screenVisible ? " active" : ""}`}
            >
              <img src={ASSETS.iconBrand2} alt="Chaneke on screen" className="crtBrandLogo" />
            </div>
          </div>
        </div>

        <div className="aboutColRight" style={{ marginTop: "-20rem" }}>
          {rightSkills.map((skill, i) => (
            <SkillBox
              key={skill.id}
              skill={skill}
              isActive={titleVisible}
              delay={`${i * 0.15}s`}
            />
          ))}
        </div>
      </div>

      <div className="aboutMobileSkills">
        {SKILLS.map((skill, i) => (
          <SkillBox
            key={`${skill.id}-m`}
            skill={skill}
            isActive={titleVisible}
            delay={`${i * 0.1}s`}
            isMobile
          />
        ))}
      </div>
    </section>
  )
}
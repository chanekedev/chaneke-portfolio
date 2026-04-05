export default function SkillBox({ skill, isActive, delay, isMobile }) {
  const Tag = skill.url ? "a" : "div"

  const linkProps = skill.url
    ? { href: skill.url, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <Tag
      {...linkProps}
      className={`skillBox${isActive ? " active" : ""}`}
      style={{
        transitionDelay: isActive ? delay : "0s",
        ...(isMobile && { height: "70px" }),
        ...(skill.url && { cursor: "pointer", textDecoration: "none" }),
      }}
    >
      <div className="skillContent">
        <img
          src={`/assets/svg/${skill.icon}`}
          alt={skill.label}
          className="skillIcon"
        />
        <span className="skillLabel">{skill.label}</span>
      </div>
      <div className="skillStrip" aria-hidden="true" />
    </Tag>
  )
}
export default function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '2px solid var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <img
        src={icon}
        alt={label}
        style={{ width: '20px', height: '20px' }}
      />
    </a>
  )
}
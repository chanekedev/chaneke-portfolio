export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-accent)",
      backgroundColor: "var(--color-bg)",
      padding: "1.5rem clamp(1.5rem, 5vw, 2.5rem)",
    }}>
      <p style={{
        textAlign: "center",
        fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
        color: "var(--color-muted)",
      }}>
        © {new Date().getFullYear()} Chaneke. All rights reserved.
      </p>
    </footer>
  )
}
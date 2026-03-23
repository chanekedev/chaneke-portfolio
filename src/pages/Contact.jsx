import { useState } from "react"
import { SOCIALS } from "../data/portfolio"
import { useIntersectionObserver } from "../hooks"

const SUBJECTS = [
  { value: "", label: "Select a subject" },
  { value: "web", label: "Web Development" },
  { value: "design", label: "Graphic Design" },
  { value: "branding", label: "Branding" },
  { value: "other", label: "Other" },
]

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setError("Please enter your name")
      return
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email")
      return
    }
    if (!formData.subject) {
      setError("Please select a subject")
      return
    }
    if (!formData.message.trim()) {
      setError("Please enter your message")
      return
    }

    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1500)
  }

  return (
    <section className="contact-section">
      <div ref={ref} className={`contact-container anim-fade-in${isVisible ? " anim-delay-1" : ""}`}>
        <div className="contact-info">
          <h2>LET'S COLLABORATE</h2>
          <p>
            Have a project in mind? Let's create something amazing together. 
            Whether it's web development, branding, or creative design, 
            I'm here to bring your vision to life.
          </p>
          
          <div className="contact-socials">
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

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              aria-label="Full Name"
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              aria-label="Email Address"
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-select"
              aria-label="Subject"
              disabled={status === "loading"}
            >
              {SUBJECTS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              aria-label="Your Message"
              disabled={status === "loading"}
            />
          </div>

          {error && (
            <p className="form-message error">{error}</p>
          )}

          {status === "success" && (
            <p className="form-message success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            className="form-button"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}

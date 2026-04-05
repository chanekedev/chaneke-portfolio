import { useState } from "react"
import { SOCIALS } from "../../data/portfolio"
import { useIntersectionObserver } from "../../hooks"

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
    <section id="contact" className="contactSection">
      <div ref={ref} className={`contactContainer animFadeIn${isVisible ? " animDelay1" : ""}`}>
        <div className="contactInfo">
          <h2>LET'S COLLABORATE</h2>
          <p>
            Have a project in mind? Let's create something amazing together.
            Whether it's web development, branding, or creative design,
            I'm here to bring your vision to life.
          </p>

          <div className="contactSocials">
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

        <form className="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="formInput"
              aria-label="Full Name"
              disabled={status === "loading"}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email" className="formLabel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="formInput"
              aria-label="Email Address"
              disabled={status === "loading"}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="subject" className="formLabel">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="formSelect"
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

          <div className="formGroup">
            <label htmlFor="message" className="formLabel">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="formTextarea"
              aria-label="Your Message"
              disabled={status === "loading"}
            />
          </div>

          {error && (
            <p className="formMessage error">{error}</p>
          )}

          {status === "success" && (
            <p className="formMessage success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            className="formButton"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}

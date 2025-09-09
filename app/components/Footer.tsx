export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sahan Siriwardhana</h3>
            <p>Computer Engineering Student & Full-Stack Developer passionate about creating innovative solutions and meaningful user experiences.</p>
            <div className="social-links">
              <a href="https://github.com/sahanhansa" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sahansiriwardhana" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:sahan.siriwardhana@example.com" className="social-link">
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="services-list">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>React Applications</li>
              <li>Full-Stack Solutions</li>
              <li>Technical Consultation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 sahan.siriwardhana@example.com</p>
              <p>📱 +94 12 345 6789</p>
              <p>📍 Colombo, Sri Lanka</p>
              <p>🎓 University of Moratuwa</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2024 Sahan Siriwardhana. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div>
          <h1 className="hero-title">Hi, I&apos;m <span className="highlight">Sahan Siriwardhana</span></h1>
          <h2 className="hero-subtitle">Full Stack Developer & IT Undergraduate</h2>
          <p className="hero-description">
            Passionate about Full Stack Development, Business Analysis, Networking, and Project Management.
            Currently pursuing BSc. Hons. Information Technology at University of Moratuwa.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/sahanhansa" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/sahan-siriwardhana-977700288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="mailto:sahanhansa.rcg@gmail.com" className="social-link" aria-label="Email">
              📧
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-photo-container">
            <Image 
              src="/images/profile-photo.jpg" 
              alt="Sahan Siriwardhana" 
              className="profile-photo"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

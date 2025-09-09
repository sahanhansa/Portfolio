import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my development work</p>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          <div className="card project-card">
            <div className="project-image">
              <Image 
                src="/images/Freshly Frontend - Google Chrome 8_4_2025 3_12_26 AM.png" 
                alt="Freshly Laundry Management System" 
                className="project-screenshot"
                width={400}
                height={280}
              />
            </div>
            <div className="project-content">
              <h3>Freshly - Laundry Management System</h3>
              <p>A comprehensive laundry management system with four interfaces (Customer, Admin, Driver, Laundry). Connects customers with registered laundries and provides online service booking with driver coordination.</p>
              <div className="project-tags">
                <span className="tag">Angular</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">ASP.NET Core</span>
                <span className="tag">Team Leadership</span>
              </div>
              <div className="project-links">
                <a href="https://www.vave.lk/index.html" className="btn btn-sm" target="_blank" rel="noopener noreferrer">Partner Company</a>
                <a href="https://github.com/sahanhansa/FreshlyFrontend" className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">Frontend Repo</a>
                <a href="https://github.com/sahanhansa/FreshlyBackend" className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">Backend Repo</a>
              </div>
            </div>
          </div>

          <div className="card project-card">
            <div className="project-image">
              <Image 
                src="/images/strikemate.png" 
                alt="StrikeMate Automated Carrom Opponent" 
                className="project-screenshot"
                width={400}
                height={280}
              />
            </div>
            <div className="project-content">
              <h3>StrikeMate - Automated Carrom Opponent</h3>
              <p>An automated carrom opponent with precision shooting mechanism. Designed and developed the shooting system with angle control, integrated solenoid with Arduino Uno through relay modules.</p>
              <div className="project-tags">
                <span className="tag">Arduino Uno</span>
                <span className="tag">MG995 Servo</span>
                <span className="tag">Solenoid</span>
                <span className="tag">Hardware Design</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-sm">Documentation</a>
                <a href="#" className="btn btn-sm btn-secondary">GitHub</a>
              </div>
            </div>
          </div>

          <div className="card project-card">
            <div className="project-image">
              <Image 
                src="/images/Sahan Siriwardhana - Portfolio .png" 
                alt="Personal Portfolio Website" 
                className="project-screenshot"
                width={400}
                height={280}
              />
            </div>
            <div className="project-content">
              <h3>Personal Portfolio Website</h3>
              <p>A modern, responsive portfolio website showcasing my professional journey, projects, and skills. Built with clean design principles and optimized user experience.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Responsive Design</span>
              </div>
              <div className="project-links">
                <a href="/" className="btn btn-sm">Live Demo</a>
                <a href="https://github.com/sahanhansa/Portfolio" className="btn btn-sm btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

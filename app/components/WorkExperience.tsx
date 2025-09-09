export default function WorkExperience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card experience-card">
                <div className="experience-header">
                  <h3>Software Engineer Intern</h3>
                  <div className="company-info">
                    <span className="company">VAVE Laundry</span>
                    <span className="period">March 2024 - Present</span>
                  </div>
                </div>
                <div className="experience-details">
                  <p>Leading a team of 5 developers in developing a comprehensive laundry management system with Angular frontend and ASP.NET Core backend.</p>
                  <ul className="achievement-list">
                    <li>Architected and developed customer, admin, driver, and laundry interfaces</li>
                    <li>Implemented real-time order tracking and communication features</li>
                    <li>Led code reviews and established development best practices</li>
                    <li>Collaborated with stakeholders to define technical requirements</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">ASP.NET Core</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card experience-card">
                <div className="experience-header">
                  <h3>Frontend Developer</h3>
                  <div className="company-info">
                    <span className="company">Freelance Projects</span>
                    <span className="period">2023 - Present</span>
                  </div>
                </div>
                <div className="experience-details">
                  <p>Developing responsive web applications and user interfaces for various clients using modern frontend technologies.</p>
                  <ul className="achievement-list">
                    <li>Built responsive websites with React and Next.js</li>
                    <li>Implemented modern UI/UX designs with attention to detail</li>
                    <li>Optimized web applications for performance and accessibility</li>
                    <li>Collaborated with clients to deliver solutions meeting business requirements</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WorkExperience() {
  return (
    <section id="work-experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Professional volunteer leadership and project management experience</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card work-experience-card">
                <div className="card-header">
                  <h3>Nena Aruna - Project Director</h3>
                  <div className="date">2023 - 2024</div>
                </div>
                <div className="card-image">
                  <img 
                    src="/images/Nena Aruna.jpg" 
                    alt="Nena Aruna Project" 
                    className="experience-image"
                  />
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <span className="company">Rotaract Club of University of Moratuwa</span>
                  </div>
                  <div className="description">
                    <div className="topic-section">
                      <h4 className="topic-title">Project Overview</h4>
                      <p className="topic-content">Directed the Nena Aruna initiative, a comprehensive educational support project that won the Gold Award as the most outstanding project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives.</p>
                    </div>
                    
                    <div className="topic-section">
                      <h4 className="topic-title">Key Achievements</h4>
                      <ul className="achievement-list">
                        <li>Led educational support for O/L students across Sri Lanka</li>
                        <li>Organized 30+ tutoring sessions and seminars</li>
                        <li>Reached 50+ schools across 10 districts</li>
                        <li>Implemented "Hari Para" career guidance series</li>
                        <li>Won Gold Award for Most Outstanding Project</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-tags">
                    <span className="tag">Project Management</span>
                    <span className="tag">Educational Leadership</span>
                    <span className="tag">Community Outreach</span>
                    <span className="tag">Award Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card work-experience-card">
                <div className="card-header">
                  <h3>Community Development Projects</h3>
                  <div className="date">2022 - Present</div>
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <span className="company">Various Volunteer Organizations</span>
                  </div>
                  <div className="description">
                    <div className="topic-section">
                      <h4 className="topic-title">Leadership Role</h4>
                      <p className="topic-content">Led multiple community development initiatives focusing on education, technology access, and social impact across various volunteer organizations.</p>
                    </div>
                    
                    <div className="topic-section">
                      <h4 className="topic-title">Core Responsibilities</h4>
                      <ul className="achievement-list">
                        <li>Coordinated multiple community service projects</li>
                        <li>Provided technical mentorship to students</li>
                        <li>Organized workshops for digital literacy</li>
                        <li>Collaborated with local organizations for sustainable impact</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-tags">
                    <span className="tag">Community Service</span>
                    <span className="tag">Mentorship</span>
                    <span className="tag">Digital Literacy</span>
                    <span className="tag">Social Impact</span>
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

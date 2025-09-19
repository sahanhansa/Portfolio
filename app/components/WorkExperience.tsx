export default function WorkExperience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Volunteer Projects</h2>
          <p className="section-subtitle">Impactful community service initiatives and projects</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card">
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
                    <p>Directed the Nena Aruna initiative, a comprehensive educational support project that won the Gold Award as the most outstanding project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives awarding ceremony.</p>
                    <ul className="achievement-list">
                      <li>Led a project aimed at helping O/L examination students across Sri Lanka</li>
                      <li>Organized online tutoring sessions and physical tutoring seminars</li>
                      <li>Conducted over 30 educational support sessions</li>
                      <li>Reached 50+ schools across 10 districts in Sri Lanka</li>
                      <li>Implemented "Hari Para" - a comprehensive career guidance session series</li>
                      <li>Won Gold Award for Most Outstanding Project in Basic Education and Literacy</li>
                    </ul>
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
              <div className="card">
                <div className="card-header">
                  <h3>Community Development Projects</h3>
                  <div className="date">2022 - Present</div>
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <span className="company">Various Volunteer Organizations</span>
                  </div>
                  <div className="description">
                    <p>Participated in and led various community development initiatives focusing on education, technology access, and social impact.</p>
                    <ul className="achievement-list">
                      <li>Coordinated multiple community service projects</li>
                      <li>Provided technical mentorship to students</li>
                      <li>Organized workshops for digital literacy</li>
                      <li>Collaborated with local organizations for sustainable impact</li>
                    </ul>
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

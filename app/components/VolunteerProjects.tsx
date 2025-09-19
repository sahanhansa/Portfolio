export default function VolunteerProjects() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Volunteer Projects</h2>
          <p className="section-subtitle">Impactful community service initiatives and projects</p>
        </div>
        
        <div className="card-grid">
          <div className="card volunteer-card">
            <div className="volunteer-image">
              <img src="/images/Nena Aruna.jpg" alt="Nena Aruna Project" />
            </div>
            <div className="volunteer-header">
              <h3>Nena Aruna - Project Director</h3>
              <div className="organization-info">
                <span className="organization">Rotaract Club of University of Moratuwa</span>
                <span className="period">2023 - 2024</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Directed the Nena Aruna initiative, a comprehensive educational support project that won the Gold Award as the most outstanding project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives awarding ceremony.</p>
              <ul className="impact-list">
                <li>Led a project aimed at helping O/L examination students across Sri Lanka</li>
                <li>Organized online tutoring sessions and physical tutoring seminars</li>
                <li>Conducted over 30 educational support sessions</li>
                <li>Reached 50+ schools across 10 districts in Sri Lanka</li>
                <li>Implemented "Hari Para" - a comprehensive career guidance session series</li>
                <li>Won Gold Award for Most Outstanding Project in Basic Education and Literacy</li>
              </ul>
              <div className="impact-tags">
                <span className="tag">Project Management</span>
                <span className="tag">Educational Leadership</span>
                <span className="tag">Community Outreach</span>
                <span className="tag">Award Winner</span>
              </div>
            </div>
          </div>

          <div className="card volunteer-card">
            <div className="volunteer-image">
              <img src="/images/Grama Prabodhaya.jpg" alt="Grama Prabodhaya 2025 Project" />
            </div>
            <div className="volunteer-header">
              <h3>Grama Prabodhaya 2025 - Project Director</h3>
              <div className="organization-info">
                <span className="organization">Rotaract Club of University of Moratuwa</span>
                <span className="period">2025</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Led a comprehensive rural development initiative aimed at uplifting the lives of villagers in Kirimatiyawa and Ambanpola villages, Kurunegala district. The project focused on addressing critical issues including maternal health, water access, education, and community development.</p>
              
              <div className="sub-projects">
                <h4>Key Sub-Projects:</h4>
                <div className="sub-project-grid">
                  <span className="sub-project-tag">Senehe Yathra</span>
                  <span className="sub-project-tag">Aqua Safe</span>
                  <span className="sub-project-tag">Intellect</span>
                  <span className="sub-project-tag">Heta</span>
                  <span className="sub-project-tag">Star Seekers</span>
                  <span className="sub-project-tag">Akuru</span>
                  <span className="sub-project-tag">Sihina</span>
                </div>
              </div>

              <ul className="impact-list">
                <li>Addressed critical health issues: low birth weight babies and water contamination</li>
                <li>Partnered with Conscient AI as Bronze Sponsor</li>
                <li>Implemented 7 integrated sub-projects across health, education, and infrastructure</li>
                <li>Impacted 200+ direct beneficiaries including students, mothers, and community members</li>
                <li>Installed RO water systems and donated 2000 books to schools</li>
              </ul>
              <div className="impact-tags">
                <span className="tag">Rural Development</span>
                <span className="tag">Community Health</span>
                <span className="tag">Educational Support</span>
                <span className="tag">Project Management</span>
              </div>
            </div>
          </div>

          <div className="card volunteer-card">
            <div className="volunteer-image">
              <div className="placeholder-image">
                <span>Community Impact Projects</span>
              </div>
            </div>
            <div className="volunteer-header">
              <h3>Additional Community Projects</h3>
              <div className="organization-info">
                <span className="organization">Various Organizations</span>
                <span className="period">2022 - Present</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Participated in and led various community development initiatives focusing on education, technology access, and social impact across different organizations and communities.</p>
              <ul className="impact-list">
                <li>Coordinated multiple community service projects</li>
                <li>Provided technical mentorship to students</li>
                <li>Organized workshops for digital literacy</li>
                <li>Collaborated with local organizations for sustainable impact</li>
                <li>Supported educational initiatives in rural communities</li>
              </ul>
              <div className="impact-tags">
                <span className="tag">Community Service</span>
                <span className="tag">Mentorship</span>
                <span className="tag">Digital Literacy</span>
                <span className="tag">Social Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

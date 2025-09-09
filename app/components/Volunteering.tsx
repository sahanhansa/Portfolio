export default function Volunteering() {
  return (
    <section id="volunteering" className="volunteering">
      <div className="container">
        <h2 className="section-title">Volunteer Experience</h2>
        
        <div className="volunteering-grid">
          <div className="card volunteer-card">
            <div className="volunteer-header">
              <h3>Technology Volunteer</h3>
              <div className="organization-info">
                <span className="organization">Local Community Center</span>
                <span className="period">2023 - Present</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Teaching basic computer skills and digital literacy to elderly community members and underprivileged students.</p>
              <ul className="impact-list">
                <li>Conducted weekly computer literacy sessions for 20+ participants</li>
                <li>Developed simplified learning materials for non-technical audiences</li>
                <li>Helped participants gain confidence in using modern technology</li>
                <li>Established ongoing support network for continuous learning</li>
              </ul>
              <div className="skills-gained">
                <span className="skill-tag">Teaching</span>
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Community Service</span>
                <span className="skill-tag">Digital Literacy</span>
              </div>
            </div>
          </div>

          <div className="card volunteer-card">
            <div className="volunteer-header">
              <h3>Technical Mentor</h3>
              <div className="organization-info">
                <span className="organization">University Coding Club</span>
                <span className="period">2022 - 2024</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Mentoring junior students in programming concepts, project development, and career guidance in software engineering.</p>
              <ul className="impact-list">
                <li>Mentored 15+ students in web development and programming fundamentals</li>
                <li>Organized coding workshops and hackathons</li>
                <li>Provided career guidance and industry insights</li>
                <li>Helped students build portfolios and prepare for internships</li>
              </ul>
              <div className="skills-gained">
                <span className="skill-tag">Mentorship</span>
                <span className="skill-tag">Leadership</span>
                <span className="skill-tag">Event Organization</span>
                <span className="skill-tag">Knowledge Sharing</span>
              </div>
            </div>
          </div>

          <div className="card volunteer-card">
            <div className="volunteer-header">
              <h3>Environmental Tech Initiative</h3>
              <div className="organization-info">
                <span className="organization">Green Campus Project</span>
                <span className="period">2023</span>
              </div>
            </div>
            <div className="volunteer-details">
              <p>Developed digital solutions to promote environmental awareness and track sustainability initiatives on campus.</p>
              <ul className="impact-list">
                <li>Created a web application to track campus energy consumption</li>
                <li>Implemented digital reporting system for environmental initiatives</li>
                <li>Raised awareness about sustainable technology practices</li>
                <li>Collaborated with environmental science students on data analysis</li>
              </ul>
              <div className="skills-gained">
                <span className="skill-tag">Environmental Tech</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Cross-discipline Collaboration</span>
                <span className="skill-tag">Social Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

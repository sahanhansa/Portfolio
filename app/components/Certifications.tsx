export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="certifications-grid">
          <div className="card certification-card">
            <div className="cert-header">
              <h3>Web Development Fundamentals</h3>
              <span className="issuer">Coursera</span>
            </div>
            <div className="cert-details">
              <p>Comprehensive certification covering HTML, CSS, JavaScript, and modern web development practices.</p>
              <div className="cert-meta">
                <span className="date">2023</span>
                <span className="status verified">Verified</span>
              </div>
            </div>
          </div>

          <div className="card certification-card">
            <div className="cert-header">
              <h3>React Development</h3>
              <span className="issuer">Meta</span>
            </div>
            <div className="cert-details">
              <p>Advanced React concepts including hooks, context, state management, and modern React patterns.</p>
              <div className="cert-meta">
                <span className="date">2023</span>
                <span className="status verified">Verified</span>
              </div>
            </div>
          </div>

          <div className="card certification-card">
            <div className="cert-header">
              <h3>Angular Framework</h3>
              <span className="issuer">Google</span>
            </div>
            <div className="cert-details">
              <p>Complete Angular framework certification covering components, services, routing, and best practices.</p>
              <div className="cert-meta">
                <span className="date">2024</span>
                <span className="status verified">Verified</span>
              </div>
            </div>
          </div>

          <div className="card certification-card">
            <div className="cert-header">
              <h3>Database Management</h3>
              <span className="issuer">University of Moratuwa</span>
            </div>
            <div className="cert-details">
              <p>Advanced database concepts, SQL optimization, and database design principles.</p>
              <div className="cert-meta">
                <span className="date">2023</span>
                <span className="status academic">Academic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

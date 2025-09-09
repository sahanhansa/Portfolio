import Image from 'next/image'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and continuous learning</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="card">
                <div className="card-header">
                  <h3>GCE Ordinary Level</h3>
                  <span className="date">2017</span>
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <Image 
                      src="/images/richmond-college-crest.jpg" 
                      alt="Richmond College Crest" 
                      className="institution-logo"
                      width={50}
                      height={50}
                    />
                    <p className="institution">Richmond College, Galle, Sri Lanka</p>
                  </div>
                  <p className="description">Completed GCE Ordinary Level examination with exceptional academic performance across all subjects. Specialized in technology and literature through carefully chosen electives.</p>
                  <div className="achievement-highlight">
                    <strong>Outstanding Results: 9 As for all subjects</strong><br />
                    Elective Subjects: Information Technology, Appreciation of English Literary Texts, and Geography
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
                  <h3>GCE Advanced Level</h3>
                  <span className="date">2018 - 2021</span>
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <Image 
                      src="/images/richmond-college-crest.jpg" 
                      alt="Richmond College Crest" 
                      className="institution-logo"
                      width={50}
                      height={50}
                    />
                    <p className="institution">Richmond College, Galle, Sri Lanka</p>
                  </div>
                  <p className="description">Physical Science Stream with Combined Mathematics, Physics, and Chemistry. Demonstrated persistence and commitment to academic excellence through dedicated preparation.</p>
                  <div className="achievement-highlight">
                    <strong>Results:</strong> First attempt - 3Bs | Second attempt - 2As and 1B<br />
                    Shows determination and continuous improvement in challenging subjects.
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
                  <h3>BSc. (Hons) Information Technology</h3>
                  <span className="date">2022 - 2026 (Expected)</span>
                </div>
                <div className="card-body">
                  <div className="institution-header">
                    <Image 
                      src="/images/university-moratuwa-logo.png" 
                      alt="University of Moratuwa Logo" 
                      className="institution-logo"
                      width={50}
                      height={50}
                    />
                    <p className="institution">University of Moratuwa, Sri Lanka</p>
                  </div>
                  <p className="description">Currently in 3rd year pursuing Bachelor of Science (Honours) in Information Technology. Specializing in software development, systems analysis, and modern computing technologies.</p>
                  <div className="achievement-highlight">
                    <strong>Current CGPA: 3.2</strong> - Maintaining strong academic performance while developing expertise in full-stack development, business analysis, and project management.
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

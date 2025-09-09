export default function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="section-subtitle">Thoughts on technology, development, and learning</p>
        
        <div className="blogs-grid">
          <div className="card blog-card">
            <div className="blog-header">
              <h3>Building Scalable React Applications</h3>
              <div className="blog-meta">
                <span className="date">December 2024</span>
                <span className="read-time">5 min read</span>
              </div>
            </div>
            <div className="blog-content">
              <p>Exploring best practices for building large-scale React applications, including component architecture, state management, and performance optimization techniques.</p>
              <div className="blog-tags">
                <span className="tag">React</span>
                <span className="tag">Architecture</span>
                <span className="tag">Performance</span>
              </div>
            </div>
            <div className="blog-footer">
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="card blog-card">
            <div className="blog-header">
              <h3>My Journey into Full-Stack Development</h3>
              <div className="blog-meta">
                <span className="date">November 2024</span>
                <span className="read-time">7 min read</span>
              </div>
            </div>
            <div className="blog-content">
              <p>Reflecting on my transition from computer engineering student to full-stack developer, the challenges faced, and lessons learned along the way.</p>
              <div className="blog-tags">
                <span className="tag">Career</span>
                <span className="tag">Learning</span>
                <span className="tag">Full-Stack</span>
              </div>
            </div>
            <div className="blog-footer">
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="card blog-card">
            <div className="blog-header">
              <h3>Next.js vs React: When to Choose What</h3>
              <div className="blog-meta">
                <span className="date">October 2024</span>
                <span className="read-time">6 min read</span>
              </div>
            </div>
            <div className="blog-content">
              <p>A comprehensive comparison of Next.js and React, covering use cases, performance considerations, and decision factors for your next project.</p>
              <div className="blog-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">Comparison</span>
              </div>
            </div>
            <div className="blog-footer">
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        </div>

        <div className="blog-cta">
          <p>Want to stay updated with my latest posts?</p>
          <a href="#contact" className="btn btn-primary">Subscribe to Newsletter</a>
        </div>
      </div>
    </section>
  )
}

export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Angular", icon: "🅰️" }
  ]

  const backendSkills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "🐘" },
    { name: "Java", icon: "☕" },
    { name: "ASP.NET Core", icon: "🔷" }
  ]

  const databaseSkills = [
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebase", icon: "🔥" },
    { name: "SQLite", icon: "💎" }
  ]

  const hardwareTools = [
    { name: "Arduino IDE", icon: "🔧" },
    { name: "Proteus", icon: "⚙️" },
    { name: "Multisim", icon: "📊" },
    { name: "KiCad", icon: "🔌" },
    { name: "Oscilloscope", icon: "📡" },
    { name: "Multimeter", icon: "⚡" }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise and tools</p>
        </div>
        
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Frontend Technologies</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-content">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Technologies</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-content">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Database Technologies</h3>
            <div className="skills-list">
              {databaseSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-content">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Hardware & Tools</h3>
            <div className="skills-list">
              {hardwareTools.map((tool, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-content">
                    <span className="skill-icon">{tool.icon}</span>
                    <span className="skill-name">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

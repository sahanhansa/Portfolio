export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", color: "#38B2AC" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#DD0031" }
  ]

  const backendSkills = [
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
    { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", color: "#512BD4" }
  ]

  const databaseSkills = [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    { name: "DBeaver", icon: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png", color: "#382923" }
  ]

  const devTools = [
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
    { name: "npm/yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", color: "#CB3837" }
  ]

  const hardwareTools = [
    { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" }
  ]

  const otherTools = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#FF6C37" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" }
  ]

  // Simple SVG icon component
  const TechIcon = ({ iconName, color }: { iconName: string; color: string }) => {
    const iconPaths: { [key: string]: string } = {
      html5: "M12 2L3 20l9 2 9-2L12 2zm-2.56 3.28h5.12l-.28 3.32H9.28l.28-3.32zm4.76 4.04l-.28 3.32H9.28l-.28-3.32h5.48zM12 15.6l-2.68-.6-.17-1.92h1.34l.08.96L12 14.64l1.43-.6.08-.96h1.34l-.17 1.92L12 15.6z",
      css3: "M3 2h18l-1.5 17L12 22l-7.5-3L3 2zm3.5 4.5h11l-.5 5.5H8l.25 2.75h8.5l-.75 8.25L12 19.5l-4-.75-.25-2.75h2l.125 1.375L12 17.625l2.125-.375.25-2.75H6.75L6 4.5z",
      javascript: "M3 3h18v18H3V3zm15.5 10.5c0-2.5-1.5-3.5-3.5-3.5s-3.5 1-3.5 3.5v4h2v-4c0-.5.5-1 1.5-1s1.5.5 1.5 1v4h2v-4zm-9 0c0-2.5-1.5-3.5-3.5-3.5S2.5 11 2.5 13.5v4h2v-4c0-.5.5-1 1.5-1s1.5.5 1.5 1v4h2v-4z",
      react: "M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm8.5 2.5c0-1.5-2-3-5.5-3.5.5-2 .5-3.5 0-4.5-1-1-2.5-.5-4 1s-2.5 3.5-2.5 5.5c-1.5.5-3 1.5-3 2.5s1.5 2 3 2.5c0 2 1 4 2.5 5.5s3 2 4 1c.5-1 0-2.5-.5-4.5 3.5-.5 5.5-2 5.5-3.5z",
      nextjs: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14H8.5v-8h7v8zm-5.5-6v4h4v-4h-4z",
      typescript: "M3 3h18v18H3V3zm12.5 13.5h2v-2h-2v2zm-5-8h3v8h-3v-8zm-2.5 0h2v8h-2v-8z",
      tailwind: "M6 2c2 0 3.5 1 4 3 1-2 2.5-3 4.5-3 3 0 4.5 2.5 4.5 5.5 0 1.5-.5 3-1.5 4-1 1-2.5 1.5-4.5 1.5-1.5 0-3-.5-4-1.5S6 9.5 6 8c0-3 1.5-5.5 4.5-5.5z",
      angular: "M12 2L3 6l1.5 13L12 22l7.5-3L21 6l-9-4zm0 2.5l6.5 2.5-1 8.5L12 19.5l-5.5-2.5-1-8.5L12 4.5z",
      nodejs: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      express: "M2 12h20M6 8l-4 4 4 4M18 8l4 4-4 4",
      python: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      php: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      java: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      dotnet: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      mysql: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      mongodb: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      postgresql: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      firebase: "M12 2L3 6l1.5 13L12 22l7.5-3L21 6l-9-4zm0 2.5l6.5 2.5-1 8.5L12 19.5l-5.5-2.5-1-8.5L12 4.5z",
      sqlite: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      git: "M12 2L2 12l10 10 10-10L12 2zm0 2.5l7.5 7.5L12 19.5 4.5 12 12 4.5z",
      vscode: "M12 2L2 6l1.5 13L12 22l7.5-3L21 6l-9-4zm0 2.5l6.5 2.5-1 8.5L12 19.5l-5.5-2.5-1-8.5L12 4.5z",
      docker: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      npm: "M12 2L2 6l1.5 13L12 22l7.5-3L21 6l-9-4zm0 2.5l6.5 2.5-1 8.5L12 19.5l-5.5-2.5-1-8.5L12 4.5z",
      arduino: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      proteus: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      multisim: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      kicad: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      oscilloscope: "M2 12h20M6 8l6 4-6 4V8zM18 8v8",
      multimeter: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      figma: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      postman: "M12 2L2 6l1.5 13L12 22l7.5-3L21 6l-9-4zm0 2.5l6.5 2.5-1 8.5L12 19.5l-5.5-2.5-1-8.5L12 4.5z",
      chrome: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8h-2V7h2v2z",
      windows: "M3 5h8v6H3V5zm10 0h8v6h-8V5zM3 13h8v6H3v-6zm10 0h8v6h-8v-6z"
    }

    return (
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill={color}
        className="skill-svg-icon"
      >
        <path d={iconPaths[iconName] || iconPaths.react} />
      </svg>
    )
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise and tools</p>
        </div>
        
        <div className="skills-grid-clean">
          {/* First Row - Two Columns */}
          <div className="skills-row-clean">
            <div className="skills-category-clean">
              <h3>Frontend Technologies</h3>
              <div className="skills-list-clean">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category-clean">
              <h3>Backend Technologies</h3>
              <div className="skills-list-clean">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Two Columns */}
          <div className="skills-row-clean">
            <div className="skills-category-clean">
              <h3>Database Technologies</h3>
              <div className="skills-list-clean">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category-clean">
              <h3>Development Tools</h3>
              <div className="skills-list-clean">
                {devTools.map((tool, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third Row - Hardware & Tools in Two Columns */}
          <div className="skills-row-clean">
            <div className="skills-category-clean">
              <h3>Hardware & Tools</h3>
              <div className="skills-list-clean">
                {hardwareTools.map((tool, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category-clean">
              <h3>Other Tools</h3>
              <div className="skills-list-clean">
                {otherTools.map((tool, index) => (
                  <div key={index} className="skill-item-clean">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="skill-icon-img"
                    />
                    <span className="skill-name-clean">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
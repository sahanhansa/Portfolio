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

  return (
    <section id="skills" className="py-10 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Skills</h2>
          <p className="text-lg text-gray-300">My technical expertise and tools</p>
        </div>
        
        <div className="space-y-12">
          {/* First Row - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Frontend Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Backend Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Database Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Development Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {devTools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third Row - Hardware & Tools in Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Hardware & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hardwareTools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Other Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {otherTools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium text-gray-200 text-center">{tool.name}</span>
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
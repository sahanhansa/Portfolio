'use client'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">My Projects</h2>
          <p className="text-base sm:text-lg text-gray-300">A showcase of my development work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Freshly Project Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="aspect-video overflow-hidden">
              <Image 
                src="/images/Freshly%20Frontend%20-%20Google%20Chrome%208_4_2025%203_12_26%20AM.png" 
                alt="Freshly Laundry Management System" 
                className="w-full h-full object-cover"
                width={400}
                height={280}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Freshly - Laundry Management System</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">2025</p>
              <p className="text-gray-400 text-sm mb-2 sm:mb-4">A comprehensive laundry management system with four interfaces (Customer, Admin, Driver, Laundry). Connects customers with registered laundries and provides online service booking with driver coordination.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">Angular</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">ASP.NET Core</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">Team Leadership</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.vave.lk/index.html" className="px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">Partner Company</a>
                <a href="https://github.com/sahanhansa/FreshlyFrontend" className="px-4 py-2 bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">Frontend Repo</a>
                <a href="https://github.com/sahanhansa/FreshlyBackend" className="px-4 py-2 bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">Backend Repo</a>
              </div>
            </div>
          </div>
          {/* StrikeMate Project Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="aspect-video overflow-hidden">
              <Image 
                src="/images/strikemate.png" 
                alt="StrikeMate Automated Carrom Opponent" 
                className="w-full h-full object-cover"
                width={400}
                height={280}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">StrikeMate - Automated Carrom Opponent</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">2024</p>
              <p className="text-gray-400 text-sm mb-2 sm:mb-4">An automated carrom opponent with precision shooting mechanism. Designed and developed the shooting system with angle control, integrated solenoid with Arduino Uno through relay modules.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs sm:text-sm rounded-full">Arduino Uno</span>
                <span className="px-3 py-1 bg-green-600 text-white text-xs sm:text-sm rounded-full">MG995 Servo</span>
                <span className="px-3 py-1 bg-green-600 text-white text-xs sm:text-sm rounded-full">Solenoid</span>
                <span className="px-3 py-1 bg-green-600 text-white text-xs sm:text-sm rounded-full">Hardware Design</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors">Documentation</a>
                <a href="#" className="px-4 py-2 bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          {/* Portfolio Project Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="aspect-video overflow-hidden">
              <Image 
                src="/images/Sahan%20Siriwardhana%20-%20Portfolio%20.png" 
                alt="Personal Portfolio Website" 
                className="w-full h-full object-cover"
                width={400}
                height={280}
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Personal Portfolio Website</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">2025</p>
              <p className="text-gray-400 text-sm mb-2 sm:mb-4">A modern, responsive portfolio website showcasing my professional journey, projects, and skills. Built with clean design principles and optimized user experience.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full">Responsive Design</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://portfolio-olive-three-21.vercel.app/" className="px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/sahanhansa/Portfolio" className="px-4 py-2 bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

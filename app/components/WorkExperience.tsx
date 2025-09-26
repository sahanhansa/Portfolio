export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">Professional volunteer leadership and project management experience</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            <div className="relative flex items-start">
              {/* Timeline marker */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
              
              {/* Content */}
              <div className="ml-20 bg-white rounded-lg shadow-lg overflow-hidden flex-1">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Nena Aruna - Project Director</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">2023 - 2024</span>
                  </div>
                </div>
                
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/images/Nena%20Aruna.jpg" 
                    alt="Nena Aruna Project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-gray-700 font-medium">Rotaract Club of University of Moratuwa</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
                      <p className="text-gray-600">Directed the Nena Aruna initiative, a comprehensive educational support project that won the Gold Award as the most outstanding project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Led educational support for O/L students across Sri Lanka</li>
                        <li>Organized 30+ tutoring sessions and seminars</li>
                        <li>Reached 50+ schools across 10 districts</li>
                        <li>Implemented "Hari Para" career guidance series</li>
                        <li>Won Gold Award for Most Outstanding Project</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Project Management</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Educational Leadership</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Community Outreach</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Award Winner</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-start">
              {/* Timeline marker */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
              
              {/* Content */}
              <div className="ml-20 bg-white rounded-lg shadow-lg p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Community Development Projects</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">2022 - Present</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-gray-700 font-medium">Various Volunteer Organizations</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership Role</h4>
                    <p className="text-gray-600">Led multiple community development initiatives focusing on education, technology access, and social impact across various volunteer organizations.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Core Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Coordinated multiple community service projects</li>
                      <li>Provided technical mentorship to students</li>
                      <li>Organized workshops for digital literacy</li>
                      <li>Collaborated with local organizations for sustainable impact</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Community Service</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Mentorship</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Digital Literacy</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Social Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

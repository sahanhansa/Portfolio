export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Web Development Fundamentals</h3>
              <span className="text-sm text-blue-600 font-medium">Coursera</span>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Comprehensive certification covering HTML, CSS, JavaScript, and modern web development practices.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2023</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">React Development</h3>
              <span className="text-sm text-blue-600 font-medium">Meta</span>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Advanced React concepts including hooks, context, state management, and modern React patterns.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2023</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Angular Framework</h3>
              <span className="text-sm text-blue-600 font-medium">Google</span>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Complete Angular framework certification covering components, services, routing, and best practices.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2024</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Database Management</h3>
              <span className="text-sm text-blue-600 font-medium">University of Moratuwa</span>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Advanced database concepts, SQL optimization, and database design principles.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2023</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Academic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Career Posts</h2>
          <p className="text-lg text-gray-300">My professional journey and career insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">First Industry Visit to Epic Lanka</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>March 2024</span>
                  <span>3 min read</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 mb-4">Grateful for the opportunity as our first industry visit to the renowned IT company Epic Lanka. An awesome experience as we were guided deeper into the world of IT by our delightful hosts.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Industry Visit</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Epic Lanka</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Learning</span>
                </div>
              </div>
              <div>
                <a href="https://www.linkedin.com/posts/sahan-siriwardhana-977700288_grateful-for-the-oppurtunity-as-our-first-activity-7171476530882105346-ZkQf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">Read More →</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">My Journey into Full-Stack Development</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>November 2024</span>
                  <span>7 min read</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 mb-4">Reflecting on my transition from IT undergraduate to full-stack developer, the challenges faced, and lessons learned along the way through university projects and volunteer work.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Career</span>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Learning</span>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Full-Stack</span>
                </div>
              </div>
              <div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Coming Soon →</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">Leadership Through Volunteer Service</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>December 2024</span>
                  <span>6 min read</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 mb-4">How my experience as Co-Director of Community Service at Rotaract Club shaped my leadership skills and project management abilities in real-world scenarios.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Leadership</span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Volunteer</span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Project Management</span>
                </div>
              </div>
              <div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Coming Soon →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-gray-800 rounded-lg p-8">
          <p className="text-lg text-gray-300 mb-4">Want to stay updated with my career journey?</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Connect With Me</a>
            <a href="https://www.linkedin.com/in/sahan-siriwardhana-977700288/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Follow on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

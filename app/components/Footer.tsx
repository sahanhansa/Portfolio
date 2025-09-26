export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Sahan Siriwardhana</h3>
            <p className="text-gray-300 mb-6">Computer Engineering Student & Full-Stack Developer passionate about creating innovative solutions and meaningful user experiences.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/sahanhansa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sahansiriwardhana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:sahan.siriwardhana@example.com" className="text-gray-300 hover:text-white transition-colors">
                <span>Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#education" className="block text-gray-300 hover:text-white transition-colors">Education</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>React Applications</li>
              <li>Full-Stack Solutions</li>
              <li>Technical Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 sahan.siriwardhana@example.com</p>
              <p>📱 +94 12 345 6789</p>
              <p>📍 Colombo, Sri Lanka</p>
              <p>🎓 University of Moratuwa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 sm:mb-0">
            <p>&copy; 2024 Sahan Siriwardhana. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
